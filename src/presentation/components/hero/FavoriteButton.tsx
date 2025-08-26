import { StyleSheet } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import { globalColors } from '../../../config/theme/global-theme';
import { Icons } from '../../../assets/icons';

export const FavoriteButton = () => {
  return (
    <Button
      style={[styles.favoriteButton]}
      contentStyle={{
        height: 60,
        borderWidth: 0,
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
      }}
      mode="text"
    >
      <Icons.HeartOutline
        fill={globalColors.white}
        stroke={globalColors.white}
        strokeWidth="2"
        height={28}
        width={28}
      />
    </Button>
  );
};

const styles = StyleSheet.create({
  favoriteButton: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: globalColors.primary,
    borderRadius: 100,
    padding: 0,
    margin: 0,
  },
});
