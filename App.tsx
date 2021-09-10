import React from 'react';
import { StatusBar} from 'expo-status-bar';
import {SafeAreaView, Platform} from 'react-native'
import {ThemeProvider} from 'styled-components/native'
import 'intl';
import 'intl/locale-data/jsonp/pt-BR'
import theme from './src/global/theme'
import {NavigationContainer} from '@react-navigation/native'
import { AppTabRoutes } from './src/routes/app.routes'
import Login from './src/modules/Login/screens'

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading';

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <>
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{flex: 1, paddingTop: Platform.OS === 'android' ? 24 : 0}}>
        <StatusBar backgroundColor={theme.colors.primary} style="light" />
          {/* <NavigationContainer>
              <AppTabRoutes />
          </NavigationContainer> */}
          <Login />
      </SafeAreaView>
    </ThemeProvider>
    </>
  );
}

