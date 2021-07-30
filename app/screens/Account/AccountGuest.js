import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import { Button } from "react-native-elements";

export default function AccountGuest({ navigation }) {
        
    return (
        <View style={styles.containerAccount}>
            <Image 
                source={require("../../../assets/Img/notesIcon.png")}
                style={{
                    width: 200,
                    height: 200,
                }}
            />
            <View style={styles.containerText}>
                <Text style={styles.text}>
                    NotePlus
                </Text>
            </View>
            <View style={styles.containerDesc}>
                <Text style={styles.textDesc}>
                    Crea notas sencillas de forma rapida y accede a ellas desde cualquier dispositivo desde cualquier lugar
                </Text>
            </View>
            <Button
                title="Empieza ahora"
                buttonStyle={{
                    backgroundColor: "#99D6C6"
                }}
                containerStyle={styles.containerBtn}
                onPress={ () => navigation.navigate("account-login")}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    containerAccount: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F5F5F5",
    },
    containerText: {
        margin: 10,
    },
    text: {
        fontWeight: "bold",
        fontSize: 19,
    },
    containerDesc: {
        margin: 15,
        marginLeft: 30,
        marginRight: 30,
    },
    textDesc: {
        fontSize: 13,
        textAlign: "center",
    },
    containerBtn: {
        margin: 20,
        marginTop: 50,
        width: "45%",
    },
});
