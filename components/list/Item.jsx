/** @format */

import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text } from "react-native";

function Item({ message }) {
  return (
    <LinearGradient
      colors={["#1e292cbd", "#1e292c52"]}
      end={{ x: 0, y: -1 }}
      locations={[0.1, 0.9]}
      className="p-4 mb-2 rounded-md "
    >
      <Text className="text-white ">{message}</Text>
    </LinearGradient>
  );
}

export default Item;
