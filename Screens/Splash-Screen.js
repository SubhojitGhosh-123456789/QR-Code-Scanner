import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  ImageBackground,
} from "react-native";

export default class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      this.props.navigation.navigate("QR");
    }, 5000);
  }
  render() {
    return (
      <View>
        <ImageBackground
          source={require("../assets/background.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 200,
            }}
          >
            <Text style={styles.text1}>Scan It</Text>
            <Text style={styles.text2}> TM</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "blue",
                fontWeight: "bold",
              }}
            >
              QR
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: "blacj=k",
                fontWeight: "bold",
              }}
            >
              {" "}
              Code
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: "yellow",
                fontWeight: "bold",
              }}
            >
              {" "}
              Scanner
            </Text>
          </View>
          <ActivityIndicator
            color="orange"
            size={50}
            style={{ marginTop: 100, marginBottom: 200 }}
          />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text1: {
    textAlign: "center",
    fontSize: 50,
    color: "white",
    fontWeight: "bold",
  },
  text2: {
    textAlign: "center",
    fontSize: 10,
    color: "yellow",
    fontWeight: "bold",
  },
});
