import * as React from 'react';
import { Text as DefaultText, View as DefaultView, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

const useThemeColor = (
  colorName: keyof typeof Colors.light | keyof typeof Colors.dark,
  theme: 'light' | 'dark' | null | undefined = 'light'
) => {
  return Colors[theme || 'light'][colorName];
};

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = lightColor || darkColor || useThemeColor('text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = lightColor || darkColor || useThemeColor('background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
