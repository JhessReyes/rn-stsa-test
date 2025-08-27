import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabNavigation } from './BottomTabNavigation';
import { TeamStackParamList } from './TeamStackNavigator';
import { HeroScreen } from '../screens/hero/HeroScreen';
import { SearchHeroScreen } from '../screens/hero/SearchHeroScreen';
import { HeroEntity } from '../../domain/entities/hero.entity';
import { HeroHeader } from '../components/hero/Header';

export type RootStackParamList = {
  Tabs: undefined;
  Hero: { hero: HeroEntity };
  SearchHeroModal: undefined;
};

export type AppStackParamList = RootStackParamList & TeamStackParamList;

export const Stack = createStackNavigator<RootStackParamList>();
export const RootStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={BottomTabNavigation} />
      <Stack.Screen
        name="Hero"
        options={({ route, navigation }) => ({
          headerShown: true,
          header: () => <HeroHeader hero={route.params.hero} />,
        })}
        component={HeroScreen}
      />
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
