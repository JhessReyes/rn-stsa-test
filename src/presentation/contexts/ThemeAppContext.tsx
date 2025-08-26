import { createContext, PropsWithChildren, version } from 'react';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  Theme as NavigationThemeType,
} from '@react-navigation/native';
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from 'react-native-paper';
import { adaptNavigationTheme } from 'react-native-paper';
import { TextStyle, useColorScheme } from 'react-native';
import { papersFontsConfig } from '../../config/theme/fonts';

const { LightTheme: NavAdaptedLight, DarkTheme: NavAdaptedDark } =
  adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
  });

export const ThemeContext = createContext({
  isDark: false,
  theme: MD3LightTheme,
});

export const ThemeAppContext = ({ children }: PropsWithChildren) => {
  const colorScheme = useColorScheme();
  const isDarkTheme = colorScheme === 'dark';

  const basePaperTheme = isDarkTheme ? MD3DarkTheme : MD3LightTheme;
  const navigationColors = isDarkTheme
    ? NavAdaptedDark.colors
    : NavAdaptedLight.colors;
  const navigationFonts = isDarkTheme
    ? NavAdaptedDark.fonts
    : NavAdaptedLight.fonts;

  const PoppinsFont = (weight: TextStyle['fontWeight'] = '400') => ({
    fontFamily: 'Poppins-Regular',
    fontWeight: weight,
  });

  const combinedTheme = {
    ...basePaperTheme,
    colors: {
      ...basePaperTheme.colors,
      ...navigationColors,
    },
    fonts: {
      ...papersFontsConfig,
    },
  };

  const navigationTheme: NavigationThemeType = {
    dark: isDarkTheme,
    colors: navigationColors,
    fonts: {
      medium: {
        fontFamily: 'Poppins-SemiBold',
        fontWeight: 'normal',
      },
      regular: {
        fontFamily: 'Poppins-Regular',
        fontWeight: 'normal',
      },
      bold: {
        fontFamily: 'Poppins-Bold',
        fontWeight: 'normal',
      },
      heavy: {
        fontFamily: 'Poppins-ExtraBold',
        fontWeight: 'normal',
      },
    },
  };

  return (
    <ThemeContext.Provider
      value={{ isDark: isDarkTheme, theme: combinedTheme }}
    >
      <PaperProvider theme={combinedTheme}>
        <NavigationContainer theme={navigationTheme}>
          {children}
        </NavigationContainer>
      </PaperProvider>
    </ThemeContext.Provider>
  );
};
