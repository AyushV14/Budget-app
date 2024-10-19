import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';

const transactions = [
  { id: '1', name: 'Upwork', amount: '+ ₹850.00', icon: require('./../../assets/img/home/upwork.png'), date: 'Today' },
  { id: '2', name: 'Transfer', amount: '- ₹85.00', icon: require('./../../assets/img/home/transfer.png'), date: 'Yesterday' },
  { id: '3', name: 'Paypal', amount: '+ ₹1,406.00', icon: require('./../../assets/img/home/paypal.png'), date: 'Aug 30, 2024' },
  { id: '4', name: 'Youtube', amount: '- ₹11.99', icon: require('./../../assets/img/home/youtube.png'), date: 'Jan 16, 2024' },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Background image */}
      <Image source={require('./../../assets/img/home/homebg.png')} style={styles.backgroundImage} />
      <Image source={require('./../../assets/img/home/homebglayer.png')} style={styles.backgroundImage} />

      {/* Main Container */}
      <View style={styles.maincontainer}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.greet}>
            <Text style={styles.greeting_good}>Good afternoon, </Text>
            <Text style={styles.greeting}>Ayush Vikharankar</Text>
          </View>
          <Image source={require('./../../assets/img/home/homering.png')} style={styles.notificationIcon} />
        </View>

        {/* Updated Balance Section */}
        <View style={styles.balanceSection}>
          <View style={styles.balanceHeader}>
            <Text style={styles.balanceText}>
              Total Balance
              <Image source={require('./../../assets/img/home/homebalanceup.png')} style={styles.upIcon} />
            </Text>
            <Image source={require('./../../assets/img/home/homemenu.png')} style={styles.menuIcon} />
          </View>
          <Text style={styles.totalBalance}>₹ 2,548.00</Text>
          <View style={styles.incomeExpenseSection}>
            <View style={styles.incomeContainer}>
              <View style={styles.incomeimgtext}>
                <Image source={require('./../../assets/img/home/homedown.png')} style={styles.icon} />
                <Text style={styles.label}>Income</Text>
              </View>
              <Text style={styles.amount}>₹1,840.00</Text>
            </View>
            <View style={styles.expenseContainer}>
              <View style={styles.incomeimgtext}>
                <Image source={require('./../../assets/img/home/homeup.png')} style={styles.icon} />
                <Text style={styles.label}>Expenses</Text>
              </View>
              <Text style={styles.amount}>₹284.00</Text>
            </View>
          </View>
        </View>

        {/* Transactions */}
        <View style={styles.transactionsSection}>
          <Text style={styles.transactionHeader}>Transactions History</Text>
          <Text style={styles.headerText}>See all</Text>
        </View>
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.transactionItem}>
              <Image source={item.icon} style={styles.transactionIcon} />
              <View style={styles.transactionText}>
                <Text style={styles.transactionName}>{item.name}</Text>
                <Text style={styles.transactionDate}>{item.date}</Text>
              </View>
              <Text style={[
                styles.transactionAmount,
                item.amount.startsWith('+') ? styles.incomeAmount : styles.expenseAmount
              ]}>
                {item.amount}
              </Text>
            </View>
          )}
        />

        {/* Send Again Section */}
        <View style={styles.sendAgainSection}>
          <View style={styles.transactionsSection}>
            <Text style={styles.transactionHeader}>Send Again</Text>
            <Text style={styles.headerText}>See all</Text>
          </View>
          <View style={styles.emojisSection}>
            <Image source={require('./../../assets/img/home/animoji.png')} style={styles.emoji} />
            <Image source={require('./../../assets/img/home/animoji(1).png')} style={styles.emoji} />
            <Image source={require('./../../assets/img/home/animoji(2).png')} style={styles.emoji} />
            <Image source={require('./../../assets/img/home/animoji(3).png')} style={styles.emoji} />
            <Image source={require('./../../assets/img/home/animoji(4).png')} style={styles.emoji} />
          </View>
        </View>

        {/* Add Plus Button */}
        <TouchableOpacity style={styles.plusButton}>
          <Text style={styles.plusButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  maincontainer: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 90,
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 16,
    color: '#555',
  },
  greeting: {
    fontSize: 25,
    fontWeight: '500',
    color: '#fff',
    marginTop: 5,
  },
  greeting_good: {
    fontSize: 17,
    fontWeight: '500',
    color: '#e8e3e3',
  },
  notificationIcon: {
    width: 44,
    height: 44,
  },

  // Updated balance section
  balanceSection: {
    backgroundColor: '#2F7E79',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    marginTop: 50,
  },
  balanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  balanceText: {
    color: '#fff',
    fontSize: 18,
  },
  upIcon: {
    marginLeft: 5,
  },
  totalBalance: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  incomeExpenseSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  incomeContainer: {
    alignItems: 'center',
  },
  incomeimgtext: {
    display: 'flex',
    flexDirection: 'row',
    gap: 7,
  },
  expenseContainer: {
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginBottom: 5,
  },
  label: {
    color: '#fff',
    fontSize: 18,
  },
  amount: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 16,
    marginTop: 5,
  },
  transactionsSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transactionHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  transactionIcon: {
    width: 40,
    height: 40,
  },
  transactionText: {
    flex: 1,
    marginLeft: 10,
  },
  transactionName: {
    fontSize: 16,
    fontWeight: '500',
  },
  transactionDate: {
    color: '#888',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '500',
  },
  incomeAmount: {
    color: '#4CAF50', // Green for income
  },
  expenseAmount: {
    color: '#F44336', // Red for expenses
  },
  emojisSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
    marginTop: 5,
  },
  plusButton: {
    position: 'absolute',
    bottom: 30, // Adjust based on your layout
    right: 170, // Adjust based on your layout
    width: 60,
    height: 60,
    borderRadius: 30, // Make it circular
    backgroundColor: '#438883',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5, // Optional: add shadow effect on Android
  },
  plusButtonText: {
    color: '#fff',
    fontSize: 30, // Adjust the size of the + symbol
    fontWeight: 'bold',
  },
});

export default HomeScreen;
