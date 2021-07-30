import React, { useEffect, useState } from 'react'
import * as firebase from 'firebase';

import Loading from '../../components/Loading';
import AccountLoged from './AccountLoged';
import AccountGuest from "./AccountGuest";

export default function Account ({ navigation }) {

    const [login, setLogin] = useState(null);

    useEffect(()=>{
        firebase.auth().onAuthStateChanged((user) => {
            !user ? setLogin(false) : setLogin(true);
        });        
    },  []);

    if (login === null) return <Loading isVisible={true} text="Cargando..." />
    
    return login ? <AccountLoged navigation={navigation}/> : <AccountGuest navigation={navigation}/>;
};

