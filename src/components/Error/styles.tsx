import styled from 'styled-components/native';
import { Colors } from '@utils/Colors';
import { Fonts } from '@utils/Fonts';

export const Container = styled.View`
    width: 100%;
    padding: 10px 0;
    padding-left: 15px;
`;

export const TextError = styled.Text`
    color: ${Colors.ligthGreen};
    font-size: 12px;
    letter-spacing: 0.4px;
    font-family: ${Fonts.RobotoRegular};
`;
