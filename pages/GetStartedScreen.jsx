import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const GetStartedScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Background image */}
      <Image source={require('../assets/img/getstarted/getstartedbg.png')} style={styles.backgroundImage} />
      
      {/* Sign-in and language options */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Lang</Text>
        <Text style={styles.headerText}>Sign in</Text>
      </View>

      {/* Center image */}
      <Image source={require('../assets/img/getstarted/getstartedcenter.png')} style={styles.centerImage} />

      {/* Slider image */}
      <View style={styles.slidercontainer}>
        <Image source={require('../assets/img/getstarted/getstartedslider.png')} style={styles.slider} />
        <Image source={require('../assets/img/getstarted/getstartedslider2.png')} style={styles.slider} />
        <Image source={require('../assets/img/getstarted/getstartedslider2.png')} style={styles.slider} />
        <Image source={require('../assets/img/getstarted/getstartedslider2.png')} style={styles.slider} />
      </View>

      {/* Title */}
      <Text style={styles.title}>Always Take Control of your Finance</Text>

      {/* Description */}
      <Text style={styles.description}>
        Effective financial management is essential for a better lifestyle and a secure future. 
        Our app makes budgeting, investing, and tracking expenses simple and effective.
      </Text>

      {/* Get Started Button */}
      <TouchableOpacity 
        style={styles.getStartedButton} 
        onPress={() => navigation.navigate('Main')} // Navigate to Home
      >
        <Text style={styles.getStartedButtonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles remain unchanged...


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 30,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '70%',
    resizeMode: 'cover',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 60, // Adjusted to move it down
    paddingHorizontal: 20, // Added padding to move it inward
  },
  headerText: {
    fontSize: 16,
    color: '#555',
  },
  centerImage: {
    width: '90%', // Changed to full width
    height: '35%',
    resizeMode: 'strech',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 20,
    color: '#000',
  },
  description: {
    fontSize: 17,
    textAlign: 'center',
    marginHorizontal: 30,
    color: '#444',
  },
  getStartedButton: {
    backgroundColor: '#58a49f',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 100,
    marginBottom: 30,
  },
  getStartedButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  slider: {
    width: 20,
    height: 5,
  },
  slidercontainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  }
});

export default GetStartedScreen;
