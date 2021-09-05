import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '../modules/Dashboard/screens/Home/Home.screen'
import Register from '../modules/Register/screens/Register/Register.screen'

const { Navigator, Screen } = createBottomTabNavigator();

export const AppTabRoutes = () => {
    return (
    <Navigator>
        <Screen name="Listagem" component={Dashboard} />
        <Screen name="Cadastrar" component={Register} />
    </Navigator>
    )
}