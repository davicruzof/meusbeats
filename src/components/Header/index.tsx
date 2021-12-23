import React, { ReactElement, ReactNode } from 'react';
import { Colors } from '@utils/Colors';
import { Background } from './styles';

interface HeaderProps {
    children?: ReactNode;
}

function Header({ children }: HeaderProps): ReactElement {
    return (
        <Background
            size={377}
            locations={[0, 0]}
            colors={[Colors.purple, Colors.darkPrimary]}
        >
            <Background 
                size={377}
                locations={[0.8, 1]}
                colors={[Colors.transparent, Colors.black]}>
                {children}
            </Background>
        </Background>
    );
}

export { Header };
