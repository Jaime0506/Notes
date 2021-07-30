import React, { useEffect, useState, useRef} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Button } from "react-native-elements";
import { Avatar } from "react-native-elements";
import * as firebase from 'firebase';

import AccountOptions from '../../components/Account/AccountOptions';
import InfoUser from "../../components/Account/InfoUser";
import Loading from "../../components/Loading";

export default function AccountLoged() {
    
    const [userInfo, setUserInfo] = useState();
    const [reloadUser, setReloadUser] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loadingText, setLoadingText] = useState("");

    useEffect(() => {
        (async () => {
            const user = await firebase.auth().currentUser;
            setUserInfo(user);
        })()
        setReloadUser(false);
    }, [reloadUser]);

    console.log(userInfo);

    return (
        <View style={styles.container}>
            { userInfo && (
                <InfoUser
                    userInfo={userInfo}
                    setReloadUser={setReloadUser}
                    setLoadingText={setLoadingText}
                    setLoading={setLoading}
                /> 
            )}
            <AccountOptions 
                userInfo={userInfo}
                setReloadUser={setReloadUser}
            />               
            <Loading isVisible={loading} text={loadingText}/>     
            <View style={styles.containerAvatar}>
                <Avatar
                    rounded
                    source={require("../../../assets/Img/cerrar-sesion.png")}
                    size={35}
                    onPress={() => firebase.auth().signOut()}
                />
                <Text style={styles.textSingOut}>Cerrar Sesión</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    containerAvatar: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    textSingOut: {
        color: "#c2c2c2",
        marginTop: 10,
    },
});