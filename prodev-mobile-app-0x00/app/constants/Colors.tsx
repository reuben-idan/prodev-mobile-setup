import { ColorSchemeName } from 'react-native';

export const Colors = {
  light: {
    text: '#000',
    background: '#fff',
    tint: '#2f95dc',
    tabIconDefault: '#ccc',
    tabIconSelected: '#2f95dc',  
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: '#fff',
    tabIconDefault: '#ccc',
    tabIconSelected: '#fff',
  },
};

export type Theme = {
  light: typeof Colors.light;
  dark: typeof Colors.dark;
};

export const useThemeColor = (
  colorName: keyof typeof Colors.light | keyof typeof Colors.dark,
  theme: 'light' | 'dark' | null | undefined = 'light'
) => {
  return Colors[theme || 'light'][colorName];
};

export default Colors;
