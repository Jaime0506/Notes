import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from "react-native-elements";

import * as firebase from 'firebase';

export default function ChangeName(props) {
    
    const { setIsVisible, setReloadUser, displayName } = props;
    const [newDisplayName, setNewDisplayName] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const onChange = (e) => {
        setNewDisplayName(e.nativeEvent.text);
    };

    const onSubmit = () => {
        setError("");

        if (!newDisplayName) {
            setError("No puede estar el campo vacio");
        } else if (newDisplayName == displayName) {
            setError("No puede usar el nombre que ya tiene");
        } else {
            setLoading(true);
            let fire = firebase.auth().currentUser;
            fire.updateProfile({
                displayName: newDisplayName,
            }).then(() => {
                console.log("Se actualizo correctamente");
                setLoading(false);
                setIsVisible(false);
                setReloadUser(true);

            }).catch(() => {
                console.log("intente mas tarde nuevamente")
                setLoading(false);
                setIsVisible(false);
                setReloadUser(true);
            })
        }
    };

    return (
        <View>
            <Input
                label="Nombre de usuario Nuevo"
                placeholder="Ejemplo1234"
                leftIcon={{
                    type: "material-community",
                    name: "account"
                }}
                onChange={e => onChange(e)}
                errorMessage={error}
            />
            <Button
                title="Cambiar Nombre"
                containerStyle={styles.containerBtn}
                buttonStyle={styles.button}
                onPress={onSubmit}
                loading={loading}
            />        
        </View>
    )
}

const styles = StyleSheet.create({
    containerBtn: {
        marginTop: 2,
        marginLeft: 7,
        marginRight: 7,
        marginBottom: 5,
    },
    button: {
        backgroundColor: "#A2E3D2",
    },
})
