import { View, StyleSheet } from 'react-native';
import React from 'react';
import { globalColors } from '../../../config/theme/global-theme';
import { Card } from 'react-native-paper';
import { TeamEntity } from '../../../domain/entities/team.entity';
import { Text } from 'react-native-paper';
import { Icons } from '../../../assets/icons';

export const TeamCard = ({ team }: { team: TeamEntity }) => {
  return (
    <Card style={styles.cardContainer}>
      <View style={styles.row}>
        <View style={styles.textContainer}>
          <Text variant="titleLarge" style={{ color: globalColors.white }}>
            Team name
          </Text>

          <Text variant="bodySmall" style={{ color: globalColors.base }}>
            {!team?.members?.length ? 'No members' : team.members.length}
          </Text>
        </View>

        <Icons.Left
          stroke={globalColors.white}
          height={40}
          width={40}
          transform={[{ rotate: '180deg' }]}
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    flex: 1,
  },
  cardContainer: {
    opacity: 1,
    borderRadius: 16,
    backgroundColor: globalColors.surface,
    overflow: 'hidden',
  },
  textContainer: {
    width: 179,
    opacity: 1,
    padding: 10,
    gap: 8,
  },
});
