import React, { ReactElement } from 'react';
import { ButtonProps } from 'react-native';

import { Container, TextButton } from './styles';

interface TypeButtonProps extends ButtonProps {
    text: string | '';
    active: Boolean | false;
}

export const Button = ({ text, active, ...props }: TypeButtonProps): ReactElement => {
    return (
        <Container active={active} {...props}>
            <TextButton>{text}</TextButton>
        </Container>
    );
};
