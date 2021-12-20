import React, { ReactElement, useEffect, useState } from 'react';

import { Error } from '@components/Error';
import { InputProps } from '@interfaces/input-props';
import { Label } from '@components/Label';
import { Colors } from '@utils/Colors';

import { Container, ContainerInput } from './styles';

const Input = function ({
    errorInput,
    status,
    text,
    error,
    ...rest
}: InputProps): ReactElement {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const statusLabel: boolean = status || isFocused ? true : false;
    const [border, setBorder] = useState<boolean>(false);
    const [showLabel, setShowLabel] = useState<boolean>(statusLabel);
    const textPlaceholder: string = isFocused ? '' : text;
    const labelStatus: boolean = !isFocused && !status ? false : true;

    useEffect(() => {
        if (isFocused) {
            setBorder(true);
            setShowLabel(true);
        } else {
            setBorder(false);
        }
    }, [isFocused]);

    useEffect(() => {
        setShowLabel(labelStatus);
    }, [isFocused, status]);

    return (
        <Container>
            <ContainerInput
                onBlur={() => setIsFocused(false)}
                onFocus={() => setIsFocused(true)}
                focused={border}
                active={status}
                placeholderTextColor={Colors.placeholder}
                placeholder={textPlaceholder}
                {...rest}
            />
            {showLabel && (
                <Label text={text} focus={isFocused} status={statusLabel} />
            )}
            {errorInput && <Error text={error} />}
        </Container>
    );
};

export { Input };
