import styled from 'styled-components/native';

import { Colors } from '@utils/Colors';
import { Fonts } from '@utils/Fonts';

export const Container = styled.ScrollView``;

export const HeaderDetails = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 0 16px;
    width: 100%;
    align-items: center;
`;

export const ButtonHeader = styled.TouchableOpacity`
    padding: 3.5px;
`;

export const Emphasis = styled.Image.attrs({
    resizeMode: 'contain'
})`
    width: 100%;
    height: 60%;
`;

export const DetailsContainer = styled.View`
    background-color: ${Colors.black};
    height: 100%;
    padding: 0 27px;
`;

export const Title = styled.Text`
    font-size: 45px;
    font-family: ${Fonts.DMSansBold};
    font-weight: bold;
    color: ${Colors.white};
    text-align: center;
`;

export const Line = styled.View`
    height: 1px;
    background-color: ${Colors.ligthGray};
    margin: 32px 0;
`;

export const TextContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 14px;
`;

export const Text = styled.Text`
    font-size: 16px;
    color: ${Colors.white};
    font-family: ${Fonts.DMSansBold};
    font-weight: bold;
    text-align: right;
    width: 50%;
    padding-right: 16px;
`;

export const TextInfo = styled.Text`
    font-size: 16px;
    color: ${Colors.white};
    font-family: ${Fonts.DMSansRegular};
    width: 50%;
    padding-left: 16px;
    text-align: left;
`;
