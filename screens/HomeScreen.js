import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const HomeScreen = ({navigation}) => {
    
    

    return(
        <View style={styles.container}>
            <View style={styles.wrapperButton}>
                <TouchableOpacity style={styles.btnTambah} onPress={() => navigation.navigate('tambahScreen')}>
                    <FontAwesomeIcon icon={faPlus} size={20} color={'white'}/>
                </TouchableOpacity>
            </View>
           <Text style={styles.text}>Selamat Datang di UnixGG App</Text>
           <Text style={styles.text}>{user.email}</Text>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    wrapperButton: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        right: 0,
        margin: 30
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

    text: {
        fontSize: 20,
        color: '#333333'
    }
});