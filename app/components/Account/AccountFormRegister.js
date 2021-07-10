import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { Input, Button } from "react-native-elements";
import { BackgroundCarousel } from '../BackgroundCarousel';

export default function AccountFormRegister() {

    const [showPassword, setShowPassword] = useState(false);

    const images = [
        "https://64.media.tumblr.com/456dd41365b7e664e9c8701c2d71cfc3/tumblr_njy5dt4nw51r67atzo1_1280.jpg",
        "https://64.media.tumblr.com/58ccde65cccd3832b1e89d7b1716a119/tumblr_oagcqkbzLI1vqwyhpo1_1280.jpg",
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2018-02-01-at-15-39-36-1517500115.jpg?crop=1xw:1xh;center,top&resize=980:*",
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2018-02-01-at-15-40-04-1517500115.jpg?crop=1xw:1xh;center,top&resize=980:*"
    ]
    return (
        <View style={styles.containerForm}>
            <ScrollView style={{
                height: "100%",
                width: "95%",
            }}>
                <View style={{                    
                justifyContent: "center",
                alignItems: "center",
                marginTop: -50,
             }}>
                <View style={styles.containerImages}>
                    <BackgroundCarousel images={images}/>
                </View>                           
            </View>
            <View style={styles.containerFormInputs}>
                <View style={styles.containerInputs}>
                    <Input
                        label="Correo Electronico"
                        placeholder="Ejemplo@gmail.com"
                        leftIcon={{
                            type: "material-community",
                            name: "email"
                        }}
                        leftIconContainerStyle={{
                            marginTop: 5,
                            marginRight: 3
                        }}
                    />
                    <Input
                        label="Contraseña"
                        placeholder="Contraseña"
                        leftIcon={{
                            type: "material-community",
                            name: "lock"
                        }}
                        leftIconContainerStyle={{
                            marginRight: 3,
                        }}
                        passwordRules={true}
                        secureTextEntry={ showPassword ? false : true }
                    />
                    <Input
                        label="Repetir Contraseña"
                        placeholder="Contraseña"
                        passwordRules={true}
                        secureTextEntry={ showPassword ? false : true }
                        leftIcon={{
                            type: "material-community",
                            name: showPassword ? "eye-outline" : "eye-off-outline",
                            onPress: () => setShowPassword(!showPassword)
                        }}
                        leftIconContainerStyle={{
                            marginRight: 3,
                        }}
                    />
                    <Button
                        title="Crear Cuenta"
                        containerStyle={{
                            width: "95%",
                            marginLeft: 9,
                            marginBottom: 20,
                            marginTop: 5,
                            elevation: 2,
                        }}
                        buttonStyle={{
                            backgroundColor: "#f4b844"
                        }}
                    />
                </View>
            </View> 
            </ScrollView>
        </View>
        
    )
}

const styles = StyleSheet.create({
    containerForm: {
        alignItems: "center",
        height: "100%",
        justifyContent: "center",
    },
    containerImages: {
        marginTop: 100,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 5,
        elevation: 29,
    },  
    containerFormInputs: {
        marginTop: 30,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    containerInputs: {
        width: "90%",
    },
})
