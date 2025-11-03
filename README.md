# NumberSystem Converter 📱
A cross-platform mobile application for converting numbers between different number systems (Binary, Octal, Decimal, Hexadecimal). Built with React Native and Expo for Android and iOS platforms.

### 🚀 Features
Multi-system Conversion: Convert between Binary, Octal, Decimal, and Hexadecimal

Real-time Validation: Input validation for each number system

Clean UI: Material Design inspired interface

Conversion History: Track your previous conversions

Cross-platform: Works on both Android and iOS

Offline Support: No internet connection required for conversions



# 🛠️ Tech Stack
Frontend: React Native

Framework: Expo

UI Library: React Native Paper

Navigation: Expo Router

Platforms: Android, iOS

# 📋 Prerequisites
Before running this project, make sure you have the following installed:

Node.js (version 16 or higher)

npm or yarn

Expo Go app on your mobile device

# ⚙️ Installation
## 1. CLONE THE REPOSITORY 
    git clone <your-repository-url>
cd NumberSystemConverter

## 2.INSTALL DEPENDANCIES
npm install

## 3.INSTALL EXPO CLI 
npm install -g expo-cli

# 🎯 Usage
 ## Development Mode
 //Start the development server
npx expo start

//Or use npm
npm start

    This will open the Expo Dev Tools in your browser where you can:

.Scan QR code with Expo Go app

.Run on Android emulator (press 'a')

.Run on iOS simulator (press 'i') - macOS only

.Open in web browser (press 'w')

# Building for Production

# Build for Android
npx expo build:android

# Build for iOS (requires macOS)
npx expo build:ios

## 📱 How to Use on Your Phone with Expo Go
Step 1: Install Expo Go
1.Open the Google Play Store (Android) or App Store (iOS)

2.Search for "Expo Go"

I3.nstall the app by Expo

Step 2: Run the Development Server
//In your project directory
npx expo start

Step 3: Connect Your Phone
Ensure your computer and phone are on the same WiFi network

Scan the QR code that appears in the terminal using:

Your phone's camera app (point at QR code)

Or the "Scan QR Code" feature in Expo Go app

Step 4: Using the App
Once the app loads on your phone:

Enter a number in the input field

Select source number system (Binary, Octal, Decimal, Hexadecimal)

Select target number system

Press "Convert" to see the result

View history in the History tab

# -🧪 Example Conversions
Binary to Decimal: 1101 → 13

Decimal to Hexadecimal: 255 → FF

Octal to Binary: 175 → 1111101

Hexadecimal to Decimal: A1 → 161


## 📁 Project Structure

NumberSystemConverter/
├── App.js                 # Main application component
├── app.json              # Expo configuration
├── package.json          # Dependencies and scripts
└── src/
    ├── components/       # Reusable components
    │   ├── ConversionForm.js
    │   ├── HistoryList.js
    │   └── ResultDisplay.js
    ├── screens/          # Screen components
    │   ├── HomeScreen.js
    │   └── HistoryScreen.js
    ├── utils/            # Utility functions
    │   └── converters.js
    └── styles/           # Style definitions
        └── common.js

    
## 🎨 Components Overview
ConversionForm: Main conversion interface with input and base selection

ResultDisplay: Shows conversion results with copy functionality

HistoryList: Displays previous conversions

HomeScreen: Main converter screen

HistoryScreen: Conversion history screen

# 🔧 Available Scripts
npm start          # Start development server
npm run android    # Run on Android
npm run ios        # Run on iOS (macOS only)
npm run web        # Run on web browser
npm test           # Run tests

# 📝 Conversion Logic
The app uses JavaScript's built-in number conversion methods:

parseInt(value, base) to convert to decimal

number.toString(base) to convert from decimal

 # 🐛 Troubleshooting

Common Issues
1.QR code not working?

Use npx expo start --tunnel

Ensure same WiFi network

Try sending link via email (press 's')

2.App not loading?

Clear Expo Go cache

Restart development server

Check console for errors

3.Dependencies issues?

rm -rf node_modules
npm install
npx expo start -c

# 👥 Team Collaboration
This project supports easy collaboration through:

Expo's development builds

Over-the-air updates

Easy sharing via QR codes