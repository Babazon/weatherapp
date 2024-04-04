# Weather App

Weather App is a user-friendly mobile application designed to keep users updated on weather forecasts. Leveraging the Weatherapi public API, the app provides real-time information about weather.

1. [Weather App](#weather-app)
2. [Key Features](#key-features)
   - [Autocomplete API](#1-autocomplete-api)
   - [Forecast Options](#2-forecast-options)
   - [Color code for temperatures](#3-color-code-for-temperatures)
   - [Pull to refresh](#4-pull-to-refresh)
   - [Error handling](#5-error-handling)
   - [Day/Night mode](#6-daynight-mode)
3. [Project Structure](#project-structure)
4. [Quality of Life Improvements](#quality-of-life-improvements)
5. [Future Improvements](#future-improvements)
6. [Screenshots](#screenshots)
   - [Android](#android)
   - [iOS](#ios)
7. [Installing and running the app](#getting-started)
   - [Step 1: Start the Metro Server](#step-1-start-the-metro-server)
   - [Step 2: Start your Application](#step-2-start-your-application)
     - [For Android](#for-android)
     - [For iOS](#for-ios)
   - [Step 3: Modifying your App](#step-3-modifying-your-app)
8. [Congratulations!](#congratulations)
   - [Now what?](#now-what)
9. [Troubleshooting](#troubleshooting)
10. [Learn More](#learn-more)

## Key Features

### 1. Autocomplete API

The search bar continuously tries to assist the user by offering autocompleted city queries. This only works if there are 3 or more characters typed in the search bar.

### 2. Forecast Options

The Forecast area offers 2, 5, 10, 20 hour forecast for the day with average temperature.

### 3. Color code for temperatures

The temperature strings are color coded to help read the information better

### 4. Pull to refresh

The app displays the time the weather data was last updated, and intiutive pull to refresh functionality can help fetch new data

### 5. Error handling

An error text is displayed when the query doesn't return a result

### 6. Day/Night mode

The app, geniusly, displays a day or night background based on target location.

## Project Structure

The project follows a structured layout for easy navigation and maintenance. Folders such as state, translations, context, (or containers, molecules..) can be added when the project gets larger.

```
/src
  /components
  /screens
  /services
  /assets
  /hooks
  /utils
  /navigation
  App.tsx
  constants.ts
__tests__
__mocks__
```

## Quality of Life Improvements

The package.json file includes scripts for linting, formatting, type-checking, and running unit tests, promoting code quality and maintainability.  
`$ npm run check-types`
`$ npm run lint-fix`
`$ npm run test`
`$ npm run format`

## Future Improvements

The app could have an automatic update tha runs on background, and fetches new weather forecast. Weekly forecast can be displayed. Geolocation option can get user's location, and query based on lat/long. Searched locations can be saved to AsyncStorage and be accessed and queried easily.

## Screenshots

### Android

![Screenshot_20240404_212638](https://github.com/Babazon/weatherapp/assets/9430138/ca660f25-6b44-4fb2-9430-20f775b7cd2d)
![Screenshot_20240404_212615](https://github.com/Babazon/weatherapp/assets/9430138/0fc1fde3-5fb2-40db-9494-902a2a96b826)
![Screenshot_20240404_212549](https://github.com/Babazon/weatherapp/assets/9430138/27696394-1061-4d55-b165-7d011e285c60)

### IOS

![Simulator Screen Shot - iPhone SE (3rd generation) - 2024-04-04 at 20 40 20](https://github.com/Babazon/weatherapp/assets/9430138/ecb6a057-1389-448c-b532-92b8fdfa8622)
![Simulator Screen Shot - iPhone SE (3rd generation) - 2024-04-04 at 20 39 59](https://github.com/Babazon/weatherapp/assets/9430138/8acea489-d13e-4d13-b28c-52a9b4852951)
![Simulator Screen Shot - iPhone SE (3rd generation) - 2024-04-04 at 20 39 42](https://github.com/Babazon/weatherapp/assets/9430138/a705ba5c-1276-4f82-8c47-5ca7d262aa02)

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

## IMPORTANT: Don't forget to obtain an API KEY from weatherapi.com and place it in `src/constants.ts` file where commented.

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
