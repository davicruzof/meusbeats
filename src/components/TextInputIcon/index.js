import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { TextInput } from '../TextInput';

export const TextInputIcon = ({ icon, isPassword, active, label, updateIcon, ...props }) => {
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
        color="#979797"
        backgroundColor='transparent'
        onPress={updateIcon} 
      >
        <TextInput 
            isPassword={isPassword}
            label={label}
            color="transparent"
            placeholder={label}
            active={active}
            {...props}
        />
      </Icon.Button>
  );
};