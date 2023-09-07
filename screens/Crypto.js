import { Text, View, ScrollView, StyleSheet, Linking, Button } from 'react-native';
import React, { useState } from 'react';
import AppBarWithBack from '../components/AppBarWithBack';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RFValue } from "react-native-responsive-fontsize";

export default function Crypto({ route }) {
 

  return (
    <View style={styles.container}>
      <AppBarWithBack ez={'Pay'} split={'Cut'} />

      <ScrollView>
        <Text style={styles.key}>
          Bitcoin Converter:
          <Button 
          style={styles.push}
        title="BTC"
        titleStyle={{
          fontFamily: 'Nasa', 
          fontSize: RFValue(14.5), 
          color: '#FFFFFF'
        }}
        
        containerStyle={{
          marginTop: '3%',
          bottom: '3%'
        }}
        onPress={() => Linking.openURL("https://www.xe.com/currencyconverter/convert/?Amount=1&From=BTC&To=CAD")}
      />
        </Text>
        <Text style={styles.key}>
          Bitcoin Cash Converter:
          <Button 
          style={styles.push}
        title="BCH"
        titleStyle={{
          fontFamily: 'Nasa', 
          fontSize: RFValue(14.5), 
          color: '#FFFFFF'
        }}
        
        containerStyle={{
          marginTop: '10%',
          bottom: '13%'
        }}
        onPress={() => Linking.openURL("https://www.xe.com/currencyconverter/convert/?Amount=1&From=BCH&To=CAD")}
      />
        </Text>
        <Text style={styles.key}>
          Ethereum Converter:
          <Button 
          style={styles.push}
        title="ETH"
        titleStyle={{
          fontFamily: 'Nasa', 
          fontSize: RFValue(14.5), 
          color: '#FFFFFF'
        }}
        
        containerStyle={{
          marginTop: '3%',
          bottom: '3%'
        }}
        onPress={() => Linking.openURL("https://www.xe.com/currencyconverter/convert/?Amount=1&From=ETH&To=CAD")}
      />
        </Text>
       
      </ScrollView>
     
    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212'
  },
  heading: {
    fontFamily: 'Nasa',
    fontSize: RFValue(18.5),
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: '3%',
    marginBottom: '5%'
  },
  key: {
    alignSelf: 'center',
    fontFamily: 'Nasa',
    fontSize: RFValue(14.5),
    color: '#FFFFFF',
    marginLeft: '25%',
    marginBottom: '3%',
    margin: '20%'
  },
  value: {
    fontFamily: 'Nasa',
    fontSize: RFValue(14.5),
    color: '#75559F',
    marginBottom: '3%'
  },
  push: {
    marginBottom: '10%',
    borderRadius: 10,
    height: 45,
    width: '90%',
    backgroundColor: '#77B6FF',
    color: 'white',
    marginLeft: "15%"
  }
});