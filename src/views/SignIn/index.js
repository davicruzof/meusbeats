import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import bgLogin from '../../assets/bg-login.png';
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
import { Colors } from '../../utils/Colors';

export const SignIn = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [userView, setUserView] = useState(false);
    const [activeButton, setActiveButton] = useState(false);
    const [passwordView, setPasswordView] = useState(false);
    const [activeRegisterButton, setActiveRegisterButton] = useState(false);

    return (
        <ImageBackground source={bgLogin}>
            <StatusBar backgroundColor={Colors.transparent} translucent />
            <Background colors={[Colors.primary, Colors.secondary]}>
                <Background colors={[Colors.transparent, Colors.black]}>
                    <Title>Meus Beats</Title>
                    <Subtitle>Especializados em fones para deejay</Subtitle>
                    <FromContainer>
                        <TextInputIcon
                            value={user}
                            label="Usuário"
                            isPassword={!userView}
                            icon={userView ? 'eye-off' : 'eye'}
                            active={user.length > 0}
                            onChangeText={value => setUser(value)}
                            updateIcon={() => setUserView(!userView)}
                        />
                        <TextInputIcon
                            value={password}
                            label="Senha"
                            isPassword={!passwordView}
                            icon={passwordView ? 'eye-off' : 'eye'}
                            active={password.length > 0}
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
                                    onPress={() =>
                                        setActiveRegisterButton(
                                            !activeRegisterButton,
                                        )
                                    }
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
