import React, { ReactElement, useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Alert } from 'react-native';

import { LoginRequest } from '@services/login';
import { UserLogin } from '@interfaces/user-login';
import { validateUsername } from '@services/validate-input';
import { validatePassword } from '@services/validate-input';
import { validateLoginFill } from '@services/validation-login';

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
import { useNavigation } from '@react-navigation/native';

interface NavigationProps {
    navigate: (screen: string) => void;
}

const SignIn = function (): ReactElement {
    
    const navigation = useNavigation<NavigationProps>();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [userView, setUserView] = useState<boolean>(false);
    const [errorUser, setErrorUser] = useState<boolean>(false);
    const [activeButton, setActiveButton] = useState<boolean>(false);
    const [passwordView, setPasswordView] = useState<boolean>(false);
    const [errorPassword, setErrorPassword] = useState<boolean>(false);
    const [activeRegisterButton, setActiveRegisterButton] =
        useState<boolean>(false);
    const iconPassword = passwordView ? 'eye-off' : 'eye';
    const iconUser = userView ? 'eye-off' : 'eye';

    const login = async () => {
        const userData: UserLogin = { username, password };

        if (!validateLoginFill(userData)) {
            Alert.alert('Meus Beats', 'Preencha o usuário e a senha');
            return;
        }

        setActiveButton(!activeButton);

        const { message } = await LoginRequest(userData);

        message == 'success' ? nextScreen() : validateResult(message);
    };

    const validateResult = (message: string) => {
        const errorPasswordMessage = validatePassword(message);
        setErrorPassword(!errorPasswordMessage);

        const errorUserMessage = validateUsername(message);
        setErrorUser(!errorUserMessage);
    };

    const clearInputs = () => {
        setUsername('');
        setPassword('');
    };

    const nextScreen = () => {
        clearInputs();
        navigation.navigate('Home');
    };

    const register = () => {
        setActiveRegisterButton(!activeRegisterButton);
    };

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
