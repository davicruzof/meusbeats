import styled from 'styled-components/native';
import { Colors } from '../../utils/Colors';
import { Fonts } from '../../utils/Fonts';

export const Container = styled.View`
    width: 100%;
    z-index: -1;
`;

export const Input = styled.TextInput`
    border: ${props => props.focused
        ? '3px solid ' + Colors.lilac
        : '1px solid ' + Colors.gray};
    background-color: transparent;
    border-top-width: ${props => props.focused || props.active ? 0 : '1px'};
    border-radius: 4px;
    height: 56px;
    padding: 16px;
    font-family: ${Fonts.RobotoRegular};
    font-size: 16px;
    color: ${Colors.white};
`;

export const ContainerError = styled.View`
    width: 100%;
    padding: 10px 0;
    padding-left: 15px;
`;

export const TextError = styled.Text`
    color: ${Colors.ligthGreen};
    font-size: 12px;
    letter-spacing: 0.4px;
    font-family: ${Fonts.RobotoRegular};
`;