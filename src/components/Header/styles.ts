import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

interface PropsLinearGradient {
    size: number;
}

export const Background = styled(LinearGradient).attrs(() => {
    ({
        start: { x: 0, y: 1 },
        end: { x: 0, y: 0 }
    });
})`
    height: ${(props: PropsLinearGradient) =>
        props.size ? `${props.size}px` : '100%'};
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const Shadow = styled(LinearGradient).attrs(() => {
    ({
        start: { x: 0, y: 1 },
        end: { x: 0, y: 0 }
    });
})`
    height: ${(props: PropsLinearGradient) =>
        props.size ? `${props.size}px` : '100%'};
    width: 100%;
`;
