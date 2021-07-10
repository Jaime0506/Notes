import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import NotesStack from './NotesStack';
import AcountStack from './AcountStack';

export default function Tab() {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            initialRouteName="home"
            tabBarOptions={{
                style: {
                    backgroundColor: "#A2E3D2"
                },
                activeTintColor: "#F5F5F5",
                inactiveTintColor: "#6D6D6D"
            }}
            screenOptions={({route}) => ({
                tabBarIcon: ({ color }) => selectIcon(route, color)
            })}
        >
            <Tab.Screen
                name="home"
                component={NotesStack}
                options={{
                    title: "Notas",                    
                }}
            />
            <Tab.Screen
                name="options"
                component={AcountStack}
                options={{
                    title: "Mi cuenta",
                }}
            />
        </Tab.Navigator>
    )
};
function selectIcon(route,color) {
    let iconName;
    
    if (route.name == "home") {
        iconName = "file";
    } else if (route.name == "options") {
        iconName = "account"
    }
    return(
        <Icon type="material-community" name={iconName} color={color} size={35}/>
    )
}

const styles = StyleSheet.create({})
