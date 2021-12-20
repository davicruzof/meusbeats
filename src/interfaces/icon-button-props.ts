import { ReactNode } from 'react';
import { IconButtonProps } from 'react-native-vector-icons/Icon';

export interface IIconButtonProps extends IconButtonProps {
    children: ReactNode;
    name: string;
    updateIcon: () => void;
}
