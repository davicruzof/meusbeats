import styled from 'styled-components';
import { Colors } from '../../utils/Colors';
import { Fonts } from '../../utils/Fonts';

export const Container = styled.TouchableOpacity`
    background-color: ${props =>
        props.active ? Colors.primary : Colors.secondary};
    height: 50px;
    border-radius: 200px;
    justify-content: center;
    align-items: center;
`;

export const TextButton = styled.Text`
    color: ${Colors.white};
    font-family: ${Fonts.DMSansBold};
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 0.2px;
`;
