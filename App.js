import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';
import LoadingScreen from './pages/LoadingScreen';
import GetStartedScreen from './pages/GetStartedScreen';
import HomeScreen from './pages/home/HomeScreen';
import StatsScreen from './pages/stats/StatsScreen';
import WalletScreen from './pages/WalletScreen';
import ProfileScreen from './pages/ProfileScreen';
import AddPayment from './pages/home/Addpayment'; // Import AddPayment

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="GetStarted" component={GetStartedScreen} />
        <Stack.Screen name="Main" component={MainTabs} />
        <Stack.Screen name="AddPayment" component={AddPayment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconSource;

          if (route.name === 'Home') {
            iconSource = focused
              ? require('./assets/img/navbar/home-gray.png')
              : require('./assets/img/navbar/home-green.png');
          } else if (route.name === 'Stats') {
            iconSource = focused
              ? require('./assets/img/navbar/stats-green.png')
              : require('./assets/img/navbar/stats-gray.png');
          } else if (route.name === 'Wallet') {
            iconSource = focused
              ? require('./assets/img/navbar/wallet-green.png')
              : require('./assets/img/navbar/wallet-gray.png');
          } else if (route.name === 'Profile') {
            iconSource = focused
              ? require('./assets/img/navbar/profile-green.png')
              : require('./assets/img/navbar/profile-gray.png');
          }

          return <Image source={iconSource} style={styles.icon} />;
        },
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      })}
    >
      <Tab.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
      <Tab.Screen name="Stats" options={{ headerShown: false }} component={StatsScreen} />
      <Tab.Screen name="Wallet" options={{ headerShown: false }} component={WalletScreen} />
      <Tab.Screen name="Profile" options={{ headerShown: false }} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  tabBar: {
    height: 70,
    borderTopWidth: 0,
    elevation: 0,
    backgroundColor: '#f9f9f9',
  },
});

export default App;
