import 'react-native-gesture-handler';
import React from 'react';
import { RootStackNavigator } from './presentation/navigation/RootStackNavigator';
import { ThemeAppContext } from './presentation/contexts/ThemeAppContext';

export const SuperHeroApp = () => {
  return (
    <ThemeAppContext>
      <RootStackNavigator />
    </ThemeAppContext>
  );
};
