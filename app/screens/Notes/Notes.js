import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Button, Icon, Flat } from "react-native-elements";
import NotesUser from "../../components/Notes/NotesUser";

import * as firebase from "firebase";

export default function Notes({ navigation }) {

    const [userId, setUserId] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            await user && setUserId(user.uid)
        });
    }, []);    
    
    return (
        <View style={styles.containerNotes}>
            <Icon
                reverse
                type="material-community"
                name="plus"
                containerStyle={{
                    position: "absolute",
                    bottom: 10,
                    right: 10,
                }}
                onPress={() => navigation.navigate("crear-notas", {
                    userId: userId,
                })}
            />
            {userId && (
                <NotesUser id={userId}/>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    containerNotes: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#9AD8C8",
        width: "100%",
    },
    text: {
        fontWeight: 'bold', fontSize: 19, color: "#FFF"
    },
})
