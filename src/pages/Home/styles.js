import styled from 'styled-components/native'; 

export const Background = styled.View`
    flex:1;
    background-color: #F0F0F5;
`;

export const Container = styled.View`
    margin-left: 24px;
    margin-bottom: 25px;
`;

export const Nome = styled.Text`
    font-size: 22px;
    color: #000;
    font-style: italic;
`;

export const ContainerTitle = styled.View`
    width: 80%;
    justify-content: space-between;  
    align-self: center;
    flex-direction: row;
`;

export const Title = styled.Text`
    font-size: 20;
    font-weight: bold;
    color: #C4C4C4;
`;

export const List = styled.FlatList.attrs({
    marginHorizontal: 15
})`
    padding-top: 15px;
    background-color: #C4C4C4;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    margin-left: 12px;
    margin-right: 12px;

`;



