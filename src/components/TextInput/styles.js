import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    z-index: -1;
`;

export const Input = styled.TextInput`
    border: ${props => props.focused ? '3px solid #BB86FC' : '1px solid #DADADA'};
    background-color: transparent;
    border-top-width: ${props => props.focused || props.active ? 0 : '1px'};
    border-radius: 4px;
    height: 56px;
    padding: 16px;
    font-family: 'Roboto-Regular';
    font-size: 16px;
    margin-bottom: 32px;
    color: #fff;
`;
