import { Resolve } from '@interfaces/response-request-login';
import { UserLogin } from '@interfaces/user-login';
import { Login } from './request-login';

export const LoginRequest = async ({
    username,
    password
}: UserLogin): Promise<Resolve> => {
    const raw = JSON.stringify({
        email: username,
        senha: password
    });
    return await Login(raw);
};
