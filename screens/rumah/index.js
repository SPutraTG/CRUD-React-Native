import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Alert} from 'react-native';
import { AuthContext } from '../../navigation/AuthProvider';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import FIREBASE from '../../config/FIREBASE';
import CardPenjualan from '../../src/components/CardPenjualan';

export default class rumahScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      penjualann: {},
      penjualannKey: [],
    };
  }

  componentDidMount() {
    this.ambilData();
  }

  ambilData = () => {
    FIREBASE.database()
      .ref('Penjualan')
      .once('value', (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let penjualanItem = {...data};

        this.setState({
          penjualann: penjualanItem,
          penjualannKey: Object.keys(penjualanItem),
        });
      });
  };

  removeData = (id) => {
    Alert.alert(
      'Info',
      'Anda yakin akan menghapus Data ?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            FIREBASE.database()
              .ref('Penjualan/' + id)
              .remove();
            this.ambilData();
            Alert.alert('Hapus', 'Sukses Hapus Data');
          },
        },
      ],
      {cancelable: false},
    );
  };

  render() {
    const {penjualann, penjualannKey} = this.state;
    return (
      <View style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>Data Penjualan</Text>
          <View style={styles.garis} />
        </View>

        <View style={styles.listPenjualan}>
          {penjualannKey.length > 0 ? (
            penjualannKey.map((key) => (
              <CardPenjualan
                key={key}
                penjualanItem={penjualann[key]}
                id={key}
                {...this.props}
                removeData={this.removeData}
              />
            ))
          ) : (
            <Text style={styles.pesan}>Selamat Datang di UnixGG App.</Text>
          )}
        </View>

        <View style={styles.wrapperButton}>
          <TouchableOpacity
            style={styles.btnTambah}
            onPress={() => this.props.navigation.navigate('tambahScreen')}>
            <FontAwesomeIcon icon={faPlus} size={20} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  pesan: {
    fontSize: 20,
    justifyContent: 'center',
    padding: 81,
  },
  garis: {
    borderWidth: 1,
    marginTop: 10,
  },
  listKontak: {
    paddingHorizontal: 30,
    marginTop: 20,
  },
  wrapperButton: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 30,
  },
  btnTambah: {
    padding: 20,
    backgroundColor: '#2e64e5',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});