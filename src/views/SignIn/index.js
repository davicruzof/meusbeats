import React, { useState } from 'react';
import {StatusBar } from 'react-native';
import bg_login from '../../assets/bg-login.png';
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
import { TextInputIcon } from '../../components/TextInputIcon';

export const SignIn = () => {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [userView, setUserView] = useState(false);
  const [activeButton, setActiveButton] = useState(false);
  const [passwordView, setPasswordView] = useState(false);
  const [activeRegisterButton, setActiveRegisterButton] = useState(false);

  return (
    <ImageBackground source={bg_login}>
        <StatusBar
            backgroundColor="transparent"
            translucent={true} 
        />
        <Background colors={['rgba(125,34,255,0.5)','rgba(68,23,131,1)']}>
            <Background colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']}>
                <Title>Meus Beats</Title>
                <Subtitle>
                    Especializados em fones para deejay
                </Subtitle>
                <FromContainer>
                    <TextInputIcon 
                        value={user}
                        label="Usuário"
                        isPassword={!userView}
                        icon={userView ? "eye-off": "eye"}
                        active={user.length > 0 ? true: false}
                        onChangeText={value => setUser(value)}
                        updateIcon={() => setUserView(!userView)}
                    />
                    <TextInputIcon 
                        value={password}
                        label="Senha"
                        isPassword={!passwordView}
                        icon={passwordView ? "eye-off": "eye"}
                        active={password.length > 0 ? true: false}
                        onChangeText={value => setPassword(value)}
                        updateIcon={() => setPasswordView(!passwordView)}
                    />
                    <Button 
                        onPress={() => setActiveButton(!activeButton)} 
                        text="Entrar"
                        active={activeButton}
                    />
                    <RegisterContainer>
                        <RegisterTitle>
                            Ainda não é cadastrado?
                        </RegisterTitle>
                        <RegisterButton>
                            <RegisterButtonText 
                                active={activeRegisterButton}
                                onPress={() => setActiveRegisterButton(!activeRegisterButton)}
                            >
                                Inscreva-se
                            </RegisterButtonText>
                        </RegisterButton>
                    </RegisterContainer>
                </FromContainer>
            </Background>
        </Background>
    </ImageBackground>
  );
};
