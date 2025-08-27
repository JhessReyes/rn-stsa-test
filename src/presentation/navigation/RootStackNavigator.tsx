import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabNavigation } from './BottomTabNavigation';
import { TeamStackParamList } from './TeamStackNavigator';

export type RootStackParamList = {
  Tabs: undefined;
};

export type AppStackParamList = RootStackParamList & TeamStackParamList;

export const Stack = createStackNavigator<RootStackParamList>();
export const RootStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={BottomTabNavigation} />
    </Stack.Navigator>
  );
};
