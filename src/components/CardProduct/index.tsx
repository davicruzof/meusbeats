import React, { ReactElement } from 'react';

import { CardProductProps } from '@interfaces/card-props';

import {
    Container,
    ContainerImage,
    ContainerInfo,
    IconStar,
    ContainerText,
    ImageProduct,
    TitleProduct,
    TextInfo,
    ContainerStars,
    PriceText
} from './styles';
import { Product } from '@interfaces/product';

function CardProduct({
    starts,
    price,
    name,
    reviwers,
    photo,
    ...props
}: Product): ReactElement {
    return (
        <Container {...props}>
            <ContainerImage>
                <ImageProduct source={{ uri: photo }} />
            </ContainerImage>
            <ContainerText>
                <TitleProduct>{name}</TitleProduct>
                <ContainerInfo>
                    <ContainerStars>
                        <IconStar name="star" />
                        <TextInfo>{starts}</TextInfo>
                    </ContainerStars>
                    <TextInfo>{reviwers} Reviews</TextInfo>
                </ContainerInfo>
            </ContainerText>
            <PriceText>R$ {price}</PriceText>
        </Container>
    );
}

export { CardProduct };
