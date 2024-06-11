import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import BusinesMain from './BusinesMain'
import BusinessForm from './BusinessForm'
import BusinessDetail from './BusinessDetail'

const Drawer = createDrawerNavigator()

const CustomHeader = ({ navigation }) => {
  // const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.centeredBoldText}>
        ADD NEW BUSINESS
      </Text>
      <TouchableOpacity>
        <Text style={styles.text}>DE</Text>
      </TouchableOpacity>

    </View>
  );
};
const Custom = ({ navigation }) => {
  // const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.centeredBoldText}>
        BUSINESS MEMBER
      </Text>
      <TouchableOpacity>
        <Text style={styles.text}>DE</Text>
      </TouchableOpacity>

    </View>
  );
};
const CustomBusiness = ({ navigation }) => {
  // const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.centeredBoldText}>
        BUSINESS HOME
      </Text>
      <TouchableOpacity>
      <Text style={styles.text}>DE</Text>

        {/* <Image
          source={require('../../Icons/App - Splash screen.png')}  // Replace with your image path
          style={styles.image}
        /> */}
      </TouchableOpacity>

    </View>
  );
};


const DrawerNavigator = () => {
  return (


    <Drawer.Navigator>
      <Drawer.Screen
        name='BusinesMain'
        component={BusinesMain}
        options={({ navigation }) => ({
          headerTitle: '',
          elevation: 1,
          headerLeft: null,
          headerRight: () => <CustomBusiness navigation={navigation} />,
          headerStyle: { backgroundColor: '#12F2EC' },

        })}
      />
      <Drawer.Screen
        name='BusinessForm'
        component={BusinessForm}
        options={({ navigation }) => ({
          headerTitle: '',
          elevation: 1,
          headerLeft: null,
          headerRight: () => <CustomHeader navigation={navigation} />,
          headerStyle: { backgroundColor: '#12F2EC' },

        })}
      />

      <Drawer.Screen
        name='BusinessDetail'
        component={BusinessDetail}
        options={({ navigation }) => ({
          headerTitle: '',
          elevation: 1,
          headerLeft: null,
          headerRight: () => <Custom navigation={navigation} />,
          headerStyle: { backgroundColor: '#12F2EC' },

        })}
      />

    </Drawer.Navigator>

  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
    elevation: 1,



  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',

  },
  centeredBoldText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    marginRight: 70,
    color: 'white',


  },
  image: {
    width: 23, // Adjust width as needed
    height: 23, // Adjust height as needed
  },

});

export default DrawerNavigator