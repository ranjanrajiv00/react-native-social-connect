import * as Expo from "expo";
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import getTheme from "./app/native-base-theme/components";
import platform from "./app/native-base-theme/variables/platform";
import material from "./app/native-base-theme/variables/material";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "./app/pages/login";
import HomeScreen from "./app/pages/home";
import ProfileScreen from "./app/pages/profile";
import TweetDetailsScreen from "./app/pages/tweetDetails";
import { Root } from "native-base";

import { Provider } from "react-redux";
import store from "./app/store";
import "regenerator-runtime/runtime";
console.disableYellowBox = true;
const AppNavigator = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
    TweetDetails: { screen: TweetDetailsScreen }
  },
  {
    initialRouteName: "Login",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }

  componentWillMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ isLoading: false });
  }

  render() {
    if (this.state.isLoading) {
      return <Expo.AppLoading />;
    } else
      return (
        <Provider store={store}>
          <AppContainer />
        </Provider>
      );
  }
}
