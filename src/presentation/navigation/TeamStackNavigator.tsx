import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TeamsScreen } from '../screens/teams/TeamsScreen';
import { TeamScreen } from '../screens/teams/TeamScreen';
import { globalColors } from '../../config/theme/global-theme';

export type TeamStackParamList = {
  Teams: undefined;
  Team: { id: string };
};

const TeamStack = createStackNavigator<TeamStackParamList>();
export const TeamStackNavigator = () => {
  return (
    <TeamStack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: globalColors.background, flex: 1 },
        animation: 'slide_from_right',
        headerTitleStyle: {
          color: globalColors.white,
          fontSize: 24,
        },
        headerTitleAlign: 'left',
        headerStyle: {
          backgroundColor: globalColors.background,
          elevation: 0,
        },
      }}
    >
      <TeamStack.Screen name="Teams" component={TeamsScreen} />
     
      <TeamStack.Screen name="Team" component={TeamScreen} />
    </TeamStack.Navigator>
  );
};
