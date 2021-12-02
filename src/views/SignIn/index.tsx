import React, { ReactElement, useEffect, useState } from 'react';
import { IconButton } from '@components/IconButton';
import { Input } from '@components/Input';
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
import bg from '@assets/bg-login.png';
import { Button } from '@components/Button';
import { Alert, StatusBar } from 'react-native';
import { Colors } from '@utils/Colors';

const SignIn = function (): ReactElement {
    const [user, setUser] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [userView, setUserView] = useState<boolean>(false);
    const [errorUser, setErrorUser] = useState<boolean>(false);
    const [activeButton, setActiveButton] = useState<boolean>(false);
    const [passwordView, setPasswordView] = useState<boolean>(false);
    const [errorPassword, setErrorPassword] = useState<boolean>(false);
    const [activeRegisterButton, setActiveRegisterButton] =
        useState<boolean>(false);

    const iconUser = userView ? 'eye-off' : 'eye';
    const iconPassword = passwordView ? 'eye-off' : 'eye';
    useEffect(() => {
        setErrorUser(false);
    }, [user]);

    useEffect(() => {
        setErrorPassword(false);
    }, [password]);

    const login = async () => {
        if (!user || !password) {
            Alert.alert('Meus Beats', 'Preencha o usuário e a senha');
            return;
        }

        setActiveButton(!activeButton);

        const raw = JSON.stringify({
            email: user,
            senha: password
        });

        apiRequest(raw);
    };

    const apiRequest = async (data: string) => {
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: data
        };

        fetch('https://meusbeats.herokuapp.com/api/login', requestOptions)
            .then((response) => response.json())
            .then((result) => {
                result.message === 'Usuario inválido'
                    ? setErrorUser(true)
                    : setErrorUser(false);
                result.message === 'Senha inválida'
                    ? setErrorPassword(true)
                    : setErrorPassword(false);
            })
            .catch((_) =>
                Alert.alert('Meus Beats', 'Desculpa ocorreu um erro!')
            );
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
                                status={!!user}
                                text="Usuário"
                                value={user}
                                secureTextEntry={!userView}
                                onChangeText={(value: string) => setUser(value)}
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
