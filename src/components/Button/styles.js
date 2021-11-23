import styled from "styled-components";

export const Container = styled.TouchableOpacity`
    background-color: ${props => props.active ? '#985EFF' : '#6200EE'};
    height: 50px;
    border-radius: 200px;
    justify-content: center;
    align-items: center;
`;

export const TextButton = styled.Text`
    color: #fff;
    font-family: 'DMSans-Bold';
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 0.2px;
`;