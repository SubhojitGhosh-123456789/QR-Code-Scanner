import * as React from "react";
import { StyleSheet, View } from "react-native";
import QR from "./Screens/QR";
import SplashScreen from "./Screens/Splash-Screen";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

var AppNavigation = createSwitchNavigator({
  SplashScreen: SplashScreen,
  QR: QR,
});

const AppContainer = createAppContainer(AppNavigation);
