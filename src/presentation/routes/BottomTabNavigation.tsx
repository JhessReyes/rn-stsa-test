import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabSuperHeroesScreen } from '../screens/tabs/TabSuperHeroesScreen';
import { TabTeamsScreen } from '../screens/tabs/TabTeamsScreen';
import { TabFavoritesScreen } from '../screens/tabs/TabFavoritesScreen';
import { globalColors } from '../../config/theme/global-theme';
import { Icons } from '../../assets/icons';
const Tab = createBottomTabNavigator();

export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        sceneStyle: { backgroundColor: globalColors.background },
        headerTitleStyle: {
          color: globalColors.white,
          fontSize: 24,
          fontWeight: 'bold',
        },
        headerTitleAlign: 'left',
        headerStyle: {
          backgroundColor: globalColors.background,
          elevation: 0,
        },
        tabBarStyle: {
          backgroundColor: globalColors.background,
        },
        tabBarActiveTintColor: globalColors.primary,
        tabBarInactiveTintColor: globalColors.base,
      }}
    >
      <Tab.Screen
        name="SuperHeroes"
        options={{
          tabBarIcon: ({ color }) => (
            <Icons.Superhero fill="none" stroke={color} strokeWidth="2" />
          ),
        }}
        component={TabSuperHeroesScreen}
      />
      <Tab.Screen
        name="Teams"
        options={{
          tabBarIcon: ({ color }) => (
            <Icons.Team fill="none" stroke={color} strokeWidth="2" />
          ),
        }}
        component={TabTeamsScreen}
      />
      <Tab.Screen
        name="Favorites"
        options={{
          tabBarIcon: ({ color }) => (
            <Icons.Heart fill="none" stroke={color} strokeWidth="2" />
          ),
        }}
        component={TabFavoritesScreen}
      />
    </Tab.Navigator>
  );
};
