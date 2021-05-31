import styled from 'styled-components/native'


export const Background = styled.View`
    flex: 1;
    background-color: #F0F0F5;
`;

export const Input = styled.TextInput.attrs({
        placeholderTextColor: '#222',
    })`
    height: 50px;
    width: 90%;
    background-color: rgba(0,0,0,0.20);
    margin-top: 11px;
    padding-left: 19px;
    font-size: 17px;
`;


export const Area = styled.View`
    width: 90%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const SubmitButton = styled.TouchableOpacity`
    height: 50px;
    width: 90%;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    background-color: #228B22;
    border-radius: 15px;
`;

export const SubmitText = styled.Text`
    font-size: 21px;
    font-weight: bold;
    color: #000;
`;
