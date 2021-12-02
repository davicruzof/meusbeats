import { Colors } from '@utils/Colors';
import { Fonts } from '@utils/Fonts';
import styled from 'styled-components/native';

interface InputProps {
    focused: boolean;
    active: boolean;
}

export const Container = styled.View`
    width: 100%;
    z-index: -1;
`;

export const ContainerInput = styled.TextInput<InputProps>`
    border: ${(props) =>
        props.focused
            ? '3px solid ' + Colors.lilac
            : '1px solid ' + Colors.gray};
    background-color: transparent;
    border-top-width: ${(props) => (props.focused || props.active ? 0 : '1px')};
    border-radius: 4px;
    height: 56px;
    padding: 16px;
    font-family: ${Fonts.RobotoRegular};
    font-size: 16px;
    color: ${Colors.white};
`;
