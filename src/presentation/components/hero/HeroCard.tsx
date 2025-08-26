import { View, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Card } from 'react-native-paper';
import { HeroEntity } from '../../../domain/entities/hero.entity';
import { globalColors } from '../../../config/theme/global-theme';
import { Icons } from '../../../assets/icons';
import { Text } from 'react-native-paper';

type HeroCardProps = {
  hero: HeroEntity;
};

export const HeroCard = ({ hero }: HeroCardProps) => {
  return (
    <Card style={styles.cardContainer}>
      <View style={styles.row}>
        <Image
          source={{ uri: hero.avatar }}
          style={styles.heroImage}
          resizeMode="cover"
        />
        <View style={styles.textContainer}>
          <Text variant="titleLarge" style={{ color: globalColors.white }}>
            {hero.name}
          </Text>
          <Text variant="bodySmall" style={{ color: globalColors.base }}>
            {hero.realName}
          </Text>
          <View style={styles.heroAverageStatContainer}>
            <Icons.Superhero
              fill={globalColors.accent}
              stroke={globalColors.black}
            />
            <View style={{ flex: 1, flexDirection: 'row', gap: 4 }}>
              <Text variant="bodyMedium" style={{ color: globalColors.white, fontWeight: 'bold' }}>
                {hero.averageStats}
              </Text>
              <Text variant="bodyMedium" style={styles.heroAverageStatValue}>
                / 100
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 358,
    opacity: 1,
    borderRadius: 16,
    marginBottom: 10,
    backgroundColor: globalColors.surface,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
  heroImage: {
    width: '50%',
    height: 200,
  },
  textContainer: {
    width: 179,
    height: 105,
    opacity: 1,
    padding: 16,
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
