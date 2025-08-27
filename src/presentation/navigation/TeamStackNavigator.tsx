import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TeamsScreen } from '../screens/teams/TeamsScreen';
import { TeamScreen } from '../screens/teams/TeamScreen';
import { globalColors } from '../../config/theme/global-theme';
import { Icons } from '../../assets/icons';
import { IconButton } from '../components/shared';
import { Pressable, View } from 'react-native';
import { AppStackParamList } from './RootStackNavigator';
import { CreateTeamModal } from '../components/team/CreateTeamModal';
import { TeamEntity } from '../../domain/entities/team.entity';

export type TeamStackParamList = {
  Teams: undefined;
  Team: { team: TeamEntity };
};

const TeamStack = createStackNavigator<AppStackParamList>();
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
      <TeamStack.Screen
        name="Teams"
        options={{
          headerRight: () => (
            <View
              style={{
                padding: 10,
                alignContent: 'center',
                alignItems: 'center',
              }}
            >
              <CreateTeamModal />
            </View>
          ),
        }}
        component={TeamsScreen}
      />

      <TeamStack.Screen
        name="Team"
        options={({ route, navigation }) => ({
          headerTitle: route.params?.team?.name || '',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.goBack()}
              style={{ paddingHorizontal: 10 }}
            >
              <Icons.Left stroke={globalColors.white} height={40} width={40} />
            </Pressable>
          ),
          headerRight: () => (
            <View
              style={{
                padding: 10,
                alignContent: 'center',
                alignItems: 'center',
              }}
            >
              <IconButton
                name="add"
                onPress={() =>
                  navigation.navigate('SearchHeroModal', {
                    members: route.params?.team?.members || [],
                    teamId: route.params?.team?.id || '',
                  })
                }
              />
            </View>
          ),
        })}
        component={TeamScreen}
      />
    </TeamStack.Navigator>
  );
};
