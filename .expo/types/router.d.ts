/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(auth)` | `/(auth)/change-password` | `/(auth)/reset-password` | `/(auth)/sign-in` | `/(auth)/sign-up` | `/(auth)/verify` | `/(auth)/welcome` | `/(root)` | `/(root)/(tabs)` | `/(root)/(tabs)/checkout` | `/(root)/(tabs)/home` | `/(root)/(tabs)/profile` | `/(root)/(tabs)/search` | `/(root)/checkout` | `/(root)/fund-account-card` | `/(root)/home` | `/(root)/order-summary` | `/(root)/password-change` | `/(root)/profile` | `/(root)/search` | `/(root)\fund-account-transfer` | `/(tabs)` | `/(tabs)/checkout` | `/(tabs)/home` | `/(tabs)/profile` | `/(tabs)/search` | `/_sitemap` | `/address\` | `/address\[id]` | `/address\add` | `/change-password` | `/checkout` | `/fund-account-card` | `/home` | `/order-summary` | `/password-change` | `/profile` | `/reset-password` | `/search` | `/sign-in` | `/sign-up` | `/verify` | `/welcome`;
      DynamicRoutes: `/food/${Router.SingleRoutePart<T>}`;
      DynamicRouteTemplate: `/food/[id]`;
    }
  }
}
