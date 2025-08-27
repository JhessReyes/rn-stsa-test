import { View } from 'react-native';
import React from 'react';
import { IconMessage, IconButton } from '../shared';

export const CreateFirstTeme = ({
  setVisible,
}: {
  setVisible: (visible: boolean) => void;
}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
      }}
    >
      <IconMessage name="teams" message="Create your first team" />
      <IconButton name="add" onPress={() => setVisible(true)} />
    </View>
  );
};
