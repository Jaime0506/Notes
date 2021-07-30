import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator} from "react-native";
import { Overlay } from "react-native-elements";

export default function Loading(props){
    const { isVisible, text }  = props;
    return(
        <Overlay
            isVisible={isVisible}
            windowBackgroundColor="rgba(0,0,0,0.5)"
            overlayBackgroundColor="transparent"
            overlayStyle={styles.overlay}
        >
            <View style={styles.view}>
                <ActivityIndicator size="large" color="#E3E3E3" />
                {text && <Text style={styles.text}>
                    {text}
                </Text>}                    
            </View>
        </Overlay>
    )
}
const styles = StyleSheet.create({
    overlay: {
        height: 100,
        width: 230,
        backgroundColor: "#00efd1",
        borderRadius: 10,
    },
    view: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "#FFF",
        textTransform: "uppercase",
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 10,
    }
});
