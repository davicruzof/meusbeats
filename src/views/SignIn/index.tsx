import React, { ReactElement, useEffect } from 'react';
import { StatusBar } from 'react-native';

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
    ContainerButton
} from './styles';

import bg from '@assets/bgLogin.png';
import { Colors } from '@utils/Colors';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { IconButton } from '@components/IconButton';

import {
    activeButton,
    activeRegisterButton,
    errorPassword,
    errorUser,
    login,
    password,
    passwordView,
    register,
    setErrorPassword,
    setErrorUser,
    setPassword,
    setPasswordView,
    setUsername,
    setUserView,
    username,
    userView
} from './logic';

const SignIn = function (): ReactElement {
    const iconUser = userView ? 'eye-off' : 'eye';
    const iconPassword = passwordView ? 'eye-off' : 'eye';

    useEffect(() => {
        setErrorUser(false);
    }, [username]);

    useEffect(() => {
        setErrorPassword(false);
    }, [password]);

    return (
        <ImageBackground source={bg}>
            <StatusBar backgroundColor={Colors.transparent} translucent />
            <Background colors={[Colors.ligthPrimary, Colors.darkPrimary]}>
                <Background colors={[Colors.transparent, Colors.black]}>
                    <Title>Meus Beats</Title>
                    <Subtitle>Especializados em fones para deejay</Subtitle>
                    <FromContainer>
                        <IconButton
                            updateIcon={() => setUserView(!userView)}
                            name={iconUser}
                        >
                            <Input
                                error="Usuário invalido"
                                errorInput={errorUser}
                                status={!!username}
                                text="Usuário"
                                value={username}
                                secureTextEntry={!userView}
                                onChangeText={(value: string) =>
                                    setUsername(value)
                                }
                            />
                        </IconButton>
                        <IconButton
                            updateIcon={() => setPasswordView(!passwordView)}
                            name={iconPassword}
                        >
                            <Input
                                error="Senha incorreta"
                                errorInput={errorPassword}
                                status={!!password}
                                text="Senha"
                                secureTextEntry={!passwordView}
                                value={password}
                                onChangeText={(value: string) =>
                                    setPassword(value)
                                }
                            />
                        </IconButton>
                        <ContainerButton>
                            <Button
                                onPress={login}
                                text="Entrar"
                                active={activeButton}
                                title={'Entrar'}
                            />
                        </ContainerButton>
                        <RegisterContainer>
                            <RegisterTitle>
                                Ainda não é cadastrado?
                            </RegisterTitle>
                            <RegisterButton>
                                <RegisterButtonText
                                    active={activeRegisterButton}
                                    onPress={register}
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

export { SignIn };
