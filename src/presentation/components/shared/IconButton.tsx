import { Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { Button, Text } from 'react-native-paper';
import { Icons } from '../../../assets/icons';
import { globalColors } from '../../../config/theme/global-theme';
import { SvgProps } from 'react-native-svg';

type IconButtonProps = {
  name: 'teams' | 'add' | 'heart' | 'superhero' | 'favorite' | 'left';
  onPress: () => void;
  iconProps?: SvgProps;
  disabled?: boolean;
};

export const IconButton = ({
  onPress,
  name,
  iconProps,
  disabled,
}: IconButtonProps) => {
  const getIcon = () => {
    const props = {
      width: 12,
      height: 12,
      color: globalColors.base,
      stroke: globalColors.base,
      strokeWidth: '2',
      ...iconProps,
    };
    switch (name) {
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
      case 'left':
        return <Icons.Left {...props} />;
      default:
        return <Icons.Add {...props} />;
    }
  };

  return (
    <Pressable
      style={[styles.button, disabled && styles.disabled]}
      onPress={onPress}
    >
      {getIcon()}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: globalColors.primary,
    borderRadius: 25,
    padding: 12,
  },
  disabled: {
    backgroundColor: globalColors.surface,
  },
});
