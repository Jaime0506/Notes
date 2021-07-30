import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Icon } from "react-native-elements";

import ChangeName from './ChangeName';
import ChangePassword from './ChangePassword';
import ChangeEmail from './ChangeEmail';
import Modal from '../Modal';

export default function AccountOptions(props) {

    const { userInfo, setReloadUser } = props;
    const [renderComponent, setRenderComponent] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    const selectComponent = (key) => {
        switch (key) {
            case "displayName":
                setRenderComponent(
                    <ChangeName
                        setIsVisible={setIsVisible}
                        displayName={userInfo.displayName}
                        setReloadUser={setReloadUser}
                    />
                );
                setIsVisible(true);
                break;
            case "email":
                setRenderComponent(
                    <ChangeEmail
                        setIsVisible={setIsVisible}
                        setReloadUser={setReloadUser}    
                        email={userInfo.email}                    
                    />
                )
                setIsVisible(true);
                break;
            case "password":
                setRenderComponent(
                   <ChangePassword
                       setIsVisible={setIsVisible}                       
                   />)
                setIsVisible(true);
                break;
            default: 
                setRenderComponent(null);
                setIsVisible(false);
        };
    };

    const menuOptions = generateOptions(selectComponent);

    return (
        <>  
            <View style={styles.containerTop}>
                <Text style={styles.containerText}>
                    Ajustes
                </Text>
                <Icon
                    type="material-community"
                    name="cog"
                />
            </View>

            <View style={styles.container}>
            {menuOptions.map((menu, index) => (
                <ListItem key={index} bottomDivider  style={styles.menuItem} onPress={menu.onPress}>                    
                    <Icon name={menu.iconNameLeft} type={menu.iconType} color={menu.iconColorLeft}/>
                    <ListItem.Content>
                        <ListItem.Title>{menu.title}</ListItem.Title>                        
                    </ListItem.Content>
                    <Icon name={menu.iconNameRight} type={menu.iconType}/>
                </ListItem>
            ))}
            {renderComponent && (
                <Modal isVisible={isVisible} setIsVisible={setIsVisible}>
                    {renderComponent}
                </Modal>
            )}
        </View>
        </>        
    )
};

function generateOptions (selectComponent) {
    return [
        {
            title: "Cambiar Nombre y Apellidos",
            iconType: "material-community",
            
            iconNameLeft: "account-circle",
            iconColorLeft: "#A2E3D2",
            
            iconNameRight: "chevron-right",
            onPress: () => selectComponent("displayName")
        },
        {
            title: "Cambiar Email",
            iconType: "material-community",

            iconNameLeft: "at",
            iconColorLeft: "#A2E3D2",
            
            iconNameRight: "chevron-right",
            onPress: () => selectComponent("email")
        },
        {
            title: "Cambiar Contraseña",
            iconType: "material-community",

            iconNameLeft: "lock-reset",
            iconColorLeft: "#A2E3D2", 

            iconNameRight: "chevron-right",
            onPress: () => selectComponent("password")
        }
    ]
};

const styles = StyleSheet.create({
    containerTop: {
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
    containerText: {
        marginRight: 5,
        fontSize: 17
    },
    container: {
        marginTop: 0,
        width: "100%",
    },
    menuItem: {
        elevation: 3,
        borderRadius: 10,
    },
})
