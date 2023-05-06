/** @format */

import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Button({ handlePress, ...props }) {
  return (
    <TouchableOpacity onPress={handlePress} {...props}>
      <Ionicons name="send" size={24} color="rgb(75 85 99)" />
    </TouchableOpacity>
  );
}

export default Button;
