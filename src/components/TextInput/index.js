import React, { useEffect, useState } from 'react';
import {
  Input,
  Container,
} from './styles';

import {Label } from '../Label'
import { Fonts } from '../../utils/Fonts';
import { Colors } from '../../utils/Colors';

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
        active={active}
        {...rest}
        placeholderTextColor={Colors.placeholder}
        placeholder={isFocused ? "" : placeholder}
      />
      {
        (isFocused || active) && (
          <Label label={label} active={isFocused} />
        )
      }
    </Container>
  );
};
