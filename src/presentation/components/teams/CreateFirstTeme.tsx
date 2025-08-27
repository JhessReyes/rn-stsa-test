import { View, Text } from 'react-native';
import React from 'react';
import { IconMessage } from '../shared/IconMessage';
import { AddTeamButton } from './AddTeamButton';

export const CreateFirstTeme = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 }}>
      <IconMessage name="teams" message="Create your first team" />
      <AddTeamButton />
    </View>
  );
};
