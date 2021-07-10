import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Notes() {
    return (
        <View style={styles.containerNotes}>
            <Text style={{fontWeight: 'bold', fontSize: 19, color: "#FFF"}}>Luis</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerNotes: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#9AD8C8",
    }
})
