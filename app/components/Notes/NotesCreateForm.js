import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button, Icon } from "react-native-elements";

import { v4 as uuidv4 } from 'uuid';

import * as firebase from "firebase";

export default function NotesCreateForm(props) {

    const db = firebase.database();
    
    const { userId, navigation } = props;

    const [data, setData] = useState(defaultData());
    const [loading, setLoading] = useState(false);

    const onChange = (texto, type) => {
        setData({...data, [type]: texto})    
    };
    
    const setNotes = () => {  
        let check = false;
        let uuid = uuidv4();

        setLoading(true);

        db.ref('notes/users/' + userId + "/" + uuid).set({
            title: data.title,
            descripccion: data.descripccion,
        }).then(() => {
                setTimeout(() => {
                setLoading(false);
                check = true;            
            }, 1000);

            setTimeout(() => {
                if (check) {
                    navigation.navigate("notas");
                }
            },1001);
        })
    };

    const onSubmit = () => {        
        setNotes();
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Titulo"
                placeholderTextColor="#c2c2c2"
                autoCorrect={false}
                style={styles.inputTitle}
                onChangeText={(texto) => onChange(texto,"title")}
            />
            <TextInput
                multiline={true}
                placeholder="Nota..."
                placeholderTextColor="#c2c2c2"
                autoCorrect={false}
                style={styles.input}
                onChangeText={(texto) => onChange(texto,"descripccion")}
            />
            <Button
                title="Crear nota"
                containerStyle={styles.containerBtn}
                buttonStyle={styles.btn}
                onPress={onSubmit}
                loading={loading}
            />
        </View>
    )
};

function defaultData() {
    return {
        title: "",
        descripccion: "",
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputTitle: {
        padding: 8,
        marginHorizontal: 10,
        marginTop: 20,
        borderRadius: 5,
        height: 50,
        backgroundColor: '#FFF',
        color: '#121212',
        textAlignVertical: 'top', 

        borderColor: '#A2E3D2',
        borderWidth: 3,
        elevation: 10,
    },
    input: {
        marginTop: 20,
        marginHorizontal: 10,
        marginBottom: 20,

        padding: 8,
        fontSize: 15,        
        borderRadius: 5,
    
        backgroundColor: '#FFF',
        color: '#121212',
        textAlignVertical: 'top', 

        borderColor: '#A2E3D2',
        borderWidth: 3,
        elevation: 10,
        flex: 1,
    },
    containerBtn: {
        marginHorizontal: 11,
        marginBottom: 20,
        elevation: 5,
    },
    btn: {
        backgroundColor: "#A2E3D2"        
    },
})
