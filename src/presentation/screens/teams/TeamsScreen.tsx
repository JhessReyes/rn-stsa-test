import { View, Text, FlatList } from 'react-native';
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getTeams } from '../../../actions/teams/get-all-teams';
import { globalTheme } from '../../../config/theme/global-theme';
import { EmptyList } from '../../components/shared/EmptyList';
import { CreateFirstTeme } from '../../components/team/CreateFirstTeme';
import { CreateTeamModal } from '../../components/team/CreateTeamModal';
import { TeamCard } from '../../components/team/TeamCard';

export const TeamsScreen = () => {
  const [visible, setVisible] = useState(false);
  const {
    data: teams,
    isLoading,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: ['teams'],
    queryFn: async () => getTeams(),
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  return (
    <View style={[globalTheme.globalMargin, { flex: 1 }]}>
      <FlatList
        data={teams}
        onRefresh={refetch}
        refreshing={isRefetching}
        style={{
          paddingTop: 20,
          flex: 1,
        }}
        ListEmptyComponent={
          <EmptyList
            isEmpty={!teams?.length}
            isLoading={isLoading}
            empty={{
              component: () => <CreateFirstTeme setVisible={setVisible} />,
            }}
          />
        }
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <TeamCard team={item} />}
        numColumns={1}
        keyExtractor={(item, index) => item.id.toString() + index}
      />
    </View>
  );
};
