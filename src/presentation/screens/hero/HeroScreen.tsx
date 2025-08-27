import { View, Image, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { AppStackParamList } from '../../navigation/RootStackNavigator';
import { globalColors } from '../../../config/theme/global-theme';
import { Divider, Text } from 'react-native-paper';
import { Icons } from '../../../assets/icons';

type Props = StackScreenProps<AppStackParamList, 'Hero'>;
export const HeroScreen = ({ route }: Props) => {
  const { hero } = route.params;
  const { height } = Dimensions.get('window');

  return (
    <View style={{ flex: 1, backgroundColor: globalColors.background }}>
      <Image
        source={{ uri: hero.avatar }}
        style={[styles.heroImage, { height: height / 2 }]}
        resizeMode="cover"
      />

      <View
        style={{
          flex: 1,
          alignItems: 'flex-start',
          padding: 20,
          gap: 8,
          width: '100%',
        }}
      >
        <Text variant="headlineMedium" style={{ color: globalColors.white }}>
          {hero.name}
        </Text>

        <View style={[styles.row]}>
          <Text variant="bodyMedium" style={{ color: globalColors.base }}>
            Real name:
          </Text>
          <Text variant="bodyMedium" style={styles.bodyMediumBold}>
            {hero.realName}
          </Text>
        </View>

        <View style={[styles.row, { marginBottom: 20 }]}>
          <Text variant="bodyMedium" style={{ color: globalColors.base }}>
            Alter Egos:
          </Text>
          <Text variant="bodyMedium" style={styles.bodyMediumBold}>
            {hero.alterEgos}
          </Text>
        </View>

        {Object.entries(hero.powerStats).map(([stat, value]) => (
          <View key={stat} style={{ width: '100%' }}>
            <View
              style={[
                styles.row,
                {
                  justifyContent: 'space-between',
                  width: '50%',
                },
              ]}
            >
              <Text variant="bodyMedium" style={{ color: globalColors.base }}>
                {stat}:
              </Text>
              <Text variant="bodyMedium" style={styles.bodyMediumBold}>
                {value}
              </Text>
            </View>
            <Divider
              style={{ height: 1, backgroundColor: globalColors.base }}
            />
          </View>
        ))}

        <View
          style={[
            styles.row,
            {
              justifyContent: 'space-between',
              width: '65%',
            },
          ]}
        >
          <View style={[styles.row, { gap: 12, alignItems: 'center' }]}>
            <Icons.Superhero
              fill={globalColors.yellow}
              stroke={globalColors.black}
            />
            <Text variant="bodyMedium" style={styles.bodyMediumBold}>
              Avg Score:
            </Text>
          </View>
          <View style={styles.row}>
            <Text variant="bodyMedium" style={styles.bodyMediumBold}>
              {hero.averageStats}
            </Text>
            <Text variant="bodyMedium" style={styles.bodyMedium}>
              / 100
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heroImage: {},
  row: {
    flexDirection: 'row',
    gap: 4,
  },
  bodyMedium: {
    color: globalColors.base,
  },
  bodyMediumBold: {
    color: globalColors.base,
    fontWeight: 'bold',
  },
});
