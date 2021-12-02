import React, { ReactElement } from 'react';

import { After, Before, Container, Text } from './styles';

interface LabelProps {
    text: string;
    status: boolean;
    focus: boolean;
}

const Label = function ({ text, status, focus }: LabelProps): ReactElement {
    return (
        <Container>
            <Before active={focus} />
            <Text active={status} focus={focus}>
                {text}
            </Text>
            <After active={focus} />
        </Container>
    );
};

export { Label };
