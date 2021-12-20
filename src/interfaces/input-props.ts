import { TextInputProps } from 'react-native';

export interface InputProps extends TextInputProps {
    status: boolean;
    text: string;
    error: string;
    errorInput: boolean;
}
