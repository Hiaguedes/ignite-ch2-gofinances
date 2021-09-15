import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../modules/Login/screens'

const AuthRoutes = () => {
    const {Navigator, Screen} = createStackNavigator();

    return(
        <Navigator
        screenOptions={{
            headerShown: false
          }}
        >
            <Screen name="Login" component={LoginScreen} />
        </Navigator>
    )

}

export default AuthRoutes