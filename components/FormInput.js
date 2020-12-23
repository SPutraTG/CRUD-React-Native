import React from 'react';
import {Text, TextInput, StyleSheet, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const FormInput = ({labelValue, placeholderText, iconType, ...rest}) => {
    return(
        <View style={styles.inputContainer}>
            <View style={styles.iconStyle}>
                <FontAwesome5 name={iconType} size={22} color="#666"/>
                </View>
            <TextInput value={labelValue} style={styles.input} numberOfLine={1} 
            placeholder={placeholderText} placeholderTextColor="#666" {...rest}/>
            </View>
    );
};

export default FormInput;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: 60,
        borderColor: '#ccc',
        borderRadius: 3,
        borderWidth: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    iconStyle: {
        padding: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#ccc',
        borderRightWidth: 1,
        width: 50,
    },

    input: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center',
    },
});