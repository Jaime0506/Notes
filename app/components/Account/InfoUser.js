import React, { useState, useEffect } from 'react';
import { View, Platform, StyleSheet, Text } from 'react-native';
import { Avatar, Icon } from "react-native-elements";
import * as ImagePicker from 'expo-image-picker';
import * as firebase from 'firebase';

export default function ImagePickerExample(props) {

  const { reloadUser, userInfo, setLoading, setLoadingText } = props;

  const { uid, photoURL, displayName, email} = userInfo;

  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      uploadImage(result.uri).then(() => {
        console.log("Se subio la imagen");
        updatePhotoURL();
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      }) 
    }
  };

  const uploadImage = async (uri) => {
        setLoadingText("Actualizando avatar");
        setLoading(true);

        const response = await fetch(uri);
        const blob = await response.blob();
        const ref = firebase.storage().ref().child(`avatar-users/${uid}`);
        return ref.put(blob);
  };

  const updatePhotoURL = () => {
        firebase
        .storage()
        .ref(`avatar-users/${uid}`)
        .getDownloadURL()
        .then(async (response) => {
            const update = {
                photoURL: response,
            }
            await firebase.auth().currentUser.updateProfile(update);
            console.log("Imagen actualizada")
            setLoading(false);
        })
        .catch((error) => {
            setLoading(false);
            console.log("Error al actualizar la imagen")
            console.log(error);
        })
    };

  return (
    <>
      <View style={styles.containerTextTop}>
        <Text style={styles.textTop}>Perfil</Text>
        <Icon
          type="material-community"
          name="account"
        />
      </View>
      <View style={styles.container}>
        <Avatar
          rounded
          showEditButton
          size={90}
          avatarStyle={styles.avatarStyle}
          containerStyle={styles.userInfoAvatar}
          source = {
            photoURL ? {uri: photoURL} : require("../../../assets/Img/defaultAvatarCat.png")
          }
          onPress={pickImage}
        >
          <Avatar.Accessory
            name="pencil"
            type="material-community"
            size={27}
            onPress={pickImage}
          />
        </Avatar>
        <View style={styles.containerTexts}>
          <Text style={[styles.text, { fontWeight: "bold" }]}>{ displayName ? displayName : "Anonimo"}</Text>
          <Text style={styles.text}>{ email }</Text>
        </View>
      </View>
    </>    
  );
};
const styles = StyleSheet.create({
  containerTextTop: {
    height: 50,
    alignItems: "center",
    padding: 15,
    flexDirection: "row",
    backgroundColor: "#FFF",
    marginTop: 14,
    marginBottom: 14,
    elevation: 5,
    borderRadius: 0,
    borderBottomColor: "#A2E3D2",
    borderBottomWidth: 2.5,
    width: "100%",
  },
  textTop: {
    marginRight: 5,
    fontSize: 17
  },
  container: {
    alignItems: 'center', 
    justifyContent: 'center',
    flexDirection: "row",
    backgroundColor: "#FFF",
    height: "25%",
    /*borderBottomWidth: 2.5,
    borderBottomColor: "#A2E3D2", */
    marginTop: 0,
    borderRadius: 10,
    elevation: 5,   
    width: "100%",
  },
  containerTexts:{
  },
  text: {
    fontSize: 17,
    margin: 7,
  },  
  viewUserInfo: {
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      backgroundColor: "#f2f2f2",
      paddingTop: 30,
      paddingBottom: 20,
  },
  userInfoAvatar: {
      marginRight: 20,
  },
  displayName: {
      fontWeight: "bold",
      paddingBottom: 5,
  },
  avatarStyle: {   
  
  }
})