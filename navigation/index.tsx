import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import LoginScreen from '../screens/Login';
import RecentTransactionScreen from '../screens/RecentTransactions';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList, AutheticationStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import SecureStore from 'expo-secure-store'
import { Entypo,Feather } from '@expo/vector-icons';
import Colors from '../constants/Colors'

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* <RootNavigator/> */}
      <AuthNavigator/>
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const MainAppStack = createStackNavigator<RootStackParamList>();
const AuthStack = createStackNavigator<AutheticationStackParamList>();


function RootNavigator() {
  // let userToken = SecureStore.getItemAsync('userToken');
  return (
    <MainAppStack.Navigator screenOptions={{ headerShown: false }}>
      <MainAppStack.Screen name="Root" component={BottomTabNavigator} />
      <MainAppStack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </MainAppStack.Navigator>
  )
}

function AuthNavigator() {
  return (
    <AuthStack.Navigator >
      {/* <AuthStack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/> */}
      <AuthStack.Screen name="RecentTransaction" 
      component={RecentTransactionScreen} 
      options={{
        headerShown: true,
        title:"",
        headerLeft:()=> (<Entypo name="chevron-thin-left" size={20} color="black" />),
        headerRight:()=> (<Feather name="search" size={20} color="black" />),
        headerStyle:{backgroundColor:Colors.dark.background},
        headerLeftContainerStyle:{marginLeft:10},
        headerRightContainerStyle:{marginRight:10}
      
      }}/>
    </AuthStack.Navigator>
  )
}
