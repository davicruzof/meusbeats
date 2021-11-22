import styled from 'styled-components/native';

export const Container = styled.View`
    margin-top: 50px;
`;

export const Input = styled.TextInput`
    border: ${props => props.focused ? '3px solid #BB86FC' : '1px solid #DADADA'};
    background-color: transparent;
    border-radius: 4px;
    height: 56px;
    padding: 16px;
    font-family: 'Roboto-Regular';
    font-size: 16px;
    z-index: 999;
`;

export const ContainerLabel = styled.View`
    position: absolute;
    left: 16px;
    top: ${props => props.focused ? -6 : 17}px;
    padding: 0 8px;
    z-index: 1;
    background-color: ${props => props.focused ? props.color : 'transparent'};
`;

export const Label = styled.Text`
    font-family: 'Roboto-Regular';
    color: ${props => props.focused ? '#BB86FC' : '#979797'};
    font-size: ${props => props.focused ? 12 : 16}px;
`;
