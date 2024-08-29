import { Stack } from "expo-router";
export default function RootTabLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="password-change" options={{ headerShown: false }} />
      <Stack.Screen name="order-summary" options={{ headerShown: false }} />
    </Stack>
  );
}
