import firebase from 'react-native-firebase';

import function addItem(item, addComplete){
    firebase.firestore()
    .collection('GearGame')
    .add({
        name: gg.name,
        jenis: gg.jenis,
        nohp: gg.hp,
        alamat: gg.alamat, 
        createdAt: firebase.firestore.FieldValue.serverTimeStamp() 
    }), then((data) => addComplete(data))
    .catch((error) => console.log(error));
}

export asnyc function getItem(itemRetreived){
    
    var ggList = [];
    
    var snapshot = await firebase.firestore()
    .collection('GearGame')
    .orderBy('createdAt')
    .get()

    snapshot.forEach((doc) => {
        ggList.push(doc.data());
    });

    itemRetreived(ggList);
}