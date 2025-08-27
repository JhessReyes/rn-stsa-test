import { StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import { HeroEntity } from '../../../domain/entities/hero.entity';
import { Text } from 'react-native-paper';
import { globalColors } from '../../../config/theme/global-theme';
import { Icons } from '../../../assets/icons';

type Props = {
  hero: HeroEntity;
  style?: ViewStyle;
};
export const HeroTextCardContainer = ({ hero, style }: Props) => {
  return (
    <View style={[styles.textContainer, style]}>
      <Text variant="titleLarge" style={{ color: globalColors.white }}>
        {hero.name}
      </Text>
      <Text variant="bodySmall" style={{ color: globalColors.base }}>
        {hero.realName}
      </Text>
      <View style={styles.heroAverageStatContainer}>
        <Icons.Superhero
          fill={globalColors.yellow}
          stroke={globalColors.black}
        />
        <View style={{ flex: 1, flexDirection: 'row', gap: 4 }}>
          <Text
            variant="bodyMedium"
            style={{ color: globalColors.white, fontWeight: 'bold' }}
          >
            {hero.averageStats}
          </Text>
          <Text variant="bodyMedium" style={styles.heroAverageStatValue}>
            / 100
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heroImage: {
    height: 200,
  },
  textContainer: {
    width: 179,
    height: 105,
    opacity: 1,
    paddingLeft: 16,
    gap: 8,
  },
  heroName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: globalColors.white,
  },
  heroRealName: {
    fontWeight: 400,
    fontSize: 12,
    letterSpacing: 0.27,
    color: globalColors.base,
  },
  heroAverageStatContainer: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  heroAverageStat: {
    color: globalColors.white,
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 17.97,
  },
  heroAverageStatValue: {
    fontSize: 12,
    color: globalColors.base,
  },
});
