import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { AppStackParamList } from '../../navigation/RootStackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { globalTheme } from '../../../config/theme/global-theme';
import { HeroCard } from '../../components/hero/HeroCard';
import { EmptyList } from '../../components/shared/EmptyList';
import { IconMessage } from '../../components/shared';

type Props = StackScreenProps<AppStackParamList, 'Team'>;

export const TeamScreen = ({ route }: Props) => {
  const { team } = route.params;
  return (
    <View style={[globalTheme.globalMargin, { flex: 1 }]}>
      <FlatList
        data={team.members}
        style={{
          paddingTop: 20,
        }}
        ListEmptyComponent={
          <EmptyList
            isEmpty={!team.members?.length}
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
