import React from 'react';

import { Container, TextButton } from './styles';

export const Button = ({text, ...props}) => {
  return (
    <Container {...props}>
        <TextButton>{text}</TextButton>
    </Container>
    );
}
