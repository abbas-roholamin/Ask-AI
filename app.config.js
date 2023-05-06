/** @format */
import "dotenv/config";

export default {
  expo: {
    name: "Chat-AI",
    slug: "Chat-AI",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./app/assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./app/assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./app/assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    web: {
      favicon: "./app/assets/favicon.png",
    },
    extra: {
      API_KEY: process.env.API_KEY,
    },
  },
};
