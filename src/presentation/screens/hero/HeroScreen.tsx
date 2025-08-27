import { View, Text } from 'react-native';
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { AppStackParamList } from '../../navigation/RootStackNavigator';

type Props = StackScreenProps<AppStackParamList, 'Hero'>;
export const HeroScreen = ({ route }: Props) => {
  const { id } = route.params;

  return (
    <View>
      <Text style={{ color: 'white' }}>HeroScreen {id}</Text>
    </View>
  );
};
