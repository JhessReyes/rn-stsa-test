import { createStackNavigator } from '@react-navigation/stack';

import { BottomTabNavigation } from '../routes/BottomTabNavigation';
import { CreateTeamModal } from '../components/team/CreateTeamModal';

export type RootStackParamList = {
  HomeScreen: undefined;
  HeroScreen: { heroId: number };
  TeamsScreen: undefined;
  Tabs: undefined;
  TeamScreen: { heroId: number };
  CreateTeamModal: undefined;
};

export const Stack = createStackNavigator<RootStackParamList>();
export const RootStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={BottomTabNavigation} />
      {/* <Stack.Screen
        name="CreateTeamModal"
        component={CreateTeamModal}
        options={{
          headerShown: false,
          presentation: 'modal',
        }}
      /> */}
    </Stack.Navigator>
  );
};
