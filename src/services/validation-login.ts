import { UserLogin } from '@interfaces/user-login';

const validateLoginFill = ({ username, password }: UserLogin): boolean => {
    return username.length > 0 && password.length > 0;
};

export { validateLoginFill };
