import styled from 'styled-components/native';

export const Container = styled.View`    
    width: 92%;
    height: 58px;
    align-self: center;
    justify-content: center;
    margin-bottom: 10px;
    padding: 10px;    
    border-radius: 15px;
    background-color: #E1E1E1;
`;

export const Itens = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-left: 16px;
    margin-right: 26px;
`;

export const BrincoText = styled.Text`
    font-size: 20;    
`;

export const CategoText = styled.Text`
    width: 70px;
    font-size: 20;
`;