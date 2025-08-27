import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { IconButton } from '../shared/IconButton';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AppStackParamList } from '../../navigation/RootStackNavigator';
import { FavoriteButton } from './FavoriteButton';
import { HeroEntity } from '../../../domain/entities/hero.entity';

export const HeroHeader = ({ hero }: { hero: HeroEntity }) => {
  const navigation = useNavigation<NavigationProp<AppStackParamList>>();
  const { top } = useSafeAreaInsets();
  return (
    <View style={[styles.headerContainer, { paddingTop: top + 20 }]}>
      <View>
        <IconButton
          onPress={() => navigation.goBack()}
          name="left"
          iconProps={{
            height: 24,
            width: 24,
          }}
        />
      </View>
      <View>
        <FavoriteButton
          hero={hero}
          style={{ position: 'relative', right: 0, left: 0, top: 0, bottom: 0 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    alignItems: 'center',
    position: 'absolute',
    paddingHorizontal: 15,
  },
});
