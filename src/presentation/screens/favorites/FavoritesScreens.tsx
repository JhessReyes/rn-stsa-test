import { View, FlatList } from 'react-native';
import React from 'react';
import { getFavorites } from '../../../actions/favorites/get-all-favorites';
import { useQuery } from '@tanstack/react-query';
import { globalColors, globalTheme } from '../../../config/theme/global-theme';
import { HeroCard } from '../../components/hero/HeroCard';
import { EmptyList } from '../../components/shared/EmptyList';
import { Text } from 'react-native-paper';

export const FavoritesScreens = () => {
  const {
    data: heroes,
    isLoading,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: ['favorites'],
    queryFn: async () => getFavorites(),
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  return (
    <View style={[globalTheme.globalMargin, { flex: 1 }]}>
      <FlatList
        data={heroes}
        onRefresh={refetch}
        refreshing={isRefetching}
        style={{
          paddingTop: 20,
          flex: 1,
        }}
        ListEmptyComponent={
          <EmptyList
            isEmpty={!heroes?.length}
            isLoading={isLoading}
            empty={{
              message: 'No favorites added',
            }}
          />
        }
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <HeroCard hero={item.hero} />}
        numColumns={1}
        keyExtractor={(item, index) => item.id.toString() + index}
      />
    </View>
  );
};
