import * as firebase from "firebase";
import { size } from "lodash";

const db = firebase.database();
const dbRef = firebase.database().ref();

export function setNotes (id, uuid, title, descripccion, setIsLoading, navigation) {  
    let check = false;
    setIsLoading(true);

    db.ref('notes/users/' + id + "/" + uuid).set({
        title: title,
        descripccion: descripccion,
    }).then(() => {
            setTimeout(() => {
            setIsLoading(false);
            check = true;            
        }, 1000);

        setTimeout(() => {
            if (check) {
                navigation.navigate("notas");
            }
        },1001);
    })
};

export function getNotes (id, setLoadNotes) {
    dbRef.child("notes").child("users").child(id).get()
        .then((data) => {
            data.val();
        });
         
};


   

