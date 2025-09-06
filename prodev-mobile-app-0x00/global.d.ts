/// <reference types="expo-router/types" />

// Add type declarations for expo-router
declare module 'expo-router' {
  import { Link as ExpoLink } from 'expo-router';
  export const Link: typeof ExpoLink;
  // Add other exports as needed
}
