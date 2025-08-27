import { StyleSheet, View } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native-paper';
import { globalColors } from '../../../config/theme/global-theme';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
};

export const InputSearch = ({ value, onChangeText }: Props) => {
  return (
    <View>
      <TextInput
        style={{
          backgroundColor: globalColors.secondary,
          height: 40,
        }}
        outlineStyle={{
          borderWidth: 0,
        }}
        textColor={globalColors.base}
        placeholderTextColor={globalColors.base}
        contentStyle={{
          backgroundColor: globalColors.surface,
          borderRadius: 10,
          fontSize: 12,
        }}
        placeholder="Search"
        value={value}
        mode="outlined"
        onChangeText={onChangeText}
      />
    </View>
  );
};
