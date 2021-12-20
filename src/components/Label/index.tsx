import React, { ReactElement } from 'react';

import { LabelProps } from '@interfaces/label-props';

import { After, Before, Container, Text } from './styles';

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
