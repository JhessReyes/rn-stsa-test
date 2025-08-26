import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { PropsWithChildren } from 'react';
import { RootStackNavigator } from './presentation/navigation/RootStackNavigator';

export const SuperHeroApp = ({ children }: PropsWithChildren) => {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
};
