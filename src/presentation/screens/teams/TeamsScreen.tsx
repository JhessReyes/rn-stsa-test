import { View, Text } from 'react-native';
import React from 'react';
import { AddTeamButton } from '../../components/teams';

export const TeamsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <AddTeamButton />
    </View>
  );
};
