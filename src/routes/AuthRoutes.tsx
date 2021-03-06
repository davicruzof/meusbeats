import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '@views/HomeScreen';
import { SignIn } from '@views/SignIn';
import DetailsProduct from '@views/DetailsProduct';

const Stack = createNativeStackNavigator();

export const AuthRoutes = () => {
    const optionsHeader = {
        title: '',
        headerShown: false
    };

    return (
        <Stack.Navigator initialRouteName="SignIn">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={optionsHeader}
            />
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={optionsHeader}
            />
            <Stack.Screen
                name="DetailsProduct"
                component={DetailsProduct}
                options={optionsHeader}
            />
        </Stack.Navigator>
    );
};
