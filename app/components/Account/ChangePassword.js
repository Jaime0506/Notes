import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input } from "react-native-elements";

import * as firebase from "firebase";
import { reauthenticate } from "../../utils/reauthenticate";

export default function ChangePassword({setIsVisible}) {
    
    const [data, setData] = useState(defaultData())
    const [loading, setLoading] = useState(false);
    const [error, seterror] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const onChange = (e, type) => {
        setData({...data, [type]: e.nativeEvent.text})
    };

    const onSubmit = () => {
        console.log(data);
    };

    return (
        <View>
            <Input
                label="Contraseña actual"
                placeholder="Contraseña"
                password={true}
                secureTextEntry={showPassword ? false : true}
                leftIcon={{
                    type: "material-community",
                    name: "lock"
                }}
                leftIconContainerStyle={{
                    marginTop: 5,
                    marginRight: 3,
                }}
                onChange={e => onChange(e, "passwordCurrent")}
                /*errorMessage={error.emailCurrent}*/
            />
            <Input
                label="Contraseña nueva"
                placeholder="Contraseña"
                password={true}
                secureTextEntry={showPassword ? false : true}
                leftIcon={{
                    type: "material-community",
                    name: "lock"
                }}
                leftIconContainerStyle={{
                    marginTop: 5,
                    marginRight: 3,
                }}
                onChange={e => onChange(e, "newPassword")}
                /*errorMessage={error.newEmail}*/
            />
            <Input
                label="Confirmar contraseña nueva"
                placeholder="Contraseña"
                password={true}
                secureTextEntry={showPassword ? false : true}
                leftIcon={{
                    type: "material-community",
                    name: showPassword ? "eye-outline" : "eye-off-outline",
                    onPress: () => setShowPassword(!showPassword)
                }}                
                leftIconContainerStyle={{
                    marginRight: 3,
                }}
                onChange={e => onChange(e,"repeatNewPassword")}
                /*errorMessage={error.passwordCurrent}*/
            />
            <Button
                title="Cambiar Contraseña"
                containerStyle={styles.containerBtn}
                buttonStyle={styles.button}
                onPress={onSubmit}
                loading={loading}
            />
        </View>
    )
};

function defaultData() {
    return {
        passwordCurrent: "",
        newPassword: "",
        repeatNewPassword: ""
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
})
