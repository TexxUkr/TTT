This is a test task

# Task description

Hi!
Thank you for participating in our hiring process. We would like to ask you to
complete our test task:
Create an app with Home page to list first {N} albums of choice using
https://www.last.fm/api
When user clicks on an album, we redirect to an album page and show a list of
songs that are part of the album.
We also provide a separate screen to show details of the album, with biography data
of the artist.
Total screens: 3.
It is possible to use screen zero to allow for fake login of the user to the app.
Please use react native CLI.
The API methods usable for the project:
● fetchMyArtist
● fetchMyArtistInfo
● getTopAlbums
● getAlbum
● getAlbumTracks
The following use-case scenarios should be utilised:
As a user
I want to seek my artist, for example:
Bon Jovi
And get top albums by the artist, viewable in a list with an album image
And be able to read artist bio
And be able to see all tracks per album by the artist of choice.

# What has been done

- Created a new React Native project using the CLI
- Added the following to use as a boilerplate for next projexts:
  RN Reanimated
  React Navigation
  Redux Toolkit + persist
  i18next
  MMKV Persistence storage
  apisauce REST client v2
  Reactotron RN Inspector/Debugger
  Hermes JS engine
  Jest Test Runner
  Maestro Testing Framework
  date-fns
  react-native-linear-gradient
  react-native-skeleton-placeholder
  react-native-vector-icons
  and more...
- Created screens and logic according to the task description
- Cashing is implemented with RTK Query

# App running

!!! Please set the API URL and API KEY in the app.config.ts file !!!

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
