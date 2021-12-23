import { Header } from '@components/Header';
import React, { ReactNode } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import phone from '@assets/fone.png';
import {
    ButtonHeader,
    Container,
    DetailsContainer,
    Emphasis,
    HeaderDetails,
    Line,
    Text,
    TextContainer,
    TextInfo,
    Title
} from './styles';
import { Colors } from '@utils/Colors';
import { NavigationProps } from '@interfaces/navigation-props';
import { Button } from '@components/Button';

interface DetailsProductProps {
    route: object;
    navigation: NavigationProps;
}

function DetailsProduct({ route, navigation }: DetailsProductProps) {
    const {
        product: { name }
    } = route.params;

    return (
        <Container>
            <Header>
                <HeaderDetails>
                    <ButtonHeader onPress={() => navigation.goBack()}>
                        <MaterialIcons
                            name="arrow-back-ios"
                            size={17.5}
                            color={Colors.darkGray}
                        />
                    </ButtonHeader>
                    <ButtonHeader>
                        <Icon
                            name="search"
                            size={17.5}
                            color={Colors.darkGray}
                        />
                    </ButtonHeader>
                </HeaderDetails>
                <Emphasis source={phone} />
            </Header>

            <DetailsContainer>
                <Title>{name}</Title>
                <Line />
                <TextContainer>
                    <Text>Conexão</Text>
                    <TextInfo>Bluetooth</TextInfo>
                </TextContainer>
                <TextContainer>
                    <Text>Compatibilidade</Text>
                    <TextInfo>Bluetooth 4.1</TextInfo>
                </TextContainer>
                <TextContainer>
                    <Text>Alimentação</Text>
                    <TextInfo>Bateria</TextInfo>
                </TextContainer>
                <TextContainer>
                    <Text>Autonomia</Text>
                    <TextInfo>16 horas</TextInfo>
                </TextContainer>
                <TextContainer>
                    <Text>Altura</Text>
                    <TextInfo>18,4</TextInfo>
                </TextContainer>
                <TextContainer>
                    <Text>Captação</Text>
                    <TextInfo>Semi ativa</TextInfo>
                </TextContainer>
                <Button
                    style={{ marginTop: 58, marginBottom: 24 }}
                    text="Comprar"
                    title="Comprar"
                    active={false}
                />
            </DetailsContainer>
        </Container>
    );
}

export default DetailsProduct;
