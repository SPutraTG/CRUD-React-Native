import React, {useContext, useState} from 'react';
import {Text, TouchableOpacity, StyleSheet, Image, View} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

const AddScreen = ({navigation}) => {
    
    this.state = {
        nama: '',
        nohp: '',
        jenis: '',
        harga: '',
        alamat: '',
    }

    onChangeText = (namaState, value) => {
        this.setState({
            [namaState] : value
        })
    }

    onSubmit = () => {
        console.log("Masuk Submit");
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Add New Data</Text>

        <FormInput  
        placeholderText="Nama"
        iconType="user-alt"
        onChangeText={this.onChangeText}
        value={this.state.nama}
        namaState="nama"
        />

        <FormInput  
        placeholderText="No Hp"
        iconType="phone-alt"
        keyboardType="phone-pad"
        onChangeText={this.onChangeText}
        value={this.state.nohp}
        namaState="nohp"
        />

        <FormInput  
        placeholderText="Jenis"
        iconType="gamepad"
        onChangeText={this.onChangeText}
        value={this.state.jenis}
        namaState="jenis"
        />

        <FormInput  
        placeholderText="Harga"
        iconType="money-bill-wave-alt"
        keyboardType="numeric"
        onChangeText={this.onChangeText}
        value={this.state.harga}
        namaState="harga"
        />

        <FormInput  
        placeholderText="Alamat"
        iconType="map-marker-alt"
        onChangeText={this.onChangeText}
        value={this.state.alamat}
        namaState="alamat"
        />

        <FormButton buttonTitle="Add Data" />
        </View>
    );
};

export default AddScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },

    navButton: {
        marginTop: 15,
    },

    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
    },

    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center',
    },

    color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Lato-Regular',
        color: 'grey',
    },
});