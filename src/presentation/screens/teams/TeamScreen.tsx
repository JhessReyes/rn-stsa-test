import { View, Text } from 'react-native';
import React from 'react';
import { AppStackParamList } from '../../navigation/RootStackNavigator';
import { StackScreenProps } from '@react-navigation/stack';

type Props = StackScreenProps<AppStackParamList, 'Team'>;

export const TeamScreen = ({ route }: Props) => {
  const { id } = route.params;
  return (
    <View>
      <Text style={{ color: 'white' }}>TeamScreen {id}</Text>
    </View>
  );
};
