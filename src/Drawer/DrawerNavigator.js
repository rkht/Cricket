import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BusinesMain from './BusinesMain';
import BusinessForm from './BusinessForm';
import BusinessDetail from './BusinessDetail';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { NeomorphBox } from 'react-native-neomorph-shadows';

const Drawer = createDrawerNavigator();

const CustomHeader = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <Image
      source={require('../../Icons/1.png')}
      style={styles.image}
    />
    <Text style={styles.centeredBoldText}>BUSINESS CONTACT</Text>
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <NeomorphBox
        style={{
          shadowRadius: 3,
          borderRadius: 100,
          backgroundColor: '#00C8E0',
          width: 40,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MaterialIcons name="menu" size={24} color="white" />
      </NeomorphBox>
    </TouchableOpacity>
  </View>
  );
};

const Custom = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <Image
      source={require('../../Icons/1.png')}
      style={styles.image}
    />
    <Text style={styles.centeredBoldText}>BUSINESS DETAIL'S</Text>
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <NeomorphBox
        style={{
          shadowRadius: 3,
          borderRadius: 100,
          backgroundColor: '#00C8E0',
          width: 40,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MaterialIcons name="menu" size={24} color="white" />
      </NeomorphBox>
    </TouchableOpacity>
  </View>
  );
};

const CustomBusiness = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../Icons/1.png')}
        style={styles.image}
      />
      <Text style={styles.centeredBoldText}>ADD NEW BUSINESS</Text>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <NeomorphBox
          style={{
            shadowRadius: 3,
            borderRadius: 100,
            backgroundColor: '#00C8E0',
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <MaterialIcons name="menu" size={24} color="white" />
        </NeomorphBox>
      </TouchableOpacity>
    </View>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerPosition="right"
      drawerStyle={{ backgroundColor: '#04bfd4ff' }}
      drawerContentOptions={{
        activeTintColor: '#33cfff',
        inactiveTintColor: '#000',
      }}>
      <Drawer.Screen
        name="BusinesMain"
        component={BusinesMain}
        options={({ navigation }) => ({
          headerTitle: '',
          headerLeft: '',
          drawerPosition: 'right',
          headerRight: () => <CustomBusiness navigation={navigation} />,
          headerStyle: { backgroundColor: '#04bfd4ff' },
        })}
      />
      <Drawer.Screen
        name="BusinessForm"
        component={BusinessForm}
        options={({ navigation }) => ({
          headerTitle: '',
          headerLeft: '',
          drawerPosition: 'right',
          headerRight: () => <CustomHeader navigation={navigation} />,
          headerStyle: { backgroundColor: '#04bfd4ff' },
        })}
      />
      <Drawer.Screen
        name="BusinessDetail"
        component={BusinessDetail}
        options={({ navigation }) => ({
          headerTitle: '',
          headerLeft: '',
          drawerPosition: 'right',
          headerRight: () => <Custom navigation={navigation} />,
          headerStyle: { backgroundColor: '#04bfd4ff' },
        })}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
  },
  text: {
    color: 'white',
    fontSize: 16, // Adjust font size as needed
    fontWeight: 'bold',
    marginLeft: 10,
    elevation: 5,
    borderRadius: 5,
    borderWidth: 2
  },
  centeredBoldText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    marginRight: 60, // Adjust margin as needed
    color: 'white',
  },
  centeredBoldText1: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
    marginRight: 50, // Adjust margin as needed
    color: 'white',
  },
  image: {
    width: 100, // adjust the width as needed
    height: 100, // adjust the height as needed
    marginRight: 15, // adjust the margin as needed
    elevation:5,
    color:'white'
  },
});

export default DrawerNavigator;
