import { DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

import { AnimatedSplashOverlay } from '@/components/animated-icon';

SplashScreen.preventAutoHideAsync();

//A Stack navigator places each new screen on top of the previous one, so router.back() returns to the screen underneath with its state preserved.
//The screens use light colours (black text), so the light DefaultTheme is used even when the phone is in dark mode.
export default function RootLayout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <AnimatedSplashOverlay />
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  );
}
