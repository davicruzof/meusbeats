import styled from 'styled-components/native';
import { Colors } from '@utils/Colors';
import { Fonts } from '@utils/Fonts';

interface ContainerProps {
    active: boolean;
    focus?: boolean;
}

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    position: absolute;
    top: -7.5px;
`;

export const Before = styled.View<ContainerProps>`
    width: 5%;
    height: ${(props) => (props.active ? 3 : 1)}px;
    background-color: ${(props) => (props.active ? Colors.lilac : Colors.gray)};
`;

export const After = styled.View.attrs({
    flex: 1
})<ContainerProps>`
    height: ${(props) => (props.active ? 3 : 1)}px;
    background-color: ${(props) => (props.active ? Colors.lilac : Colors.gray)};
`;

export const Text = styled.Text<ContainerProps>`
    font-family: ${Fonts.RobotoRegular};
    text-align: center;
    padding: 0 5px;
    color: ${(props) =>
        props.active && props.focus ? Colors.lilac : Colors.gray};
    font-size: 12px;
`;
