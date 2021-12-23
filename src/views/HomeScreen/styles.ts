import styled from 'styled-components/native';

import { Colors } from '@utils/Colors';
import { Fonts } from '@utils/Fonts';

export const Container = styled.View``;

export const ListProducts = styled.ScrollView`
    margin-bottom: 30px;
`;

export const Emphasis = styled.View`
    justify-content: flex-end;
    height: 100%;
    width: 100%;
    padding-bottom: 32px;
    align-items: center;
`;

export const EmphasisPhoto = styled.Image`
`;

export const Actions = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-top: 24px;
`;

export const Ask = styled.TouchableOpacity`
    height: 45px;
    width: 45px;
    justify-content: center;
    align-items: center;
    border-radius: 200px;
    background-color: ${Colors.secondary};
    margin-left: 10px;
`;

export const Text = styled.Text`
    font-size: 16px;
    font-family: ${Fonts.DMSansBold};
    font-weight: bold;
    letter-spacing: 0.2px;
    color: ${Colors.white};
`;

export const ButtonHeader = styled.TouchableOpacity`
    padding: 12.5px 43px;
    background-color: ${Colors.secondary};
    border-radius: 200px;
`;

export const Search = styled.TouchableOpacity`
    position: absolute;
    z-index: 9999;
    top: 60px;
    right: 10px;
    padding: 10px;
`;