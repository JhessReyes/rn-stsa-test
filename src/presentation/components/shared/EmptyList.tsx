import { View, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { globalColors } from '../../../config/theme/global-theme';
import { Text } from 'react-native-paper';

type EmptyListProps = {
  isLoading?: boolean;
  isError?: boolean;
  error?: Error | null;
  skeleton?: {
    count?: number;
    component?: React.ComponentType;
  };
  isEmpty?: boolean;
  empty?: {
    component?: React.ComponentType;
    message?: string;
  };
  emptyMessage?: string;
};

export const EmptyList: React.FC<EmptyListProps> = ({
  isLoading = false,
  isEmpty,
  skeleton,
  empty,
}) => {
  const { height } = Dimensions.get('window');

  const getScreen = () => {
    if (isLoading) {
      return (
        <>
          <ActivityIndicator size="large" color={globalColors.primary} />
        </>
      );
    }

    if (isEmpty) {
      return (
        <View>
          {empty?.component ? (
            <empty.component />
          ) : (
            <Text style={{ color: globalColors.base }}>
              {empty?.message || 'Results not found'}
            </Text>
          )}
        </View>
      );
    }
  };

  return (
    <View
      style={[
        styles.centered,
        {
          height: height / 2,
          backgroundColor: globalColors.background,
        },
      ]}
    >
      {getScreen()}
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
