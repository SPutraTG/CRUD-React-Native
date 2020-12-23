import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Alert} from 'react-native';
import { InputData } from '../../src/components';
import FIREBASE from '../../config/FIREBASE';

export default class tambahScreen extends Component {
constructor(props) {
    super(props);

    this.state = {
      nama: '',
      nomorHP: '',
      tipe: '',
      harga: '',
      alamat: '',
    };
  }

  onChangeText = (namaState, value) => {
    this.setState({
      [namaState]: value,
    });
  };

  onSubmit = () => {
    if(this.state.nama && this.state.nomorHP && this.state.tipe && this.state.harga && this.state.alamat) {
      
      const penjualanReferensi = FIREBASE.database().ref('Penjualan');
      const penjualan = {
        nama: this.state.nama,
        nomorHP: this.state.nomorHP,
        tipe: this.state.tipe,
        harga: this.state.harga,
        alamat: this.state.alamat
      }

      penjualanReferensi
        .push(penjualan)
        .then((data) => {
          Alert.alert('Sukses', 'Data Tersimpan');
          this.props.navigation.replace('rumahScreen');
        })
        .catch((error) => {
          console.log("Error : ", error);
        })


    }else {
      Alert.alert('Error', 'Diwajibkan untuk mengisi semua data');
    }
    
  };

  render() {
    return (
      <View style={styles.pages}>
        <InputData
          label="Nama"
          placeholder="Masukkan Nama"
          onChangeText={this.onChangeText}
          value={this.state.nama}
          namaState="nama"
        />

        <InputData
          label="No. HP"
          placeholder="Masukkan No. HP"
          keyboardType="number-pad"
          onChangeText={this.onChangeText}
          value={this.state.nomorHP}
          namaState="nomorHP"
        />

         <InputData
          label="Tipe"
          placeholder="Masukkan Tipe"
          onChangeText={this.onChangeText}
          value={this.state.tipe}
          namaState="tipe"
        />

        <InputData
          label="Harga"
          placeholder="Rp."
          keyboardType="number-pad"
          onChangeText={this.onChangeText}
          value={this.state.harga}
          namaState="harga"
        />

        <InputData
          label="Alamat"
          placeholder="Masukkan Alamat"
          isTextArea={true}
          onChangeText={this.onChangeText}
          value={this.state.alamat}
          namaState="alamat"
        />

        <TouchableOpacity style={styles.tombol} onPress={() => this.onSubmit()}>
          <Text style={styles.textTombol}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    padding: 30,
  },
  tombol: {
    backgroundColor: '#2e64e5',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  textTombol: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});