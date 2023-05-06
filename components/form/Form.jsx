/** @format */

import React from "react";
import Input from "./Input";
import Button from "./Button";
import { View } from "react-native";

function Form({ children, ...props }) {
  return (
    <View
      {...props}
      className="bg-black border border-gray-600 px-4 pt-2 pb-3 rounded-md overflow-hidden max-w-full flex flex-row items-center justify-between gap-1"
    >
      {children}
    </View>
  );
}

Form.Input = Input;
Form.Button = Button;

export default Form;
