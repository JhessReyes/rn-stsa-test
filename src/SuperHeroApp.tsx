import 'react-native-gesture-handler';
import NativeBiometricsModule from '../specs/NativeBiometricsModule';
import React from 'react';
import { RootStackNavigator } from './presentation/navigation/RootStackNavigator';
import { ThemeAppContext } from './presentation/contexts/ThemeAppContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
export const SuperHeroApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeAppContext>
        <RootStackNavigator />
      </ThemeAppContext>
    </QueryClientProvider>
  );
};
