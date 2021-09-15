import React from 'react';
import {NavigationContainer} from '@react-navigation/native'

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import {useAuth} from '../contexts/Auth'

const Routes = () => {
    const {isLogged} = useAuth();
    return(
        <NavigationContainer>
            {isLogged? <AppRoutes /> : <AuthRoutes />}
        </NavigationContainer>
    )
}

export default Routes