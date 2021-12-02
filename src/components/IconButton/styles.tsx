import styled from 'styled-components/native';
import { Colors } from '@utils/Colors';
import Feather from 'react-native-vector-icons/Feather';

export const Icon = styled(Feather.Button).attrs({
    size:22,
    iconStyle:{
        flex: 1,
        top: 24,
        right: 20,
        position: 'absolute'
    },
    color: `${Colors.darkGray}`,
    backgroundColor: `${Colors.transparent}`
})`
`;
