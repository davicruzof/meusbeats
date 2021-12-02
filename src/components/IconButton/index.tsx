import { Colors } from '@utils/Colors';
import React, { ReactElement, ReactNode } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { IconButtonProps } from 'react-native-vector-icons/Icon';

interface IIconButtonProps extends IconButtonProps {
    children: ReactNode;
    name: string | '';
    updateIcon: () => void;
}

function IconButton({ updateIcon, children, name }: IIconButtonProps): ReactElement {
    return (
        <Icon.Button
            size={22}
            iconStyle={{
                flex: 1,
                top: 24,
                right: 20,
                position: 'absolute'
            }}
            color={Colors.darkGray}
            backgroundColor={Colors.transparent}
            onPress={updateIcon}
            name={name}
        >
            {children}
        </Icon.Button>
    );
}

export { IconButton };
