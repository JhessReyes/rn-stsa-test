import { createStackNavigator } from '@react-navigation/stack';

import { HeroScreen } from '../screens/hero/HeroScreen';

export type RootStackParamList = {
  HomeScreen: undefined;
  HeroScreen: { heroId: number };
};

const Stack = createStackNavigator<RootStackParamList>();
export const RootStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HeroScreen" component={HeroScreen} />
    </Stack.Navigator>
  );
};
