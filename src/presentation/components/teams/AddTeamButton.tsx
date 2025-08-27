import { StyleSheet } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import { Icons } from '../../../assets/icons';
import { globalColors } from '../../../config/theme/global-theme';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/RootStackNavigator';

export const AddTeamButton = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleClick = () => {
    navigation.navigate('CreateTeamModal');
  };
  return (
    <Button
      style={[styles.button]}
      contentStyle={{
        height: 60,
        borderWidth: 0,
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
      }}
      mode="text"
      onPress={handleClick}
    >
      <Icons.Add strokeWidth="0.5" height={24} width={24} />
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    backgroundColor: globalColors.primary,
    borderRadius: 100,
    padding: 0,
    margin: 0,
  },
});
