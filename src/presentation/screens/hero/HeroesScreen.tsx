import { View, FlatList } from 'react-native';
import React, { useState } from 'react';
import { globalTheme } from '../../../config/theme/global-theme';
import { getHeroes } from '../../../actions/heroes/get-all-heroes';
import { useQuery } from '@tanstack/react-query';
import { HeroCard } from '../../components/hero/HeroCard';
import { EmptyList } from '../../components/shared/EmptyList';
import { InputSearch } from '../../components/search/InputSearch';

export const HeroesScreen = () => {
  const [search, setSearch] = useState('');
  const { data: heroes, isLoading } = useQuery({
    queryKey: ['heroes'],
    queryFn: async () => getHeroes(),
    staleTime: 1000 * 60 * 60, // 1 hour
  });
  const filteredHeroes = heroes?.filter(hero =>
    hero.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <View style={[globalTheme.globalMargin, { flex: 1 }]}>
      <FlatList
        data={filteredHeroes}
        style={{
          paddingTop: 20,
        }}
        ListHeaderComponent={
          <InputSearch value={search} onChangeText={setSearch} />
        }
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
