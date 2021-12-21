import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';

import { Colors } from '@utils/Colors';
import { Fonts } from '@utils/Fonts';

export const Container = styled.View`
    background-color: ${Colors.dark};
    height: 87px;
    align-items: center;
    padding: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const ContainerImage = styled.View`
    height: 55px;
    width: 55px;
    background-color: ${Colors.white};
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;

export const ImageProduct = styled.Image`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

export const ContainerText = styled.View``;

export const TitleProduct = styled.Text`
    color: ${Colors.white};
`;

export const ContainerInfo = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const ContainerStars = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const IconStar = styled(Icon).attrs({
    size: 12
})`
    color: ${Colors.orange};
`;

export const TextInfo = styled.Text`
    color: ${Colors.white};
    font-size: 12px;
`;

export const PriceText = styled.Text`
    font-size: 18px;
    color: ${Colors.primary};
    font-family: ${Fonts.DMSansBold};
    font-weight: bold;
`;
