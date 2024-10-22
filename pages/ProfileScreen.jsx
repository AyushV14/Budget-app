import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  // Link items data
  const linkItems = [
    { title: 'Account Info', icon: require('./../assets/img/profile/accountIcon.png') },
    { title: 'Personal Profile', icon: require('./../assets/img/profile/profileIcon.png') },
    { title: 'Message Center', icon: require('./../assets/img/profile/messageIcon.png') },
    { title: 'Login and Security', icon: require('./../assets/img/profile/loginIcon.png') },
    { title: 'Data and Privacy', icon: require('./../assets/img/profile/privacyIcon.png') },
  ];

  return (
    <View style={styles.container}>
      {/* Background images */}
      <Image source={require('./../assets/img/home/homebg.png')} style={styles.backgroundImage} />
      <Image source={require('./../assets/img/home/homebglayer.png')} style={styles.backgroundImage} />

      {/* Upper section */}
      <View style={styles.upperContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text>
            <Image source={require('./../assets/img/profile/arrowleftwhite.png')} />
          </Text>
        </TouchableOpacity>
        <Text style={styles.text}>Profile</Text>
        <Image source={require('./../assets/img/home/homering.png')} style={styles.slider} />
      </View>

      {/* Profile section */}
      <View style={styles.profileContainer}>
        <Image source={require('./../assets/img/profile/profile.png')} style={styles.profileImage} />
        <View style={styles.info}>
          <Text style={styles.name}>Ayush Vikharankar</Text>
          <Text style={styles.email}>ayush_v</Text>
        </View>
      </View>

      {/* Links Section */}
      <View style={styles.linkSection}>
        <View style={styles.invite}>
          <Image source={require('./../assets/img/profile/linkIcon.png')} style={styles.linkIcon} />
          <Text style={styles.linkTitle}>Invite Friends</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.linkTextContainer}>         
          {linkItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.linkItemContainer}>
              <Image source={item.icon} style={styles.linkItemIcon} />
              <Text style={styles.linkItem}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '40%',
    resizeMode: 'stretch',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
  upperContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 30,
  },
  slider: {
    marginTop: -10,
  },
  profileContainer: {
    marginTop: 50,
    alignItems: 'center',
    gap: 18,
  },
  info: {
    alignItems: 'center',
    gap: 4,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  email: {
    fontSize: 16,
    fontWeight: '400',
    color: '#438883',
  },
  linkSection: {
    flexDirection: 'column',
    marginTop: 40,
    paddingHorizontal: 20,
    marginLeft: 20,
  },
  linkIcon: {
    width: 30,
    height: 30,
    marginRight: 40,
  },
  linkTextContainer: {
    width: '100%',
    marginBottom: 20,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  linkTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  invite: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'flex-start',
  },
  line: {
    width: '80%',
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 10,
  },
  linkItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    width: '100%',
  },
  linkItemIcon: {
    width: 25,
    height: 25,
    marginRight: 40,
  },
  linkItem: {
    fontSize: 18,
    color: '#333',
    paddingLeft: 5,
    fontWeight: '600',
  },
});

export default ProfileScreen;
