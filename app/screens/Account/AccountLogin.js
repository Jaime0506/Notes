import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, Text, View, Image, Animated, ScrollView } from 'react-native'
import { isEmpty } from "lodash";
import { validateEmail } from "../../utils/validationEmail";
import * as firebase from "firebase";

import AccountFormLogin from '../../components/Account/AccountFormLogin';

export default function AccountLogin({ navigation }) {

    const imageAnimated = useRef(new Animated.Value(0)).current;

    const [data, setData] = useState(defaultData);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        Animated.timing(imageAnimated, {
            toValue: 1,
            delay: 150,
            useNativeDriver: true,
        }).start();
    }, []);

    const onChange =(e, type) => {
        setData({...data, [type]: e.nativeEvent.text})
    };
    const onSubmit = () => {
        setErrors({});

        if (isEmpty(data.email) || isEmpty(data.password)) {
            setErrors({
                errors: "Todos los campos son obligatorios"
            });
        } else {
            setLoading(true);
            firebase
            .auth()
            .signInWithEmailAndPassword(data.email, data.password)
            .then(() => {
                setLoading(false);
                navigation.navigate("account");
            })
            .catch((errors) => {
                setLoading(false);
                setErrors({
                    error: "Contraseña o correo electronico incorrecto"
                });
                console.log(errors);
            });
        };
    };

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
                    <AccountFormLogin onSubmit={onSubmit} onChange={onChange} loading={loading} errors={errors}/>
                </View>
                <View>
                    <Text>¿No tienes una cuenta? {
                        <Text 
                            style={{color: "#f4b844", fontWeight: "bold"}} 
                            onPress={() => navigation.navigate("account-register")}
                        > Registrate 
                        </Text> }                        
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
};

function defaultData() {
    return {
        email: "",
        password: "",
    }   
};

const styles = StyleSheet.create({
    containerForm: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
    },
})
