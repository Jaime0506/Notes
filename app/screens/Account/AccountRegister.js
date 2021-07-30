import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as firebase from "firebase";
import { size } from "lodash";

import AccountFormRegister from '../../components/Account/AccountFormRegister';
import { validateEmail } from "../../utils/validationEmail";


export default function AccountRegister({ navigation }) {

    const [data, setData] = useState(defaultData());
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const onChange = (e, type) => {
        setData({...data, [type]: e.nativeEvent.text});
    };

    const onSubmit = () => {
        setErrors({});

        if (!validateEmail(data.email) || size(data.password) < 6 || data.password !== data.repeatPassword){
            setErrors({
                email: !validateEmail(data.email) ? "El correo electronico no es valido" : "",
                password: size(data.password) < 6 ? "La contraseña debe tener almenos 6 caracteres" : "",
                repeatPassword: data.password !== data.repeatPassword ? "Las contraseñas no coinciden" : "",
            })
        } else {
            setLoading(true);
            firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
                .then(() =>{
                    firebase.auth().signInWithEmailAndPassword(data.email, data.password)
                    .then(() =>{
                        setLoading(false);
                        navigation.navigate("account");
                    })
                    .catch(() => {
                        setLoading(false);
                    })
                })
        };
    };

    return (
        <View>
            <AccountFormRegister onSubmit={onSubmit} onChange={onChange} loading={loading} errors={errors}/>
        </View>
    )
};

function defaultData() {
    return {
        email: "",
        password: "",
        repeatPassword: "",
    }   
};
const styles = StyleSheet.create({})
