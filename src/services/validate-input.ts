const msgErrorUser = 'Usuario inválido';
const msgErrorPassword = 'Senha inválida';

export const validatePassword = (message: string): boolean => {
    return message != msgErrorPassword ? true : false;
};

export const validateUsername = (message: string): boolean => {
    return message != msgErrorUser ? true : false;
};
