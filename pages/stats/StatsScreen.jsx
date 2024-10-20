import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Pressable, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the hook

const StatsScreen = () => {
  const navigation = useNavigation(); // Get the navigation object
  const [selectedPeriod, setSelectedPeriod] = useState('Day');
  const [expenseDropdownVisible, setExpenseDropdownVisible] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState('All');
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedSpendingIndex, setSelectedSpendingIndex] = useState(null);

  const topSpendings = [
    {
      icon: require('../../assets/img/stats/starbucks.png'),
      title: 'Starbucks',
      amount: '-₹150.00',
      date: 'Jan 12, 2022',
      backgroundColor: '#fff',
    },
    {
      icon: require('../../assets/img/home/transfer.png'),
      title: 'Transfer',
      amount: '-₹85.00',
      date: 'Yesterday',
      backgroundColor: '#fff',
    },
    {
      icon: require('../../assets/img/home/youtube.png'),
      title: 'Youtube',
      amount: '-₹599.00',
      date: 'Jan 16, 2022',
      backgroundColor: '#fff',
    },
  ];

  const handlePeriodPress = (period) => {
    setSelectedPeriod(period);
  };

  const handleExpensePress = () => {
    setExpenseDropdownVisible(!expenseDropdownVisible);
  };

  const handleExpenseSelection = (expense) => {
    setSelectedExpense(expense);
    setExpenseDropdownVisible(false);
  };

  const handleMonthPress = (month) => {
    setSelectedMonth(month);
  };

  const expenses = ['All', 'Income', 'Expense', 'Savings'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <View style={styles.container}>
      <View style={styles.uppercontainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}> 
          <Text>
          <Image source={require('../../assets/img/stats/arrowleft.png')} style={styles.slider} />
          </Text>
        </TouchableOpacity>
        <Text style={styles.text}>Statistics</Text>
        <Image source={require('../../assets/img/stats/downloadstats.png')} style={styles.slider} />
      </View>
      <View style={styles.buttonContainer}>
        {['Day', 'Week', 'Month', 'Year'].map((period) => (
          <TouchableOpacity
            key={period}
            style={[styles.button, selectedPeriod === period && styles.selectedButton]}
            onPress={() => handlePeriodPress(period)}
          >
            <Text style={[styles.buttonText, selectedPeriod === period && styles.selectedButtonText]}>{period}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.expensebtn} onPress={handleExpensePress}>
        <Text style={styles.expenseButtonText}>{selectedExpense}</Text>
        <Image source={require('./../../assets/img/stats/arrowdownblack.png')} style={styles.upIcon} />
      </TouchableOpacity>
      <Modal visible={expenseDropdownVisible} animationType="slide" transparent={true}>
        <View style={styles.modalView}>
          <FlatList
            data={expenses}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <Pressable onPress={() => handleExpenseSelection(item)}>
                <Text style={styles.dropdownItem}>{item}</Text>
              </Pressable>
            )}
          />
        </View>
      </Modal>

      <Image source={require('../../assets/img/stats/statsgraph.png')} style={styles.graph} />

      <View style={styles.monthContainer}>
        <FlatList
          data={months}
          keyExtractor={(item) => item}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.monthButton, selectedMonth === item && styles.selectedMonthButton]}
              onPress={() => handleMonthPress(item)}
            >
              <Text style={[styles.monthText, selectedMonth === item && styles.selectedMonthText]}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Top spending section */}
      <View style={styles.topSpendingsSection}>
        <View style={styles.transactionsSection}>
          <Text style={styles.transactionHeader}>Top Spendings</Text>
          <Image source={require('../../assets/img/stats/filterstats.png')} style={styles.transactionItem} />
        </View>
        <View style={styles.spendingsListContainer}>
          <FlatList
            data={topSpendings}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <TouchableOpacity onPress={() => setSelectedSpendingIndex(index)}>
                <View
                  style={[
                    styles.spendingItem,
                    { backgroundColor: selectedSpendingIndex === index ? '#438883' : item.backgroundColor },
                  ]}
                >
                  <Image source={item.icon} style={styles.spendingIcon} />
                  <View style={styles.spendingText}>
                    <Text
                      style={[
                        styles.spendingTitle,
                        { color: selectedSpendingIndex === index ? '#fff' : '#000' },
                      ]}
                    >
                      {item.title}
                    </Text>
                    <Text
                      style={[
                        styles.spendingDate,
                        { color: selectedSpendingIndex === index ? '#fff' : '#888' },
                      ]}
                    >
                      {item.date}
                    </Text>
                  </View>
                  <Text
                    style={[
                      styles.spendingAmount,
                      { color: selectedSpendingIndex === index ? '#fff' : '#FF0000' },
                    ]}
                  >
                    {item.amount}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 70,
    backgroundColor: '#fff',
  },
  uppercontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 15,
    borderWidth: 0,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  selectedButton: {
    backgroundColor: '#438883',
  },
  buttonText: {
    fontSize: 16,
    color: '#666666',
  },
  selectedButtonText: {
    color: '#fff',
  },
  expensebtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '30%',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 230,
  },
  expenseButtonText: {
    fontSize: 16,
    color: '#333',
  },
  upIcon: {
    marginLeft: 5,
  },
  modalView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 280,
    marginLeft: 210,
  },
  dropdownItem: {
    width: '100%',
    padding: 25,
    backgroundColor: '#f5f5f5',
  },
  graph: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  monthContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  monthButton: {
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  selectedMonthButton: {},
  monthText: {
    fontSize: 16,
    color: '#666666',
  },
  selectedMonthText: {
    color: '#438883',
  },
  topSpendingsSection: {
    marginTop: 20,
  },
  transactionsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  transactionHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  transactionItem: {
    width: 20,
    height: 20,
  },
  spendingsListContainer: {
    maxHeight: 200,
  },
  spendingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
  },
  spendingIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  spendingText: {
    flex: 1,
  },
  spendingTitle: {
    fontSize: 16,
  },
  spendingDate: {
    fontSize: 12,
    color: '#888',
  },
  spendingAmount: {
    fontSize: 16,
    alignSelf: 'center',
  },
});

export default StatsScreen;
