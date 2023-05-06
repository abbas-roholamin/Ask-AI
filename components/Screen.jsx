/** @format */

import { SafeAreaView, StyleSheet } from "react-native";

import React from "react";
import constants from "expo-constants";
import { StatusBar } from "expo-status-bar";

function Screen({ children, ...props }) {
  return (
    <SafeAreaView
      style={[styles.container]}
      className="flex-col flex-1 max-h-screen overflow-y-scroll bg-black"
      {...props}
    >
      <StatusBar style="dark" />
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: constants.statusBarHeight,
  },
});
export default Screen;
