import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabNavigation } from './BottomTabNavigation';
import { TeamStackParamList } from './TeamStackNavigator';
import { HeroScreen } from '../screens/hero/HeroScreen';
import { SearchHeroScreen } from '../screens/hero/SearchHeroScreen';

export type RootStackParamList = {
  Tabs: undefined;
  Hero: { id: string };
  SearchHeroModal: undefined;
};

export type AppStackParamList = RootStackParamList & TeamStackParamList;

export const Stack = createStackNavigator<RootStackParamList>();
export const RootStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={BottomTabNavigation} />
      <Stack.Screen name="Hero" component={HeroScreen} />
      <Stack.Screen
        name="SearchHeroModal"
        component={SearchHeroScreen}
        options={{
          headerShown: false,
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  );
};
