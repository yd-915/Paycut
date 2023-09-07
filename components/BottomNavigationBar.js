import React from 'react';
import { BackHandler} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RFValue } from "react-native-responsive-fontsize";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Groups from "../screens/Groups";
import CreateGroup from '../screens/CreateGroup';
import GroupTabs from './GroupTabs';
import AddExpense from '../screens/AddExpense';
import ExpenseDetails from '../screens/ExpenseDetails';
import Crypto from "../screens/Crypto";
import Chat from '../screens/Chat';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function handleBackButton  ()  {

  BackHandler.exitApp();
  return true;
}

function GroupsStack() {


  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen
        name="Groups"
        component={Groups}
        options={{ title: 'Groups Page' }}
        listeners={{ 
          focus: () => BackHandler.addEventListener('hardwareBackPress',handleBackButton),
          blur: () => BackHandler.removeEventListener('hardwareBackPress',handleBackButton)
        }}
      />
      <Stack.Screen
        name="GroupTabs"
        component={GroupTabs}
      />
      <Stack.Screen
        name="AddExpense"
        component={AddExpense}
      />
      <Stack.Screen
        name="ExpenseDetails"
        component={ExpenseDetails}
      />
    </Stack.Navigator>
  );
}

function CreateGroupStack() {
  return (
    <Stack.Navigator
      initialRouteName="CreateGroup"
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen
        name="CreateGroup"
        component={CreateGroup}
      />
    </Stack.Navigator>
  );
}

function ChatStack() {
 
  
  return (
    <Stack.Navigator
      initialRouteName="Chat"
      screenOptions={{headerShown: false}}
    >
      
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
}

function CryptoStack() {
 
  
  return (
    <Stack.Navigator
      initialRouteName="Crypto"
      screenOptions={{headerShown: false}}
    >
      
      <Stack.Screen name="Crypto" component={Crypto} />
    </Stack.Navigator>
  );
}

function BottomNavigationBar() {
  const insets = useSafeAreaInsets();
  return (
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#FFFFFF',
          tabBarInactiveTintColor: '#FF0000',
          tabBarActiveBackgroundColor: '#77B6FF',
          tabBarInactiveBackgroundColor: '#77B6FF',
          tabBarHideOnKeyboard: true,
          tabBarStyle: {height: insets.bottom + '7.5%', borderTopWidth: 0},
        }}
        
      >
        <Tab.Screen
          name="GroupsStack"          
          component={GroupsStack}
          options={{
            tabBarLabel: 'Groups',
            tabBarLabelPosition: 'below-icon',
            tabBarLabelStyle: {fontFamily: 'Nasa', fontSize: RFValue(9.5), marginBottom: 10},
            tabBarIconStyle: {marginTop: 10},
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="users" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="CreateGroupStack"
          component={CreateGroupStack}
          options={{
            tabBarLabel: 'Add Group',
            tabBarLabelPosition: 'below-icon',
            tabBarLabelStyle: {fontFamily: 'Nasa', fontSize: RFValue(9.5), marginBottom: 10},
            tabBarIconStyle: {marginTop: 10},
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="plus-square" color={color} size={26} />
            ),
          }}
        />

<Tab.Screen
          name="CryptoStack"
          component={CryptoStack}
          options={{
            tabBarLabel: 'Crypto Convert',
            tabBarLabelPosition: 'below-icon',
            tabBarLabelStyle: {fontFamily: 'Nasa', fontSize: RFValue(9.5), marginBottom: 10},
            tabBarIconStyle: {marginTop: 10},
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="bitcoin" color={color} size={26} />
            ),
          }}
        />

<Tab.Screen
          name="ChatStack"
          component={ChatStack}
          options={{
            tabBarLabel: 'Chat',
            tabBarLabelPosition: 'below-icon',
            tabBarLabelStyle: {fontFamily: 'Nasa', fontSize: RFValue(9.5), marginBottom: 10},
            tabBarIconStyle: {marginTop: 10},
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="rocketchat" color={color} size={26} />
            ),
          }}
        />
         
      </Tab.Navigator>    

      
  );
}

export default BottomNavigationBar;