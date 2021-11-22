import React, { useEffect, useState } from 'react';
import { Container, ContainerLabel, Input, Label } from './styles';

export const TextInput = ({
  isPassword = true, 
  color, 
  placeholder, 
  label, 
  active, 
  ...rest }) => {
  
  const [isFocused, setIsFocused] = useState(false);
  const [border, setBorder] = useState(false);

  useEffect(() => {
    if(isFocused && active){
      setBorder(true)
    }else{
      if(isFocused && !active){
        setBorder(true)
      }else{
        setBorder(false)
      }
    }
  },[isFocused])

  return (
    <Container>
      <Input
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        focused={border}
        secureTextEntry={isPassword}
        {...rest}
        placeholderTextColor="rgba(255,255,255,0.6)"
        placeholder={isFocused ? "" : placeholder}
      />
      {
        (isFocused || active) && (
          <ContainerLabel color={color} active={active} focused={isFocused}>
            <Label focused={isFocused} active={active} >{label}</Label>
          </ContainerLabel>
        )
      }
    </Container>
  );
};
