import React, { ReactElement } from 'react';

import { Container, TextError } from './styles';

interface ErrorProps {
    text: string;
}

const Error = function ({ text }: ErrorProps): ReactElement {
    return (
        <Container>
            <TextError>{text}</TextError>
        </Container>
    );
};

export { Error };
