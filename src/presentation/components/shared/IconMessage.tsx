import { View } from 'react-native';
import React from 'react';
import { Icons } from '../../../assets/icons';
import { Text } from 'react-native-paper';
import { globalColors } from '../../../config/theme/global-theme';

type IconMessageProps = {
  name: 'teams' | 'add' | 'heart' | 'superhero' | 'favorite';
  message: string;
};

export const IconMessage = (data: IconMessageProps) => {
  const getIcon = () => {
    const props = {
      width: 120,
      height: 120,
      color: globalColors.base,
      stroke: globalColors.base,
      strokeWidth: '2',
    };
    switch (data.name) {
      case 'teams':
        return <Icons.Team {...props} />;
      case 'add':
        return <Icons.Add {...props} />;
      case 'heart':
        return <Icons.Heart {...props} />;
      case 'superhero':
        return <Icons.Superhero {...props} />;
      case 'favorite':
        return <Icons.Heart {...props} />;
      default:
        return <Icons.Add {...props} />;
    }
  };
  return (
    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
      <View>{getIcon()}</View>
      <Text
        variant="bodyMedium"
        style={{
          color: globalColors.white,
        }}
      >
        {data.message}
      </Text>
    </View>
  );
};
