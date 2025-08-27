import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { AddTeamButton } from '../../components/teams';
import { useQuery } from '@tanstack/react-query';
import { getTeams } from '../../../actions/teams/get-all-teams';
import { globalTheme } from '../../../config/theme/global-theme';
import { EmptyList } from '../../components/shared/EmptyList';
import { CreateFirstTeme } from '../../components/teams/CreateFirstTeme';

export const TeamsScreen = () => {
  const {
    data: heroes,
    isLoading,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: ['favorites'],
    queryFn: async () => getTeams(),
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
              component: () => <CreateFirstTeme />,
            }}
          />
        }
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Text> {item.name}</Text>}
        numColumns={1}
        keyExtractor={(item, index) => item.id.toString() + index}
      />
    </View>
  );
};
