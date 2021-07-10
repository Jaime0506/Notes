import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, Text, View, Image, Animated, ScrollView } from 'react-native'

import AccountFormLogin from '../../components/Account/AccountFormLogin'

export default function AccountLogin({ navigation }) {

    const imageAnimated = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(imageAnimated, {
            toValue: 1,
            delay: 150,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <ScrollView>
            <View style={styles.containerForm}>
                <Animated.View style={{opacity: imageAnimated}}>
                    <Image
                    source={require("../../../assets/Img/notesLogo.png")}
                    style={{
                        width: 200,
                        height: 200,
                        marginTop: 30,
                    }}
                    />
                </Animated.View>
                <View style={{width: "85%", marginTop: 20}}>
                    <AccountFormLogin/>
                </View>
                <View>
                    <Text>¿No tienes una cuenta?{<Text style={{color: "#f4b844", fontWeight: "bold"}} onPress={() => navigation.navigate("account-register")}> Registrate</Text>}</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    containerForm: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
    },
})
