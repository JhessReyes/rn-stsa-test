import { View, StyleSheet, FlatList } from 'react-native';
import React, { useState } from 'react';
import { globalColors, globalTheme } from '../../../config/theme/global-theme';
import { Text, TextInput } from 'react-native-paper';
import { AppStackParamList } from '../../navigation/RootStackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { useQuery } from '@tanstack/react-query';
import { getHeroes } from '../../../actions/heroes/get-all-heroes';
import { EmptyList } from '../../components/shared/EmptyList';
import { HeroCard } from '../../components/hero/HeroCard';
import { HeroSearchCard } from '../../components/search/HeroSearchCard';
import { InputSearch } from '../../components/search/InputSearch';

type Props = StackScreenProps<AppStackParamList, 'SearchHeroModal'>;
export const SearchHeroScreen = ({ route }: Props) => {
  const { members, teamId } = route.params;
  const [search, setSearch] = useState('');

  const { data: heroes, isLoading } = useQuery({
    queryKey: ['heroes'],
    queryFn: async () => getHeroes(),
    staleTime: 1000 * 60 * 60, // 1 hora
  });

  const filteredHeroes = heroes?.filter(hero =>
    hero.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <View style={[styles.container]}>
      <Text variant="headlineMedium" style={styles.title}>
        Add member
      </Text>

      <FlatList
        data={filteredHeroes}
        style={{
          paddingTop: 20,
        }}
        ListHeaderComponent={
          <InputSearch value={search} onChangeText={setSearch} />
        }
        ListEmptyComponent={
          <EmptyList
            isEmpty={!heroes?.length}
            isLoading={isLoading}
            style={{
              backgroundColor: globalColors.secondary,
            }}
          />
        }
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <HeroSearchCard hero={item} members={members} teamId={teamId} />
        )}
        numColumns={1}
        keyExtractor={(item, index) => item.id.toString() + index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalColors.secondary,
    padding: 15,
  },
  title: {
    color: globalColors.white,
    paddingBottom: 20,
  },
});
