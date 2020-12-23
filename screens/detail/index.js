import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import FIREBASE from '../../config/FIREBASE';

export default class detailScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      penjualan: {},
    };
  }

  componentDidMount() {
    FIREBASE.database()
      .ref('Penjualan/'+ this.props.route.params.id)
      .once('value', (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let penjualanItem = {...data};

        this.setState({
          penjualan: penjualanItem,
        });
      });
  }

  render() {
    const {penjualan} = this.state;
    return (
      <View style={styles.pages}>
        <Text>Nama : </Text>
        <Text style={styles.text}>{penjualan.nama} </Text>

        <Text>Nomor HP : </Text>
        <Text style={styles.text}>{penjualan.nomorHP} </Text>

        <Text>Tipe Barang : </Text>
        <Text style={styles.text}>{penjualan.tipe} </Text>

        <Text>Harga Barang : </Text>
        <Text style={styles.text}>{penjualan.harga} </Text>
        
        <Text>Alamat : </Text>
        <Text style={styles.text}>{penjualan.alamat} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    pages : {
        margin: 30,
        padding: 20,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 5,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10   
    }
});