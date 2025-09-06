# First Mobile App with Expo Router

This project demonstrates the setup of a basic mobile application using Expo Router. It includes the initial project structure and basic navigation setup.

## Project Structure

```
app-example/
├── app/
│   └── (tabs)/
│       └── index.tsx        # Home screen with welcome message
└── constants/
    └── Colors.tsx          # Theme colors and theming utilities
```

## Key Features

- **Expo Router** for navigation
- **TypeScript** for type safety
- **Theming support** with light/dark mode
- **Responsive layout** that works on different screen sizes

## Getting Started

### Prerequisites
- Node.js (v16 or later)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Expo Go app (for testing on physical devices)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd mobile-development-setup
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npx expo start
   ```

4. Test the app:
   - **iOS**: Scan the QR code with your phone's camera
   - **Android**: Use the Expo Go app to scan the QR code

## Development

### Available Scripts
- `npm start` - Start the development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS simulator (macOS only)
- `npm run web` - Run in web browser
- `npm run reset-project` - Reset the project (clean and reinstall dependencies)

### Project Structure Overview

- `/app` - Application screens and navigation
  - `/(tabs)` - Tab navigation
  - `index.tsx` - Home screen
- `/constants` - Application constants and theming
  - `Colors.tsx` - Color definitions and theme utilities

## Testing

1. Run the app:
   ```bash
   npx expo start
   ```

2. On your mobile device:
   - Open the Expo Go app
   - Scan the QR code from the terminal
   - Verify the home screen displays: "** First App Created **"

## Troubleshooting

### Common Issues
- **App not loading**: Try running `npm run reset-project`
- **TypeScript errors**: Make sure all dependencies are installed
- **Expo Go connection issues**: Ensure your device is on the same network as your development machine

## License
This project is part of the ProDev Mobile curriculum.
   ```bash
   npx expo start
   ```
2. Scan the QR code with your device's camera (iOS) or the Expo Go app (Android)

### Reset Project
To reset the project to its initial state:
```bash
npm run reset-project
```

**Observations when running reset-project:**
- Removes the `node_modules` directory
- Clears the Metro bundler cache
- Reinstalls all dependencies
- Resets any local state or cached data

## Verifying Your Setup

To verify everything is working:

1. Create a new Expo project:
   ```bash
   npx create-expo-app my-first-app
   cd my-first-app
   ```

2. Start the development server:
   ```bash
   npx expo start
   ```

3. Scan the QR code with your device's camera (iOS) or the Expo Go app (Android) to open the app on your device.

## Troubleshooting

### Common Issues

1. **QR Code Not Scanning**
   - Ensure your computer and phone are on the same network
   - Try typing the URL manually in the Expo Go app

2. **App Not Loading**
   - Check your internet connection
   - Make sure you're logged into the same Expo account on both your computer and mobile device

3. **Build Failures**
   - Clear the Expo cache: `expo start -c`
   - Update Expo CLI: `npm install -g expo-cli`

## Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Expo Forums](https://forums.expo.dev/)

## Notes

- Keep your Expo Go app updated to the latest version
- For iOS development, you'll need a Mac for building and testing on physical devices
- For the best experience, use a physical device for development when possible

---
*Last updated: September 5, 2025*
