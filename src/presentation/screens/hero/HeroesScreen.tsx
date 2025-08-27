import { View, FlatList } from 'react-native';
import React from 'react';
import { globalTheme } from '../../../config/theme/global-theme';
import { getHeroes } from '../../../actions/heroes/get-all-heroes';
import { useQuery } from '@tanstack/react-query';
import { HeroCard } from '../../components/hero/HeroCard';
import { EmptyList } from '../../components/shared/EmptyList';

export const HeroesScreen = () => {
  const { data: heroes, isLoading } = useQuery({
    queryKey: ['heroes'],
    queryFn: async () => getHeroes(),
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  return (
    <View style={[globalTheme.globalMargin, { flex: 1 }]}>
      <FlatList
        data={heroes}
        style={{
          paddingTop: 20,
        }}
        ListEmptyComponent={
          <EmptyList isEmpty={!heroes?.length} isLoading={isLoading} />
        }
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <HeroCard hero={item} />}
        numColumns={1}
        keyExtractor={(item, index) => item.id.toString() + index}
      />
    </View>
  );
};
