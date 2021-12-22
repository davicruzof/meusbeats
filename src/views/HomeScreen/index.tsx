import React, { ReactNode, useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

import { Header } from '@components/Header';
import { Colors } from '@utils/Colors';

import { Container, ListProducts } from './styles';
import { Products } from '@services/request-products';
import { CardProduct } from '@components/CardProduct';
import { Product } from '@interfaces/product';

interface HomeScreenProps {
    children: ReactNode;
}

function HomeScreen({ children }: HomeScreenProps) {
    const [products, setProducts] = useState<Array<Product>>([]);

    useEffect(() => {
        (async () => {
            const data = await Products();

            setProducts(data);
        })();
    }, []);

    return (
        <Container>
            <StatusBar backgroundColor={Colors.transparent} translucent />
            <Header />
            <ListProducts showsVerticalScrollIndicator={false}>
                {products.length > 0 &&
                    products.map((element: Product, index: number) => (
                        <CardProduct
                            photo={element.photo}
                            price={element.price}
                            starts={element.starts}
                            reviwers={element.reviwers}
                            name={element.name}
                            key={index}
                        />
                    ))}
            </ListProducts>
        </Container>
    );
}

export { HomeScreen };
