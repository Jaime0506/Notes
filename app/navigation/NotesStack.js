import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import Notas from "../screens/Notes/Notes";

export default function NotesStack() {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="notas"
                component={Notas}
                options={{
                    title: "Mis Notas",
                    headerStyle: {
                        backgroundColor: "#F5F5F5",
                    }
                }}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})
