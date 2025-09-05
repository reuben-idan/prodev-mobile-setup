# Mobile Development Environment Setup

This document outlines the steps to set up your mobile development environment using Expo Go for React Native development.

## Prerequisites

- [x] Node.js LTS (v18 or later recommended)
- [x] VS Code (or your preferred IDE)
- [ ] macOS, Linux, or Windows operating system
- [ ] Physical mobile device (iOS or Android)
- [ ] Expo Go app installed on your mobile device

## Installation Steps

### 1. Install Node.js LTS
If you haven't already, download and install Node.js LTS from [nodejs.org](https://nodejs.org/).

### 2. Install Expo CLI
Open your terminal and run:
```bash
npm install -g expo-cli
```

### 3. Install Expo Go on Your Device
1. For iOS: Download from the [App Store](https://apps.apple.com/app/expo-go/id982107779)
2. For Android: Download from the [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&gl=US)

### 4. Create an Expo Account
1. Open the Expo Go app on your device
2. Create a new account or log in if you already have one

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
