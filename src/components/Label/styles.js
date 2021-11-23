import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    align-items: center; 
    position: absolute; 
    top: -7.5px;
`;

export const After = styled.View.attrs({
    flex: 0.05, 
})`
    height: ${props => props.active ? 3 : 1}px; 
    background-color: ${props => props.active ? '#BB86FC' : '#DADADA'};
`;

export const Before = styled.View.attrs({
    flex: 1, 
})`
    height: ${props => props.active ? 3 : 1}px; 
    background-color: ${props => props.active ? '#BB86FC' : '#DADADA'};
`;

export const Text = styled.Text`
    font-family: 'Roboto-Regular';
    text-align: center;
    padding: 0 5px;
    color: ${props => props.active ? '#BB86FC' : '#DADADA'};
    font-size: 12px;
`;
