import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';

const AddPayment = ({ navigation }) => {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (event, selectedDate) => {
    setShowPicker(false);
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const handleAddInvoice = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Permission to access camera is required!');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result.cancelled) {
      console.log('User cancelled camera');
    } else {
      console.log('Photo captured: ', result.uri);
    }
  };

  const handleSubmit = () => {
    Alert.alert('Success', 'Expense has been added!', [
      { text: 'OK', onPress: () => navigation.navigate('Home') },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Background Images */}
      <Image source={require('../../assets/img/home/homebg.png')} style={styles.backgroundImage} />
      <Image source={require('../../assets/img/home/homebglayer.png')} style={styles.backgroundImage} />

      {/* Upper Section */}
      <View style={styles.upperContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('../../assets/img/profile/arrowleftwhite.png')} />
        </TouchableOpacity>
        <Text style={styles.text}>Add Expense</Text>
        <Image source={require('../../assets/img/home/homemenu.png')} style={styles.slider} />
      </View>

      {/* Form Section */}
      <View style={styles.formContainer}>
        {/* Expense Name */}
        <View style={styles.inputContainer}>
          <Image source={require('../../assets/img/home/netflix.png')} style={styles.logo} />
          <TextInput style={styles.input} placeholder="Netflix" editable={false} />
        </View>

        {/* Amount Field */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.amountInput}
            value={amount}
            onChangeText={setAmount}
            placeholder="₹ 348.00"
            keyboardType="numeric"
          />
          <TouchableOpacity onPress={() => setAmount('')} style={styles.clearButton}>
            <Text style={styles.clearButtonText}>Clear</Text>
          </TouchableOpacity>
        </View>

        {/* Date Picker */}
        <TouchableOpacity onPress={() => setShowPicker(true)} style={styles.inputContainer}>
          <Text style={styles.dateText}>{date.toDateString()}</Text>
          <Image source={require('../../assets/img/home/calendar.png')} style={styles.calendarIcon} />
        </TouchableOpacity>

        {showPicker && (
          <DateTimePicker value={date} mode="date" display="default" onChange={onChange} />
        )}

        {/* Add Invoice */}
        <TouchableOpacity onPress={handleAddInvoice} style={styles.invoiceButton}>
          <Text style={styles.invoiceButtonText}>+ Add Invoice</Text>
        </TouchableOpacity>

        {/* Submit Button */}
        <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
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
    height: '30%',
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
    marginTop: 10,
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginHorizontal: 20,
    padding: 20,
    marginTop: 50,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    height: '70%',
    gap: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  input: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
    color: '#333',
  },
  amountInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  clearButton: {
    padding: 10,
  },
  clearButtonText: {
    color: '#f44336',
    fontWeight: '600',
  },
  dateText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  calendarIcon: {
    width: 20,
    height: 20,
  },
  invoiceButton: {
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  invoiceButtonText: {
    color: '#4caf50',
    fontWeight: '600',
  },
  submitButton: {
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: '#4caf50',
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default AddPayment;
