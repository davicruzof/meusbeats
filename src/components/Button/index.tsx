import React, { ReactElement } from 'react';

import { TypeButtonProps } from '@interfaces/button-props';

import { Container, TextButton } from './styles';

export const Button = ({
    text,
    active,
    ...props
}: TypeButtonProps): ReactElement => {
    return (
        <Container active={active} {...props}>
            <TextButton>{text}</TextButton>
        </Container>
    );
};
