import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/Account/Account"
import AccountLogin from '../screens/Account/AccountLogin';
import AccountRegister from '../screens/Account/AccountRegister';


export default function AcountStack() {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="account"
                component={Account}
                options={{
                    title: "Mi cuenta",
                    headerStyle: { 
                        backgroundColor: "#A2E3D2",
                    }
                }}
            />
            <Stack.Screen
                name="account-login"
                component={AccountLogin}
                options={{
                    title: "Iniciar Sesión",
                    headerStyle: { 
                        backgroundColor: "#A2E3D2",
                    }
                }}
            />
            <Stack.Screen
                name="account-register"
                component={AccountRegister}
                options={{
                    title: "Crea una cuenta",
                     headerStyle: { 
                        backgroundColor: "#A2E3D2",
                    }
                }}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})
