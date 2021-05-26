import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../pages/Home';
import New from '../pages/New';
import Profile from '../pages/Profile';
import CustomDrawer from '../components/CustomDrawer';

const AppDrawer = createDrawerNavigator();

function AppRoutes(){
    return(
        <AppDrawer.Navigator
            drawerContent={ (props) => <CustomDrawer {...props} /> }
            drawerStyle={{
                backgroundColor:'#C4C4C4',
            }}
            drawerContentOptions={{
                labelStyle:{
                    fontWeight: 'bold',
                },
                activeTintColor: '#000',
                activeBackgroundColor: '#9BE5A2',
                inactiveBackgroundColor: '#fff',
                inactiveTintColor: '#000',                
                itemStyle: {
                    marginVertical: 5,
                }                
            }}
        >
            <AppDrawer.Screen name="Home" component={Home}/>
            <AppDrawer.Screen name="Registrar Bovino" component={New}/>
            <AppDrawer.Screen name="Perfil" component={Profile}/>
        </AppDrawer.Navigator>
    )
}

export default AppRoutes;