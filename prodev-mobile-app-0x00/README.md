# ProDev Mobile App 0x00

First mobile application created with Expo and React Native using Expo Router.

## Project Setup

### Prerequisites
- Node.js (v16 or later)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Expo Go app (for testing on physical devices)

### Setup Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd prodev-mobile-app-0x00
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
   - iOS: Scan the QR code with your phone's camera
   - Android: Use the Expo Go app to scan the QR code

## Project Structure

```
prodev-mobile-app-0x00/
├── app/                    # App routes using Expo Router
│   └── (tabs)/            # Tab navigation
│       ├── _layout.tsx    # Layout for tab navigation
│       └── index.tsx      # Home screen
├── assets/                # Static assets
├── components/            # Reusable components
│   └── Themed.tsx         # Themed components for light/dark mode
└── constants/             # Constants and theme
    └── Colors.tsx         # Color definitions and theme utilities
```

## Key Features

### Home Screen
- Displays "** First App Created **" as the main heading
- Uses themed components for consistent styling
- Responsive layout that works on different screen sizes

### Theming System
- Supports light and dark modes
- Centralized color definitions in `constants/Colors.tsx`
- Reusable themed components in `components/Themed.tsx`

## Development

### Available Scripts
- `npm start` - Start the development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS simulator (macOS only)
- `npm run web` - Run in web browser
- `npm run reset-project` - Reset the project (clean and reinstall dependencies)

### Reset Command
To fix common issues, use the reset command:
```bash
npm run reset-project
```
This will:
1. Remove the `node_modules` directory
2. Clear the Expo cache
3. Delete `package-lock.json`
4. Reinstall all dependencies

## Testing

1. Start the development server:
   ```bash
   npx expo start
   ```

2. On your mobile device:
   - Open the Expo Go app
   - Scan the QR code from the terminal
   - The app should load with the home screen displaying "** First App Created **"

## Troubleshooting

### Common Issues
- **App not loading**: Try running `npm run reset-project`
- **TypeScript errors**: Make sure all dependencies are installed
- **Expo Go connection issues**: Ensure your device is on the same network as your development machine

### Dependencies
- React Native
- Expo
- TypeScript
- Expo Router
- React Navigation

## License
This project is part of the ProDev Mobile curriculum.
- `npm run ios` - iOS
- `npm run web` - Web
- `npm run reset-project` - Clean and reinstall

## Requirements

- Node.js 16+
- Expo Go app
