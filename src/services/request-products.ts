import { Product } from '@interfaces/product';
import { baseUrl } from './env';

interface Resolve {
    data: Array<Product>;
}

const Products = async (): Promise<Resolve> => {
    return new Promise<Resolve>((resolve, reject) => {
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        const requestOptions = {
            method: 'GET',
            headers: myHeaders
        };

        fetch(`${baseUrl}/products`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                resolve(result.data);
            })
            .catch((error) => reject(error));
    });
};

export { Products };
