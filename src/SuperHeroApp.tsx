import 'react-native-gesture-handler';
import React from 'react';
import { RootStackNavigator } from './presentation/navigation/RootStackNavigator';
import { ThemeAppContext } from './presentation/contexts/ThemeAppContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BottomTabNavigation } from './presentation/routes/BottomTabNavigation';

const queryClient = new QueryClient();
export const SuperHeroApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeAppContext>
        <BottomTabNavigation />
      </ThemeAppContext>
    </QueryClientProvider>
  );
};
