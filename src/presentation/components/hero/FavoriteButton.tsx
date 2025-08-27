import { StyleSheet } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import { globalColors } from '../../../config/theme/global-theme';
import { Icons } from '../../../assets/icons';
import { useSwitchFavorite } from '../../hooks/favorite/useSwitchFavorite';
import { HeroEntity } from '../../../domain/entities/hero.entity';

export const FavoriteButton = ({ hero }: { hero: HeroEntity }) => {
  const { mutateAsync, isPending } = useSwitchFavorite();

  const clickHandler = async () => {
    if (isPending) return;
    try {
      await mutateAsync({ hero });
    } catch (error) {
      console.log(error);
    }
  };
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
      onPress={clickHandler}
    >
      {hero.isFavorite ? (
        <Icons.Heart
          fill={globalColors.white}
          stroke={globalColors.white}
          strokeWidth="2"
          height={28}
          width={28}
        />
      ) : (
        <Icons.HeartOutline
          fill={globalColors.white}
          stroke={globalColors.white}
          strokeWidth="2"
          height={28}
          width={28}
        />
      )}
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
