import React, {useContext, useState} from 'react';
import {Text, TouchableOpacity, StyleSheet, Image, View} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const {login} = useContext(AuthContext);
    const checkTextInput = () => {
        if(!email.trim()){
            alert('Pleae Enter Email');
            return;
        }
        if(!password.trim()){
            alert('Pleae Enter Password');
            return;
        }
    };

    return(
        <View style={styles.container}>
        <Image source={require('../src/images/Logo2.png')}
        style={styles.logo}/>
        

        <FormInput labelValue={email} onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="at"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}/>

        <FormInput labelValue={password} onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}/>

        <FormButton buttonTitle="Sign In" onPress={() => login(email, password)}/>         
        <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.navButtonText}>
            Don't have an account ? Sign Up</Text>
        </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    logo: {
        height: 120,
        width: 400,
        resizeMode: 'cover',
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

    forgotButton: {
        marginVertical: 25,
    },

    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#ffffff',
        fontFamily: 'Lato-Regular',
    },
});