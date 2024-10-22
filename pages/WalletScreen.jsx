import React from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native';

const WalletScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Wallet Screen</Text> */}
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
        <Text style={styles.text}>Wallet</Text>
        <Image source={require('./../assets/img/home/homering.png')} style={styles.slider} />
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
});

export default WalletScreen;
