import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native';
import {
  Ubuntu_400Regular,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
  useFonts
} from '@expo-google-fonts/ubuntu';

import Routes from './src/routes';

export default function App() {
  const [font] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold
  });

  if (!font) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent />
      <Routes />
    </>
  );
}