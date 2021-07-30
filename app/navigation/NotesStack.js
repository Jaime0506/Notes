import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";

import Notas from "../screens/Notes/Notes";
import NotesCreate from "../screens/Notes/NotesCreate";

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
                        backgroundColor: "#A2E3D2",
                    }
                }}
            />
            <Stack.Screen
                name="crear-notas"
                component={NotesCreate}
                options={{
                    title: "Crea una Nota",
                    headerStyle: {
                        backgroundColor: "#A2E3D2",
                    }
                }}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})
