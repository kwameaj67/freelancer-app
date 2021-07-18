import * as React from 'react';
import { View } from 'react-native';
import { AntDesign, Entypo, EvilIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/Home';
import PaymentScreen from '../screens/Payment';
import ExpenseScreen from '../screens/CreateExpense';
import TransactionScreen from '../screens/Transactions';
import ProfileScreen from '../screens/Profile';
import { BottomTabParamList, HomeParamList, PaymentParamList, ExpenseParamList, ProfileParamList, TransactionsParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

// All icons
function HomeBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={25} style={{ marginBottom: -3 }} {...props} />;
}
function PaymentBarIcon(props: { name: React.ComponentProps<typeof AntDesign>['name']; color: string }) {
  return <AntDesign size={25} style={{ marginBottom: -3 }} {...props} />;
}
function ExpenseBarIcon(props: { name: React.ComponentProps<typeof Entypo>['name']; color: string }) {
  return <Entypo size={22} style={{ marginBottom: -3, }} {...props} />;
}
function TransactionsBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string }) {
  return <FontAwesome size={25} style={{ marginBottom: -3 }} {...props} />;
}
function ProfileBarIcon(props: { name: React.ComponentProps<typeof EvilIcons>['name']; color: string }) {
  return <EvilIcons size={30} style={{ marginBottom: -3 }} {...props} />;
}

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tabIconSelected,showLabel:false,style:{height:90,backgroundColor:Colors[colorScheme].background},labelStyle:{fontSize:11.5} }}>
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <HomeBarIcon name="home-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Payment"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <PaymentBarIcon name="creditcard" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Expense"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => <View style={{ backgroundColor:Colors[colorScheme].tabIconSelected,marginVertical:12, paddingHorizontal: 10, paddingVertical:0,borderRadius:8, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                      <ExpenseBarIcon name="plus" color="white" />
                                    </View>
        }}
      />
      <BottomTab.Screen
        name="Transactions"
        component={TabFourNavigator}
        options={{
          tabBarIcon: ({ color }) => <TransactionsBarIcon name="dollar" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={TabFiveNavigator}
        options={{
          tabBarIcon: ({ color }) => <ProfileBarIcon name="user" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}



// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

// Home Stack stuff
const HomeStack = createStackNavigator<HomeParamList>();
function TabOneNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown:false,}}>
      <HomeStack.Screen
        name="TabOneScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Home',}}
      />
    </HomeStack.Navigator>
  );
}

// Payment Stack stuff
const PaymentStack = createStackNavigator<PaymentParamList>();
function TabTwoNavigator() {
  return (
    <PaymentStack.Navigator>
      <PaymentStack.Screen
        name="TabTwoScreen"
        component={PaymentScreen}
        options={{ headerTitle: 'Payment' }}
      />
    </PaymentStack.Navigator>
  );
}

// Expense Stack stuff
const ExpenseStack = createStackNavigator<ExpenseParamList>();
function TabThreeNavigator() {
  return (
    <ExpenseStack.Navigator>
      <ExpenseStack.Screen
        name="TabThreeScreen"
        component={ExpenseScreen}
        options={{ headerTitle: 'Send money' }}
      />
    </ExpenseStack.Navigator>
  );
}
// Transaction Stack stuff
const TransactionStack = createStackNavigator<TransactionsParamList>();
function TabFourNavigator() {
  return (
    <TransactionStack.Navigator>
      <TransactionStack.Screen
        name="TabFourScreen"
        component={TransactionScreen}
        options={{ headerTitle: 'Transactions' }}
      />
    </TransactionStack.Navigator>
  );
}
// Expense Stack stuff
const ProfileStack = createStackNavigator<ProfileParamList>();
function TabFiveNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="TabFiveScreen"
        component={ProfileScreen}
        options={{ headerTitle: 'Profile' }}
      />
    </ProfileStack.Navigator>
  );
}
