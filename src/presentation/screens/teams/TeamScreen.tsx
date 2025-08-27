import { View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { AppStackParamList } from '../../navigation/RootStackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { globalTheme } from '../../../config/theme/global-theme';
import { HeroCard } from '../../components/hero/HeroCard';
import { EmptyList } from '../../components/shared/EmptyList';
import { IconMessage } from '../../components/shared';
import { TeamEntity } from '../../../domain/entities/team.entity';
import { useQuery } from '@tanstack/react-query';
import { getTeams } from '../../../actions/teams/get-all-teams';

type Props = StackScreenProps<AppStackParamList, 'Team'>;

export const TeamScreen = ({ route }: Props) => {
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
  const [team, setTeam] = useState<TeamEntity>(route.params.team);

  useEffect(() => {
    if (!teams) return;
    const t = teams?.find(t => t.id == team?.id?.toString());
    setTeam(t || route.params.team);
  }, [isRefetching]);

  return (
    <View style={[globalTheme.globalMargin, { flex: 1 }]}>
      <FlatList
        refreshing={isRefetching}
        data={team.members}
        style={{
          paddingTop: 20,
        }}
        ListEmptyComponent={
          <EmptyList
            isEmpty={!team.members?.length}
            isLoading={isLoading}
            empty={{
              component: () => (
                <IconMessage name="teams" message="No members" />
              ),
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
