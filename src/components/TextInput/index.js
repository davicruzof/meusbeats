import React, { useState } from 'react';
import { Container, ContainerLabel, Input, Label } from './styles';

export const TextInput = ({ color, label ,onBlur,onFocus, active, ...rest }) => {
  
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container>
      <Input
        onBlur={(event) => {
          setIsFocused(active)
          onBlur?.(event)
        }}
        onFocus={(event) => {
          setIsFocused(true)
          onFocus?.(event)
        }}
        focused={isFocused}
        {...rest}
      />
      <ContainerLabel color={color} focused={active || isFocused}>
        <Label focused={isFocused} >{label}</Label>
      </ContainerLabel>
    </Container>
  );
};
