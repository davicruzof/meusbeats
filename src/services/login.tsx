import { baseUrl } from './env';

interface Resolve {
    message: string;
    user?: object;
}

const Login = async (data: string): Promise<Resolve> => {
    return new Promise<Resolve>((resolve, reject) => {
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: data
        };

        fetch(`${baseUrl}/login`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                resolve(result);
            })
            .catch((error) => reject(error));
    });
};

export { Login };
