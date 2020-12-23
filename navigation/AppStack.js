import React, { useContext } from 'react';
import {View} from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';
import { createStackNavigator } from '@react-navigation/stack';
import test from '../screens/test';
import rumahScreen from '../screens/rumah';
import tambahScreen from '../screens/input';
import editScreen from '../screens/edit';
import detailScreen from '../screens/detail';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

const AppStack = () => {
    const {logout} = useContext(AuthContext);

    return(
        <Stack.Navigator>
            <Stack.Screen name='rumahScreen' component={rumahScreen}
             options={({navigation}) => ({
                title: 'Home',
                headerStyle: {
                    backgroundColor: '#f9fafd',
                    shadowColor: '#f9fafd',
                    elevation: 5,
                },

                headerRight: () => (
                    <View style={{marginRight: 10}}>
                    <FontAwesome.Button name="sign-out"
                    size={22}
                    backgroundColor="#f9fafd"
                    color="#333"
                    onPress={() => logout()}/>
                    </View>
                ),
            })}
            />
            <Stack.Screen name="tambahScreen" component={tambahScreen}
            options={({navigation}) => ({
                title: 'Tambah Data',
                headerStyle: {
                    backgroundColor: '#f9fafd',
                    shadowColor: '#f9fafd',
                    elevation: 0,
                    
                },
            })}
            />
            <Stack.Screen name="editScreen" component={editScreen}
            options={({navigation}) => ({
                title: 'Update Data',
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
                    onPress={() => navigation.navigate('rumahScreen')}/>
                    </View>
                ),
            })}
            />
            <Stack.Screen name="detailScreen" component={detailScreen}
            options={({navigation}) => ({
                title: 'Detail Data',
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
                    onPress={() => navigation.navigate('rumahScreen')}/>
                    </View>
                ),
            })}
            />
        </Stack.Navigator>
    );
}

export default AppStack;