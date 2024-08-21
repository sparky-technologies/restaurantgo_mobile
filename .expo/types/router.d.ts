/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(auth)\_layout` | `/(auth)\reset-password` | `/(auth)\sign-in` | `/(auth)\sign-up` | `/(root)\(tabs)\_layout` | `/(root)\_layout` | `/_sitemap`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
