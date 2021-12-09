import React, { ReactElement, useEffect, useState } from 'react';
import { Alert, StatusBar } from 'react-native';

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
import { LoginRequest } from '@services/login';
import { UserLogin } from '@interfaces/user-login';
import { IconButton } from '@components/IconButton';
import { validateLoginFill } from '@services/validation-login';

const SignIn = function (): ReactElement {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [userView, setUserView] = useState<boolean>(false);
    const [errorUser, setErrorUser] = useState<boolean>(false);
    const [activeButton, setActiveButton] = useState<boolean>(false);
    const [passwordView, setPasswordView] = useState<boolean>(false);
    const [errorPassword, setErrorPassword] = useState<boolean>(false);
    const [activeRegisterButton, setActiveRegisterButton] =
        useState<boolean>(false);
    const msgErrorUser = 'Usuario inválido';
    const msgErrorPassword = 'Senha inválida';
    const iconUser = userView ? 'eye-off' : 'eye';
    const iconPassword = passwordView ? 'eye-off' : 'eye';

    useEffect(() => {
        setErrorUser(false);
    }, [username]);

    useEffect(() => {
        setErrorPassword(false);
    }, [password]);

    const login = async () => {
        const userData: UserLogin = { username, password };

        if (!validateLoginFill(userData)) {
            Alert.alert('Meus Beats', 'Preencha o usuário e a senha');
            return;
        }

        setActiveButton(!activeButton);

        const res = await LoginRequest(userData);

        const errorUserMessage = res.message === msgErrorUser ? true : false;
        setErrorUser(errorUserMessage);
        const errorPasswordMessage =
            res.message === msgErrorPassword ? true : false;
        setErrorPassword(errorPasswordMessage);
    };

    const register = () => {
        setActiveRegisterButton(!activeRegisterButton);
    };

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
