import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {IconHeadset, IconLaporan, IconMouse} from '../../assets';

const ButtonIcon = ({title, type}) => {
 const Icon = () => {
   if (title === 'Headset') return <IconHeadset />;

   if (title === 'Laporan') return <IconLaporan />;

   if (title === 'Mouse') return <IconMouse />;

   return <IconHeadset />;

 };
 
  return (
    <TouchableOpacity style={styles.container(type)}>
      <View style={styles.button(type)}>
        <Icon />
      </View>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  container: (type) => ({
      marginBottom : type === "layanan" ? 12 : 0,
      marginRight : type === "layanan" ? 30 : 0
  }), 
  button: (type) => ({
    backgroundColor: '#E0F7EF',
    padding: type === 'layanan' ? 12 : 7,
    borderRadius: 10,
  }),
  text: (type) => ({
    fontSize: type === 'layanan' ? 14 : 10,
    fontFamily:type === 'layanan' ? 'TitilliumWeb-Light' : 'TitilliumWeb-Regular',
    textAlign: 'center',
  }),

});