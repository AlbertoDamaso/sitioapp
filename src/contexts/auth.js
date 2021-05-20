import React, { useState, createContext, useEffect } from 'react';
import firebase from '../services/firebaseConnection';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const[user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const [loadingAuth, setLoadingAuth] = useState(false);

    useEffect(()=>{
        async function loadStorage() {
            const storageUser = await AsyncStorage.getItem('Auth_user')

            if(storageUser){
                setUser(JSON.parse(storageUser))
                setLoading(false)
            }            
            setLoading(false)
        }
        loadStorage()
    }, [])

    //Logar o usuario
    async function signIn(email, password) {
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(async (value) =>{
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).once('value')
            .then((snapshot)=>{
                let data = {
                    uid: uid,
                    nome: snapshot.val().nome,
                    zap: snapshot.val().zap,
                    email: value.user.email,
                };
                storageUser(data);
                setUser(data);
                setLoadingAuth(false);
            })
        })
        .catch((error) => {
            alert(error.code);
            setLoadingAuth(false);
        })
    }
    
    //Cadastrar usuario
    async function signUp(email, password, nome, zap){
        setLoadingAuth(true);
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async (value) =>{
            alert('Usuario criado: ' + value.user.email);
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).set({                 
                nome: nome,
                zap: zap
            })
            .then(()=>{
                let data = {
                    uid: uid,
                    nome: nome,
                    zap: zap,
                    email: value.user.email,
                };
                setUser(data);
                storageUser(data);
                setLoadingAuth(false);
            })
        })
        .catch( (error) => {
            if(error.code === 'auth/weak-password'){
              alert('Sua senha deve ter pelo menos 6 caracteres');
              setLoadingAuth(false);
              return;
            }
            if(error.code === 'auth/invalid-email'){
              alert('Email invalido');
              setLoadingAuth(false);
              return;
            }else{
              alert('Ops algo deu errado!');
              setLoadingAuth(false);
              return;
            }      
        })
    }
    
    async function storageUser(data) {
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data))        
    }

    async function signOut(){
        await firebase.auth().signOut();
        await AsyncStorage.clear()
            .then( ()=> {
                setUser(null);
            })
    }
    
    return(
        <AuthContext.Provider value={{ signed: !!user, user, loading, loadingAuth, signUp, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;