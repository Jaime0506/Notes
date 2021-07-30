import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { ListItem } from "react-native-elements";

import * as firebase from "firebase";

export default function NotesUser(props) {

    const dbRef = firebase.database().ref("notes/users");

    const [loadNotes, setLoadNotes] = useState([]);

    const { id } = props;
    const objetos = {
        "primer objeto " : {
            "id": "su mama"
        },
    };

    useEffect(() => {
        dbRef.child(id + "").get().then(async (snapshot) => {
            await setLoadNotes(snapshot.val());
        }).catch((error) => {
            console.error(error);
        });  
    },[]) 

        
    return (
        <View style={styles.container}>
            <Text>Hola </Text>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,        
        width: "100%",
    },
    itemContainer: {
        flex: 1,
        width: "100%",
    }
})
