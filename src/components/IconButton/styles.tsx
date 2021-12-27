import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

import { Colors } from '@utils/Colors';

export const Icon = styled(Feather.Button).attrs({
    size: 22,
    iconStyle: {
        flex: 1,
        top: 24,
        right: 20,
        position: 'absolute'
    },
    color: `${Colors.darkGray}`,
    backgroundColor: `${Colors.transparent}`
})`
    padding: 8px 0;
    justify-content: center;
`;
