import { View } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useQuery } from '@tanstack/react-query';
import { getHeroes } from '../../../actions/heroes/get-all-heroes';
import { globalTheme } from '../../../config/theme/global-theme';
import { FlatList } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  const { data: heroes, isLoading } = useQuery({
    queryKey: ['heroes'],
    queryFn: async () => getHeroes(),
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  return (
    <View style={globalTheme.globalMargin}>
      {/* <PokeBallBg style={styles.imgPosition} />
       */}{' '}
      <FlatList
        data={heroes}
        style={{
          paddingTop: top + 20,
        }}
        ListHeaderComponent={<Text variant="displayMedium">Superheroes</Text>}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        numColumns={2}
        keyExtractor={(item, index) => item.id.toString() + index}
      />
    </View>
  );
};
