import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

// Sample transactions data
const transactions = [
  { id: 1, name: 'Upwork', date: 'Today', amount: '+ ₹ 850.00', logo: require('./../assets/img/home/upwork.png'), isPositive: true },
  { id: 2, name: 'Transfer', date: 'Yesterday', amount: '- ₹ 85.00', logo: require('./../assets/img/home/transfer.png'), isPositive: false },
  { id: 3, name: 'Paypal', date: 'Aug 30, 2024', amount: '+ ₹ 1,406.00', logo: require('./../assets/img/home/paypal.png'), isPositive: true },
  { id: 4, name: 'Youtube', date: 'Sept 16, 2024', amount: '- ₹ 11.99', logo: require('./../assets/img/home/youtube.png'), isPositive: false }
];

// Sample upcoming bills data
const upcomingBills = [
  { id: 1, name: 'Electricity', date: 'Mar 5, 2024', amount: '₹ 300.00', logo: require('./../assets/img/wallet/electricity.png') },
  { id: 2, name: 'Spotify', date: 'Mar 10, 2024', amount: '₹ 129.00', logo: require('./../assets/img/wallet/spotify.png') },
  { id: 3, name: 'House Rent', date: 'Mar 31, 2024', amount: '₹ 1,500.00', logo: require('./../assets/img/wallet/rent.png') }
];

// Function to render each transaction or bill
const renderTransaction = (transaction) => {
  return (
    <View key={transaction.id} style={styles.transactionItem}>
      <Image source={transaction.logo} style={styles.transactionLogo} />
      <View style={styles.transactionDetails}>
        <Text style={styles.transactionName}>{transaction.name}</Text>
        <Text style={styles.transactionDate}>{transaction.date}</Text>
      </View>
      <Text style={transaction.isPositive ? styles.positiveAmount : styles.negativeAmount}>
        {transaction.amount}
      </Text>
    </View>
  );
};

// Function to render upcoming bills
const renderBill = (bill) => {
  return (
    <View key={bill.id} style={styles.transactionItem}>
      <Image source={bill.logo} style={styles.transactionLogo} />
      <View style={styles.transactionDetails}>
        <Text style={styles.transactionName}>{bill.name}</Text>
        <Text style={styles.transactionDate}>{bill.date}</Text>
      </View>
      <TouchableOpacity style={styles.payButton}>
        <Text style={styles.payButtonText}>Pay</Text>
      </TouchableOpacity>
    </View>
  );
};

const WalletScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Transactions');

  return (
    <View style={styles.container}>
      {/* Background images */}
      <Image
        source={require('./../assets/img/home/homebg.png')}
        style={styles.backgroundImage}
      />
      <Image
        source={require('./../assets/img/home/homebglayer.png')}
        style={styles.backgroundImage}
      />

      {/* Upper section */}
      <View style={styles.upperContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('./../assets/img/profile/arrowleftwhite.png')} />
        </TouchableOpacity>
        <Text style={styles.text}>Wallet</Text>
        <Image
          source={require('./../assets/img/home/homering.png')}
          style={styles.slider}
        />
      </View>

      {/* Wallet Balance Section */}
      <View style={styles.walletSection}>
        <Text style={styles.balanceText}>Total Balance</Text>
        <Text style={styles.balanceAmount}>₹ 2,548.00</Text>

        {/* Buttons: Add, Pay, Send */}
        <View style={styles.buttonSection}>
          <TouchableOpacity style={styles.actionButton}>
            <Image source={require('./../assets/img/wallet/addicon.png')} />
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Image source={require('./../assets/img/wallet/payicon.png')} />
            <Text style={styles.buttonText}>Pay</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Image source={require('./../assets/img/wallet/sendicon.png')} />
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tab Section for Transactions and Upcoming Bills */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Transactions' && styles.activeTabButton]}
          onPress={() => setActiveTab('Transactions')}
        >
          <Text style={[styles.tabText, activeTab === 'Transactions' && styles.activeTabText]}>Transactions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Upcoming Bills' && styles.activeTabButton]}
          onPress={() => setActiveTab('Upcoming Bills')}
        >
          <Text style={[styles.tabText, activeTab === 'Upcoming Bills' && styles.activeTabText]}>Upcoming Bills</Text>
        </TouchableOpacity>
      </View>

      {/* Transactions and Upcoming Bills Content */}
      <ScrollView style={styles.transactionContainer}>
        {activeTab === 'Transactions' ? transactions.map(renderTransaction) : upcomingBills.map(renderBill)}
      </ScrollView>
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
  walletSection: {
    marginTop: 50,
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 45,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  balanceText: {
    fontSize: 16,
    color: '#888',
  },
  balanceAmount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 10,
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  actionButton: {
    alignItems: 'center',
    flex: 1,
  },
  buttonText: {
    marginTop: 5,
    fontSize: 16,
    color: '#555',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 30,
    marginHorizontal: 20,
    paddingVertical: 5,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  activeTabButton: {
    backgroundColor: '#fff',
    borderRadius: 30,
  },
  tabText: {
    fontSize: 16,
    color: '#888',
  },
  activeTabText: {
    color: '#000',
    fontWeight: 'bold',
  },
  transactionContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  transactionLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  transactionDetails: {
    flex: 1,
    marginLeft: 15,
  },
  transactionName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  transactionDate: {
    fontSize: 14,
    color: '#888',
  },
  positiveAmount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4caf50',
  },
  negativeAmount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#f44336',
  },
  payButton: {
    backgroundColor: '#4caf50',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  payButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default WalletScreen;
