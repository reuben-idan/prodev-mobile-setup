# ProDev Mobile App 0x03

This is the third mobile application in the ProDev Mobile series, focusing on implementing Safe Areas, Images, and Touchable Components in React Native.

## Task: Implementing Safe Areas, Images, and Touchable Components

### Requirements
- Implement a full-screen background image
- Add a company logo at the top of the screen
- Display a title and subtitle text
- Create two buttons: "Join here" and "Sign In"
- Add a "Continue to home" link at the bottom
- Ensure proper spacing and styling for all components
- Use SafeAreaView to handle notches and device-specific insets

### Implementation Details
- Used `SafeAreaView` and `SafeAreaProvider` for proper screen insets
- Implemented `ImageBackground` for the full-screen background
- Created custom styled buttons using `TouchableOpacity`
- Used flexbox for responsive layout
- Added proper spacing and typography

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
- `App.tsx` - Main application component with all UI elements
- `app.json` - Expo configuration
- `package.json` - Project dependencies and scripts
- `assets/` - Directory for images and other static assets

## Available Scripts
- `npm start` - Start the development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS simulator (macOS only)
- `npm run web` - Run in web browser
- `npm run reset-project` - Reset the project (clean and reinstall dependencies)

## Notes
- Replace the placeholder image URLs in `App.tsx` with actual image paths
- The current implementation uses placeholder images from example.com
- Adjust the styling as needed for your specific design requirements
