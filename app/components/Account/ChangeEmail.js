import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input } from "react-native-elements";

import * as firebase from "firebase";

import { validateEmail } from "../../utils/validationEmail";
import { reauthenticate } from "../../utils/reauthenticate";

export default function ChangeEmail(props) {
    const { email, setIsVisible, setReloadUser} = props;

    const [data, setData] = useState(defaultData());
    const [error, setErros] = useState({});
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const onChange = (e,type) => {
        setData({...data, [type]: e.nativeEvent.text})
    };

    const onSubmit = () => {
        setErros({});

        if (!data.emailCurrent || !data.newEmail || !data.passwordCurrent) {
            setErros({
                emailCurrent: !data.emailCurrent ? "Todos los campos son requeridos" : "",
                newEmail: !data.newEmail ? "Todos los campos son requeridos" : "",
                passwordCurrent: !data.passwordCurrent ? "Todos los campos son requeridos" : "",
            })
        } else if (email !== data.emailCurrent) {
            setErros({
                emailCurrent: "El correo electronico no corresponde al actual"
            })
        } else if (!validateEmail(data.newEmail)) {
            setErros({
                newEmail: "El correo electronico no es valido",
            })
        } else {
            setLoading(true);
            reauthenticate(data.passwordCurrent).then(() => {
                firebase.auth().currentUser.updateEmail(data.newEmail).then(() => {

                    setLoading(false);
                    setIsVisible(false);
                    setReloadUser(true);

                }).catch((error) => {

                    setLoading(false);
                    setIsVisible(false);
                    console.log(error)
                })
            }).catch((error) => {
                setLoading(false);
                setIsVisible(false);
                console.log(error);
            })
        }
    };

    return (
        <View>
            <Input
                label="Correo actual"
                placeholder="Ejemplo1234@gmail.com"
                leftIcon={{
                    type: "material-community",
                    name: "at"
                }}
                leftIconContainerStyle={{
                    marginTop: 5,
                    marginRight: 3,
                }}
                onChange={e => onChange(e, "emailCurrent")}
                errorMessage={error.emailCurrent}
            />
            <Input
                label="Correo actual"
                placeholder="Ejemplo1234@gmail.com"
                leftIcon={{
                    type: "material-community",
                    name: "email"
                }}
                leftIconContainerStyle={{
                    marginTop: 5,
                    marginRight: 3,
                }}
                onChange={e => onChange(e, "newEmail")}
                errorMessage={error.newEmail}
            />
            <Input
                label="Contraseña actual"
                placeholder="Contraseña"
                password={true}
                secureTextEntry={ showPassword ? false : true}
                leftIcon={{
                    type: "material-community",
                    name: showPassword ? "eye-outline" : "eye-off-outline",
                    onPress: () => setShowPassword(!showPassword)
                }}                
                leftIconContainerStyle={{
                    marginRight: 3,
                }}
                onChange={e => onChange(e,"passwordCurrent")}
                errorMessage={error.passwordCurrent}
            />
            <Button
                title="Cambiar Correo"
                containerStyle={styles.containerBtn}
                buttonStyle={styles.button}
                onPress={onSubmit}
                loading={loading}
            />
        </View>
    )
};

function defaultData () {
    return {
        emailCurrent: "",
        newEmail: "",
        passwordCurrent: ""
    }   
};

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
});
