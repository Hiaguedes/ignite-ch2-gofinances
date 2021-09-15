import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components'

import Dashboard from '../modules/Dashboard/screens/Home/Home.screen'
import Register from '../modules/Register/screens/Register/Register.screen'
import Resume from '../modules/Resume/screens/Resume.screen'

import {MaterialIcons} from '@expo/vector-icons'
import {Platform} from 'react-native'

const { Navigator, Screen } = createBottomTabNavigator();

const AppTabRoutes = () => {
    const theme = useTheme();
    return (
    <Navigator
    screenOptions={{
            headerShown: false,
            "tabBarActiveTintColor": "#ff872c",
            "tabBarInactiveTintColor": "#969cb2",
            "tabBarLabelStyle": {
              "fontSize": 12
            },
            "tabBarLabelPosition": "beside-icon",
            "tabBarStyle": [
              {
                "display": "flex"
              },
              null
            ]
          }}
    >
        <Screen 
            name="Listagem" 
            component={Dashboard} 
            options={{
            
            tabBarIcon: (({size}) => (
                <MaterialIcons 
                    name="format-list-bulleted"
                    color={theme.colors.secondary}
                    size={size}
                />
                ))
        }}
            />
        <Screen 
            name="Cadastrar" 
            component={Register}
            options={{
            
                tabBarIcon: (({size}) => (
                    <MaterialIcons 
                        name="attach-money"
                        color={theme.colors.secondary}
                        size={size}
                    />
                    ))
            }}
            />
        <Screen 
            name="Resumo" 
            component={Resume}
            options={{
            
                tabBarIcon: (({size}) => (
                    <MaterialIcons 
                        name="pie-chart"
                        color={theme.colors.secondary}
                        size={size}
                    />
                    ))
            }}
            />
    </Navigator>
    )
}

export default AppTabRoutes;