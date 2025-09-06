# First Mobile App with Expo Router

This project demonstrates the setup of a basic mobile application using Expo Router. It includes the initial project structure and basic navigation setup.

## Project Setup              

2. **Project Structure**
   ```
   app-example/
   ├── app/
   │   └── (tabs)/
   │       └── index.tsx     # Home screen component
   └── constants/
       └── Colors.tsx       # Color scheme definitions
   ```

## Development

### Running the App
1. Start the development server:
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
