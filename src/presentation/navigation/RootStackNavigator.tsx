import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { HeroScreen } from '../screens/hero/HeroScreen';

export type RootStackParamList = {
  HomeScreen: undefined;
  HeroScreen: { heroId: number };
};

const Stack = createStackNavigator<RootStackParamList>();
export const RootStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="HeroScreen" component={HeroScreen} />
    </Stack.Navigator>
  );
};
