import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

export default function RootLayout() {
  const [loaded] = useFonts({
    "Stratos-Bold": require("../assets/fonts/stratos-bold.otf"),
    "Stratos-Black": require("../assets/fonts/stratos-black.otf"),
    "Stratos-Light": require("../assets/fonts/stratos-light.otf"),
    "Stratos-Medium": require("../assets/fonts/stratos-medium.otf"),
    "Stratos-Regular": require("../assets/fonts/stratos-regular.otf"),
    "Stratos-SemiBold": require("../assets/fonts/stratos-semibold.otf"),
    "Stratos-ExtraBold": require("../assets/fonts/stratos-extrabold.otf"),
    "Stratos-Thin": require("../assets/fonts/stratos-thin.otf"),
    "Stratos-ExtraLight": require("../assets/fonts/stratos-extralight.otf"),
    "Stratos-SemiLight": require("../assets/fonts/stratos-semilight.otf"),
  })
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(root)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
