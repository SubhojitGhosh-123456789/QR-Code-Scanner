import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";

export default class TransactionScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      hasCameraPermissions: null,
      scanned: false,
      scannedData: "",
      buttonState: "normal",
    };
  }

  getCameraPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);

    this.setState({
      /*status === "granted" is true when user has granted permission
          status === "granted" is false when user has not granted the permission
        */
      hasCameraPermissions: status === "granted",
      buttonState: "clicked",
      scanned: false,
    });
  };

  handleBarCodeScanned = async ({ type, data }) => {
    this.setState({
      scanned: true,
      scannedData: data,
      buttonState: "normal",
    });
  };

  render() {
    const hasCameraPermissions = this.state.hasCameraPermissions;
    const scanned = this.state.scanned;
    const buttonState = this.state.buttonState;

    if (buttonState === "clicked" && hasCameraPermissions) {
      return (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      );
    } else if (buttonState === "normal") {
      return (
        <View style={styles.container}>
          <ImageBackground
            source={require("../assets/background.png")}
            style={{ width: "100%", height: "100%" }}
          >
            <Image
              source={require("../assets/QR.png")}
              style={{
                width: 150,
                height: 150,
                marginTop: 150,
                alignSelf: "center",
              }}
            />

            <Text style={styles.displayText}>
              {hasCameraPermissions === true ? this.state.scannedData : ""}
            </Text>

            <TouchableOpacity
              onPress={this.getCameraPermissions}
              style={styles.scanButton}
            >
              <Text style={styles.buttonText}>SCAN QR CODE</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  displayText: {
    textAlign: "center",
    color: "blue",
    fontSize: 20,
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  scanButton: {
    alignSelf: "center",
    backgroundColor: "#728cd4",
    width: 250,
    borderRadius: 5,
    marginBottom: 200,
    marginTop: 70,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
