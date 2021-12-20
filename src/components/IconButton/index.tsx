import React, { ReactElement } from 'react';

import { IIconButtonProps } from '@interfaces/icon-button-props';

import { Icon } from './styles';

function IconButton({
    updateIcon,
    children,
    name
}: IIconButtonProps): ReactElement {
    return (
        <Icon onPress={updateIcon} name={name}>
            {children}
        </Icon>
    );
}

export { IconButton };
