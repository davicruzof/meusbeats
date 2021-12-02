import React, { ReactElement, ReactNode } from 'react';
import { Icon } from './styles';
import { IconButtonProps } from 'react-native-vector-icons/Icon';

interface IIconButtonProps extends IconButtonProps {
    children: ReactNode;
    name: string | '';
    updateIcon: () => void;
}

function IconButton({ updateIcon, children, name }: IIconButtonProps): ReactElement {
    return (
        <Icon
            onPress={updateIcon}
            name={name}
        >
            {children}
        </Icon>
    );
}

export { IconButton };
