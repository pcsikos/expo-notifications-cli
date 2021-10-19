# FCM Expo notifications with react-native cli

This guide helps you start a react-native cli project and setup [expo push notifications](https://docs.expo.dev/push-notifications/overview/).

First [initialize an aplication with react-native cli](https://reactnative.dev/docs/environment-setup)

    npx react-native init exponotificationscli

Test the application

    cd expo-notifications-bare-workflow
    npx react-native run-android

expo-notifications has a dependency on [react-native-unimodules](https://www.npmjs.com/package/react-native-unimodules), which need to be installed first:

    npm install react-native-unimodules

Unimodule have a bit more complicated setup. [Follow the installation guide](https://docs.expo.dev/bare/installing-unimodules/).

After that you can install expo-notifications package

    npm install expo-notifications

The remaining step are same as [the installation with bare workflow](https://github.com/pcsikos/expo-notifications-bare-workflow)

All changes can be seen in this [commit](https://github.com/pcsikos/expo-notifications-cli/commit/5ad8d90ab831fad065df703f140c48c396cc7688)
