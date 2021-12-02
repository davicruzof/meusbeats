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
import bg from '@assets/bgLogin.png';
import { Button } from '@components/Button';
import { Alert, StatusBar } from 'react-native';
import { Colors } from '@utils/Colors';
import { apiRequest } from '../../services/login';

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
    const msgErrorUser = 'Usuario inválido';
    const msgErrorPassword = 'Senha inválida';
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

        const res = await apiRequest(raw);

        setErrorUser(res.message === msgErrorUser ? true : false);
        setErrorPassword(res.message === msgErrorPassword ? true: false);
    
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
