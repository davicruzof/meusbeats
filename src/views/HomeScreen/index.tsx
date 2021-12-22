import React, { ReactNode } from 'react';
import { StatusBar } from 'react-native';

import { Header } from '@components/Header';
import { Colors } from '@utils/Colors';

import { Container } from './styles';

interface HomeScreenProps {
    children: ReactNode;
}

function HomeScreen({ children }: HomeScreenProps) {
    return (
        <Container>
            <StatusBar backgroundColor={Colors.transparent} translucent />
            <Header />
        </Container>
    );
}

export { HomeScreen };
