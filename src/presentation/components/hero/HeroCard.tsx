import { View, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Card } from 'react-native-paper';
import { HeroEntity } from '../../../domain/entities/hero.entity';
import { globalColors } from '../../../config/theme/global-theme';
import { FavoriteButton } from './FavoriteButton';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AppStackParamList } from '../../navigation/RootStackNavigator';
import { HeroTextCardContainer } from './HeroTextCardContainer';

type HeroCardProps = {
  hero: HeroEntity;
};

export const HeroCard = ({ hero }: HeroCardProps) => {
  const navigation = useNavigation<NavigationProp<AppStackParamList>>();

  return (
    <Card
      style={styles.cardContainer}
      onPress={() => navigation.navigate('Hero', { hero: hero })}
    >
      <View style={styles.row}>
        <View style={styles.heroImageContainer}>
          <Image
            source={{ uri: hero.avatar }}
            style={styles.heroImage}
            resizeMode="cover"
          />
          <FavoriteButton hero={hero} />
        </View>
        <HeroTextCardContainer hero={hero} style={{ padding: 16 }} />
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
  heroImageContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
  heroImage: {
    height: 200,
  },
});
