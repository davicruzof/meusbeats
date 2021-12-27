import { useNavigation } from '@react-navigation/native';

export interface NavigationProps {
    navigate: (screen: string) => void;
}

export const navigation = useNavigation<NavigationProps>();
