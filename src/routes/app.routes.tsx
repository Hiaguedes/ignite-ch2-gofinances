import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components'

import Dashboard from '../modules/Dashboard/screens/Home/Home.screen'
import Register from '../modules/Register/screens/Register/Register.screen'
import Resume from '../modules/Resume/screens/Resume.screen'

import {MaterialIcons} from '@expo/vector-icons'
import {Platform} from 'react-native'

const { Navigator, Screen } = createBottomTabNavigator();

export const AppTabRoutes = () => {
    const theme = useTheme();
    return (
    <Navigator
    screenOptions={{
        headerShown: false
      }}
        tabBarOptions={{
            activeTintColor: theme.colors.secondary,
            inactiveTintColor: theme.colors.text,            
            labelStyle: {
                fontSize: 12,
            },
            labelPosition: 'beside-icon',
            style: {
                paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                height: 88,
              },
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