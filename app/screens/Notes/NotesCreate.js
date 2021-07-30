import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import NotesCreateForm from "../../components/Notes/NotesCreateForm";

export default function NotesCreate(props) {
    const { route, navigation } = props;
    const { userId } = route.params;

    return (
        <View style={styles.container}>
            <NotesCreateForm userId={userId} navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    }
})
