import { View, Image } from "react-native";
import React from "react";
import styles from "./styles";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/image/logo.png")}
      />
      <Image
        style={styles.menu}
        source={require("../../assets/image/menu.png")}
      />
    </View>
  );
};

export default Header;
