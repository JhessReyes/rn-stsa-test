import { View, FlatList } from 'react-native';
import React from 'react';
import { getFavorites } from '../../../actions/favorites/get-all-favorites';
import { useQuery } from '@tanstack/react-query';
import { globalTheme } from '../../../config/theme/global-theme';
import { HeroCard } from '../../components/hero/HeroCard';

export const FavoritesScreens = () => {
  const { data: heroes, isLoading } = useQuery({
    queryKey: ['favorites'],
    queryFn: async () => getFavorites(),
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  return (
    <View style={[globalTheme.globalMargin, { flex: 1 }]}>
      <FlatList
        data={heroes}
        style={{
          paddingTop: 20,
        }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <HeroCard hero={item.superhero} />}
        numColumns={1}
        keyExtractor={(item, index) => item.id.toString() + index}
      />
    </View>
  );
};
