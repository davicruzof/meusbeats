import React, { ReactNode, useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

import phone from '@assets/fone.png';
import { Header } from '@components/Header';
import { Colors } from '@utils/Colors';
import { Products } from '@services/request-products';
import { CardProduct } from '@components/CardProduct';
import { Product } from '@interfaces/product';

import { Actions, Ask, ButtonHeader, Container, Emphasis, EmphasisPhoto, ListProducts, Search, Text } from './styles';
import { Button } from '@components/Button';
import { IconButton } from '@components/IconButton';
import Icon from 'react-native-vector-icons/Feather';

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
            <Header>
                <Search>
                    <Icon
                        name="search" 
                        size={17.5} 
                        color={Colors.darkGray} 
                    />
                </Search>
                <Emphasis>
                    <EmphasisPhoto source={phone}/>
                    <Actions>
                        <ButtonHeader>
                            <Text>Adicionar</Text>
                        </ButtonHeader>
                        <Ask>
                            <Text>?</Text>
                        </Ask>
                    </Actions>
                </Emphasis>
            </Header>
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
