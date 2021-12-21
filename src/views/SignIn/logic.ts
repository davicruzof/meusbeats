import { useState } from 'react';
import { Alert } from 'react-native';

import { LoginRequest } from '@services/login';
import { UserLogin } from '@interfaces/user-login';
import { useNavigation } from '@react-navigation/native';
import { validateUsername } from '@services/validate-input';
import { validatePassword } from '@services/validate-input';
import { validateLoginFill } from '@services/validation-login';

interface NavigationProps {
    navigate: (screen: string) => void;
}

export const navigation = useNavigation<NavigationProps>();
export const [username, setUsername] = useState<string>('');
export const [password, setPassword] = useState<string>('');
export const [userView, setUserView] = useState<boolean>(false);
export const [errorUser, setErrorUser] = useState<boolean>(false);
export const [activeButton, setActiveButton] = useState<boolean>(false);
export const [passwordView, setPasswordView] = useState<boolean>(false);
export const [errorPassword, setErrorPassword] = useState<boolean>(false);
export const [activeRegisterButton, setActiveRegisterButton] =
    useState<boolean>(false);

export const login = async () => {
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

export const register = () => {
    setActiveRegisterButton(!activeRegisterButton);
};
