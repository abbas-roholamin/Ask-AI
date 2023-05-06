/**
 * @format
 * @Inputat
 */

import React from "react";
import { TextInput, View } from "react-native";

function Input({ value, handleChange, ...props }) {
  return (
    <View className="grow">
      <TextInput
        value={value}
        onChangeText={handleChange}
        placeholder="Write your message"
        className="  placeholder:text-white text-white"
        placeholderTextColor={"rgb(75 85 99)"}
        {...props}
      />
    </View>
  );
}

export default Input;
