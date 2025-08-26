import { createContext, PropsWithChildren } from 'react';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  Theme as NavigationThemeType,
} from '@react-navigation/native';
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from 'react-native-paper';
import { adaptNavigationTheme } from 'react-native-paper';
import { useColorScheme } from 'react-native';

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

  const combinedTheme = {
    ...basePaperTheme,
    colors: {
      ...basePaperTheme.colors,
      ...navigationColors,
    },
    fonts: {
      ...basePaperTheme.fonts,
      ...navigationFonts,
    },
  };

  const navigationTheme: NavigationThemeType = {
    dark: isDarkTheme,
    colors: navigationColors,
    fonts: combinedTheme.fonts,
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
