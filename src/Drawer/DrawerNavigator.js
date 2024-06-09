import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Main from './Main'
import BusinessDetail from './BusinessDetail'
import History from './History'

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


const DrawerNavigator = () => {
  return (


    <Drawer.Navigator>
      <Drawer.Screen
        name='Main'
        component={Main}
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
      <Drawer.Screen
        name='History'
        component={History}
        options={({ navigation }) => ({
          headerTitle: '',
          elevation: 1,
          headerLeft: null,
          headerRight: () => <CustomHeader navigation={navigation} />,
          headerStyle: { backgroundColor: '#00e600' },

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
    fontSize:20,
    marginRight: 70,
    color: 'white',
   

  },


});

export default DrawerNavigator