/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(auth)` | `/(auth)/reset-password` | `/(auth)/sign-in` | `/(auth)/sign-up` | `/(auth)/welcome` | `/(root)` | `/(root)/(tabs)` | `/(root)/(tabs)/checkout` | `/(root)/(tabs)/home` | `/(root)/(tabs)/profile` | `/(root)/(tabs)/search` | `/(root)/checkout` | `/(root)/home` | `/(root)/profile` | `/(root)/search` | `/(tabs)` | `/(tabs)/checkout` | `/(tabs)/home` | `/(tabs)/profile` | `/(tabs)/search` | `/..\components\InputField` | `/_sitemap` | `/checkout` | `/home` | `/profile` | `/reset-password` | `/search` | `/sign-in` | `/sign-up` | `/welcome`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
