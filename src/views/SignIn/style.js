import styled from "styled-components";
import LinearGradient from 'react-native-linear-gradient'

export const ImageBackground = styled.ImageBackground`
    object-fit: cover;
    height: 100%;
    width: 100%;
`

export const Background = styled(LinearGradient).attrs({
    start:{x: 0, y: 0},
    end:{x: 0, y: 1}
})`
    height: 100%;
    width: 100%;
    position: absolute;
`;

export const Title = styled.Text`
    font-size: 45px;
    font-weight: bold;
    font-family: 'DMSans-Bold';
    color: #fff;
    text-align: center;
    margin-top: 64px;
    margin-bottom: 8px;
`;

export const Subtitle = styled.Text`
    font-size: 14px;
    font-weight: bold;
    font-family: 'DMSans-Bold';
    letter-spacing: 0.2px;
    line-height: 20px;
    color: #fff;
    text-align: center;
`;

export const FromContainer = styled.View`
    position: absolute;
    bottom: 63px;
    padding: 0 24px;
    width: 100%;
`;

export const RegisterContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 24px;
`;

export const RegisterTitle = styled.Text`
    font-size: 14px;
    font-family: 'DMSans-Regular';
    letter-spacing: 0.2px;
    line-height: 20px;
    color: #fff;
    text-align: center;
`;

export const RegisterButtonText = styled.Text`
    color: ${props => props.active ? ' #019592' : '#0ACF83'};
    text-decoration: underline;
    font-size: 14px;
    font-family: 'DMSans-Bold';
    letter-spacing: 0.2px;
    line-height: 20px;
    font-weight: bold;
    text-align: center;
`;

export const RegisterButton = styled.TouchableOpacity`
    margin-left: 10px;
`;