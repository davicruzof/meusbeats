import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { Colors } from '../../utils/Colors';
import { TextInput } from '../TextInput';

export const TextInputIcon = ({ 
  errorInput = false, 
  msgError = "",
  icon, 
  isPassword, 
  active, label, updateIcon, ...props }) => {
  
  return (
      <Icon.Button
        name={icon}
        size={22}
        iconStyle={{
            flex:1,
            top: 24,
            right: 20,
            position: 'absolute',
        }}
        color={Colors.darkGray}
        backgroundColor='transparent'
        onPress={updateIcon}
      >
        <TextInput
            isPassword={isPassword}
            label={label}
            color="transparent"
            placeholder={label}
            active={active}
            errorInput={errorInput} 
            msgError={msgError}
            {...props}
        />
      </Icon.Button>
  );
};
