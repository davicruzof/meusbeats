import { Error } from '@components/Error';
import { Label } from '@components/Label';
import { Colors } from '@utils/Colors';
import React, { ReactElement, useEffect, useState } from 'react';
import { TextInputProps } from 'react-native';
import { Container, ContainerInput } from './styles';

interface InputProps extends TextInputProps {
    status: boolean | false;
    text: string | '';
    error: string | '';
    errorInput: boolean | false;
}

const Input = function ({
    errorInput,
    status,
    text,
    error,
    ...rest
}: InputProps): ReactElement {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const statusLabel = status || isFocused ? true : false;
    const [border, setBorder] = useState<boolean>(false);
    const [showLabel, setShowLabel] = useState<boolean>(statusLabel);
    const textPlaceholder = isFocused ? '' : text;

    useEffect(() => {
        if (isFocused) {
            setBorder(true);
            setShowLabel(true);
        } else {
            setBorder(false);
        }
    }, [isFocused]);

    useEffect(() => {
        setShowLabel(!isFocused && !status ? false : true);
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
