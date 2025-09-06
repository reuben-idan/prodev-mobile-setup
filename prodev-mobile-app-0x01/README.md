# ProDev Mobile App 0x01

This is the second mobile application in the ProDev Mobile series, focusing on implementing mobile components in React Native.

## Task: Implementing Mobile Components in React Native

### Requirements
- Update the entry screen text to "Entry Screen - Awesome"
- Modify the root View component to use StyleSheet
- Add three Text components with specific styles
  - Large text: "Typescript is great if you practice more"
  - Medium text: "React Native provides you a single codebase for cross platforms"
  - Small text: "ALX is awesome"

### Implementation Details
- Used React Native's StyleSheet for styling
- Implemented proper text styling with different sizes, colors, and alignments
- Used flexbox for layout management

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npx expo start
   ```

3. Scan the QR code with the Expo Go app on your device.

## Project Structure
- `/app` - Contains the main application screen
  - `index.tsx` - Main screen component with styled text
- `app.json` - Expo configuration
- `package.json` - Project dependencies and scripts

## Available Scripts
- `npm start` - Start the development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS simulator (macOS only)
- `npm run web` - Run in web browser
