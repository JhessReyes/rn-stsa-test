import {
  Pressable,
  StyleSheet,
  StyleSheetProperties,
  ViewStyle,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { globalColors } from '../../../config/theme/global-theme';
import { Icons } from '../../../assets/icons';
import { useSwitchFavorite } from '../../hooks/favorite/useSwitchFavorite';
import { HeroEntity } from '../../../domain/entities/hero.entity';

export const FavoriteButton = ({
  hero,
  style,
}: {
  hero: HeroEntity;
  style?: ViewStyle;
}) => {
  const { mutateAsync, isPending } = useSwitchFavorite();

  const [isFavorite, setIsFavorite] = useState(hero.isFavorite);

  useEffect(() => {
    setIsFavorite(hero.isFavorite);
  }, [hero.isFavorite]);

  const clickHandler = async () => {
    if (isPending) return;
    try {
      await mutateAsync({ hero });
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? globalColors.yellow : globalColors.white,
        },
        styles.favoriteButton,
        style,
      ]}
      onPress={clickHandler}
    >
      {isFavorite ? (
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
    </Pressable>
  );
};

const styles = StyleSheet.create({
  favoriteButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: globalColors.primary,
    borderRadius: 100,
    padding: 10,
    margin: 0,
    elevation: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
