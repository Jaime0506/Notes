import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import Tab from "./Tab";

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab/>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})
