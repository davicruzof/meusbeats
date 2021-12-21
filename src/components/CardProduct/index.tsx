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

function CardProduct({
    imageProduct,
    titleProduct,
    starts,
    reviews,
    price
}: CardProductProps): ReactElement {
    return (
        <Container>
            <ContainerImage>
                <ImageProduct source={imageProduct} />
            </ContainerImage>
            <ContainerText>
                <TitleProduct>{titleProduct}</TitleProduct>
            </ContainerText>
            <ContainerInfo>
                <ContainerStars>
                    <IconStar name="star" />
                    <TextInfo>{starts}</TextInfo>
                </ContainerStars>
                <TextInfo>{reviews}</TextInfo>
            </ContainerInfo>
            <PriceText>R$ {price}</PriceText>
        </Container>
    );
}

export { CardProduct };
