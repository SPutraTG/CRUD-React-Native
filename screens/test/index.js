import React, { useContext } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';
import ButtonIcon from '../../src/components/ButtonIcon';
import {ScrollView} from 'react-native-gesture-handler';
import { AuthContext } from '../../navigation/AuthProvider';
import Swiper from 'react-native-swiper';

const test = () => {
const {user} = useContext(AuthContext);
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={require('../../src/images/Ellipse.png')} style={styles.header}>
          <Image source={require('../../src/images/Logo2.png')} style={styles.logo} />
          <View style={styles.hello}>
            <Text style={styles.selamat}>Selamat Datang, </Text>
            <Text style={styles.username}>{user.email}</Text>
          </View>
        </ImageBackground>
    <View style={styles.sliderContainer}>
      <Swiper autoplay horizontal={false} height={200} activeDotColor="red">
        <View style={styles.slider}>
          <Image source={require('../../src/images/Logo2.png')} resizeMode='cover' style={styles.sliderImage} />
        </View>
        <View style={styles.slider}>
          <Image source={require('../../src/images/cloud2.jpg')} resizeMode='cover' style={styles.sliderImage} />
        </View>
      </Swiper>
    </View>
  <View style={styles.layanan}>
    <Text style={styles.label}>Layanan Kami</Text>
       <View style={styles.iconLayanan}>
            <ButtonIcon title="Headset"  type="layanan" />
            <ButtonIcon title="Laporan"  type="layanan"/>
            <ButtonIcon title="Mouse"  type="layanan"/>
          </View>
  </View>
      </ScrollView>
    </View>
  );
};

export default test;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.3,
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  logo: {
    width: windowWidth * 0.90,
    height: windowHeight * 0.15,
  },
  hello: {
    marginTop: windowHeight * 0.03,
  },
  selamat: {
    fontSize: 24,
    fontFamily: 'TitilliumWeb-Regular',
  },
  username: {
    fontSize: 22,
    fontFamily: 'TitilliumWeb-Bold',
  },
   layanan: {
    paddingLeft: 30,
    paddingTop: 15,
  },
  label: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold',
  },
  iconLayanan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    flexWrap: 'wrap',
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
  slider: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
});