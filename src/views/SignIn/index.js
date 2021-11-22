import React, { useState } from 'react';
import {StatusBar } from 'react-native';
import bg_login from '../../assets/bg-login.png';
import Icon from 'react-native-vector-icons/Feather';
import { TextInput } from '../../components/TextInput';
import { 
    Title, 
    Subtitle, 
    Background, 
    FromContainer, 
    RegisterTitle, 
    RegisterButton, 
    ImageBackground, 
    RegisterContainer, 
    RegisterButtonText, 
} from './style';
import { Button } from '../../components/Button';

export const SignIn = () => {

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('');

  return (
      <ImageBackground source={bg_login}>
        <StatusBar
            backgroundColor="transparent"
            translucent={true} 
        />
        <Background colors={['rgba(125,34,255,0.5)', 'rgba(68,23,131,1)']}>
            <Background colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']}>
                <Title>Meus Beats</Title>
                <Subtitle>Especializados em fones para deejay</Subtitle>
                <FromContainer>
                    <Icon.Button 
                        name="eye" 
                        size={22}
                        iconStyle={{ 
                            flex:1,
                            top: 24,
                            right: 20,
                            position: 'absolute',
                        }}
                        color="#979797"
                        backgroundColor='transparent' 
                    >
                        <TextInput 
                            value={user}
                            label="Usuário"
                            color="transparent"
                            placeholder="Usuário"
                            active={user.length > 0 ? true: false}
                            onChangeText={value => setUser(value)}
                        />
                    </Icon.Button>
                    <Icon.Button 
                        name="eye" 
                        size={22}
                        iconStyle={{ 
                            flex:1,
                            top: 24,
                            right: 20,
                            position: 'absolute',
                        }}
                        color="#979797"
                        backgroundColor='transparent' 
                    >
                        <TextInput 
                            placeholder="Senha"
                            label="Senha"
                            value={password}
                            color="transparent"
                            active={password.length > 0 ? true: false}
                            onChangeText={value => setPassword(value)}
                        />
                    </Icon.Button>
                    <Button text="Entrar" />
                    <RegisterContainer>
                        <RegisterTitle>Ainda não é cadastrado?</RegisterTitle>
                        <RegisterButton>
                            <RegisterButtonText>Inscreva-se</RegisterButtonText>
                        </RegisterButton>
                    </RegisterContainer>
                </FromContainer>
            </Background>
        </Background>
    </ImageBackground>
  );
};
