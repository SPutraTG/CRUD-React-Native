import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

const AuthStack = () => {
    
    return(
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} 
            options={{header: () => null}}/>
            <Stack.Screen name="SignUp" component={SignUpScreen}
            options={({navigation}) => ({
                title: 'Sign Up',
                headerStyle: {
                    backgroundColor: '#f9fafd',
                    shadowColor: '#f9fafd',
                    elevation: 0,
                    
                },

                headerLeft: () => (
                    <View style={{marginLeft: 10}}>
                    <FontAwesome.Button name="long-arrow-left"
                    size={25}
                    backgroundColor="#f9fafd"
                    color="#333"
                    onPress={() => navigation.navigate('Login')}/>
                    </View>
                ),
            })}/>
            </Stack.Navigator>
    );
};

export default AuthStack;