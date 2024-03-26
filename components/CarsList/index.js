import { View, Text, FlatList, Dimensions } from "react-native";
import React from "react";
import styles from "./style";
import cars from "./cars";
import CarItem from "../CarItem";

const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
        contentContainerStyle={{ flexGrow: 1 }}
      />
    </View>
  );
};

export default CarsList;
