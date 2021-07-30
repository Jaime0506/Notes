import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Switch, Animated, Button, LogBox } from 'react-native';
import { firebaseApp } from "./app/utils/firebase";

import Navigation from "./app/navigation/Navigation";

export default function App() {
  
  LogBox.ignoreLogs(["Non-serializable values were", "Unhandled promise rejection", "Setting a timer for a long period of time"]);
  
  return (
    <Navigation/>
  );
};

const styles = StyleSheet.create({
  
});
