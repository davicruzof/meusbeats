import React from 'react';

import { After, Before, Container, Text } from './styles';

export const Label = ({ active = false, label }) => {
  return (
    <Container active={active}>
        <After active={active} />
        <Text active={active}>{label}</Text>
        <Before active={active} />
    </Container>
  );
};
