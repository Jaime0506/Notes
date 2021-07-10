import React, { useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input, Button } from 'react-native-elements'

export default function AccountFormLogin({ navigation }) {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
        }}>
            <Input 
                placeholder="Ejemplo@gmail.com"
                containerStyle={styles.input}
                label="Correo electronico"
                leftIcon={{
                    type: "material-community",
                    name: "email"
                }}
                leftIconContainerStyle={{
                    marginTop: 5,
                    marginRight: 5,
                }}
            />
            <Input
                label="Contraseña"
                placeholder="Contraseña"
                leftIcon={{
                    type: "material-community",
                    name: showPassword ? "eye-outline" : "eye-off-outline",
                    onPress: () => setShowPassword(!showPassword)
                }}
                leftIconContainerStyle={{
                    marginRight: 5,
                }}
                password={true}
                secureTextEntry={showPassword ? false : true}
            />
            <Button
                title="Iniciar Sesión"
                containerStyle={{
                    marginTop: 5,
                    marginBottom: 20,
                    width: "95%",
                }}
                buttonStyle={{
                    backgroundColor: "#00acea",
                }}
            />
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

const styles = StyleSheet.create({
    inptu: {
        
    },
})
