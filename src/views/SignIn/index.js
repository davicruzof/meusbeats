import React, { useEffect, useState } from 'react';
import { Alert, StatusBar } from 'react-native';
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
    const [errorUser, setErrorUser] = useState(false);
    const [activeButton, setActiveButton] = useState(false);
    const [passwordView, setPasswordView] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [activeRegisterButton, setActiveRegisterButton] = useState(false);


    useEffect(() => {
        setErrorUser(false)
    },[user])

    useEffect(() => {
        setErrorPassword(false)
    },[password])


    const login = async() => {

        if(!user || !password){
            Alert.alert('Meus Beats', "Preencha o usuário e a senha")
            return;
        }

        setActiveButton(!activeButton)

        const raw = JSON.stringify({
            "email": user,
            "senha": password
        });

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
        };
    
        fetch("https://meusbeats.herokuapp.com/api/login", requestOptions)
        .then(response => response.json())
        .then(result => {
            result.message === 'Usuario inválido' ? setErrorUser(true) : setErrorUser(false);
            result.message === 'Senha inválida' ? setErrorPassword(true) : setErrorPassword(false);
        })
        .catch( _ => Alert.alert("Meus Beats",'Desculpa ocorreu um erro!'));
        
    }

    return (
        <ImageBackground source={bgLogin}>
            <StatusBar backgroundColor={Colors.transparent} translucent />
            <Background colors={[Colors.ligthPrimary, Colors.secondary]}>
                <Background colors={[Colors.transparent, Colors.black]}>
                    <Title>Meus Beats</Title>
                    <Subtitle>Especializados em fones para deejay</Subtitle>
                    <FromContainer>
                        <TextInputIcon
                            value={user}
                            label="Usuário"
                            isPassword={!userView}
                            errorInput={errorUser}
                            msgError="Usuário inválido"
                            isPassword={!userView}
                            icon={userView ? 'eye-off' : 'eye'}
                            active={user.length > 0}
                            onChangeText={value => setUser(value)}
                            updateIcon={() => setUserView(!userView)}
                        />
                        <TextInputIcon
                            value={password}
                            label="Senha"
                            msgError="Senha incorreta"
                            errorInput={errorPassword}
                            isPassword={!passwordView}
                            icon={passwordView ? 'eye-off' : 'eye'}
                            active={password.length > 0}
                            onChangeText={value => setPassword(value)}
                            updateIcon={() => setPasswordView(!passwordView)}
                        />
                        <Button
                            onPress={login}
                            text="Entrar"
                            active={activeButton}
                            style={{ marginTop: 49}}
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
