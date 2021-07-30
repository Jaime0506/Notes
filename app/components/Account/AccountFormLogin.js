import React, { useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input, Button } from 'react-native-elements'

export default function AccountFormLogin({ onChange, onSubmit, loading, errors }) {

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
                onChange={e => onChange(e, "email")}
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
                onChange={e => onChange(e,"password")}
                errorMessage={errors.error}
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
                onPress={onSubmit}
                loading={loading}
            />
        </View>
    )
};

const styles = StyleSheet.create({

})
