// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const History = ({ navigation }) => {
//     const [selectedTab, setSelectedTab] = useState('Info'); // State to track selected tab

//     const handleTabPress = (tabName) => {
//         setSelectedTab(tabName);
//     };

//     const handlePress = (screen) => {
//         navigation.navigate('Main');
//     };

//     return (
//         <>
//             <View style={styles.container}>
//                 <View style={styles.container1}>
//                     <Text style={styles.text55}>Rwanda Womens vs Cameroon Womens, 1st Match</Text>
//                     <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
//                         <View style={styles.tabRow}>
//                             {['Info', 'Live', 'Scorecard', 'Squads', 'Over', 'Run'].map((tabName, index) => (
//                                 <TouchableOpacity
//                                     key={index}
//                                     style={[styles.tabItem, selectedTab === tabName && styles.selectedTab]}
//                                     onPress={() => handleTabPress(tabName)}
//                                 >
//                                     <Text style={styles.tabText}>{tabName}</Text>
//                                 </TouchableOpacity>
//                             ))}
//                         </View>
//                     </ScrollView>
//                 </View>
//                 <View style={styles.inningBreakContainer}>
//                     <Text style={styles.inningBreakText}>Inning Break</Text>
//                 </View>
//                 <View>
//                     <Text style={styles.inningText}>RWAW</Text>
//                 </View>
//                 <View>
//                     <Text style={styles.inningText}>141-5(20)</Text>
//                 </View>
//                 <View style={styles.rowWithBorders}>
//                     <View style={styles.rowContainer}>
//                         <View style={styles.rowItem}>
//                             <Text>CCR 7.5</Text>
//                         </View>
//                         <View style={styles.rowItem}>
//                             <Text>P'SHIP 10(5)</Text>
//                         </View>
//                     </View>
//                 </View>
//             </View>

//             <View style={styles.bottomContainer}>
//                 <TouchableOpacity style={styles.box12} onPress={() => handlePress('Home')}>
//                     <Icon name="home" size={30} color="black" />
//                     <Text style={styles.categoryText12}>Home</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.box12} onPress={() => handlePress('Matches')}>
//                     <Icon name="sports-cricket" size={30} color="black" />
//                     <Text style={styles.categoryText12}>Matches</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.box12} onPress={() => handlePress('Video')}>
//                     <Icon name="videocam" size={30} color="black" />
//                     <Text style={styles.categoryText12}>Video</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.box12} onPress={() => handlePress('News')}>
//                     <Icon name="article" size={30} color="black" />
//                     <Text style={styles.categoryText12}>News</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.box12} onPress={() => handlePress('More')}>
//                     <Icon name="more-horiz" size={30} color="black" />
//                     <Text style={styles.categoryText12}>More</Text>
//                 </TouchableOpacity>
//             </View>
//         </>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     container1: {
//         backgroundColor: '#00e600',
//     },
//     text55: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: 'white',
//         marginLeft: 15,
//         marginTop: 10,
//     },

//     tabRow: {
//         flexDirection: 'row',
//     },
//     tabItem: {
//         paddingVertical: 4,
//         paddingHorizontal: 10,
//         marginHorizontal: 7, // This will create a gap of 20 between items
//     },
//     tabText: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: 'white',
//     },
//     selectedTab: {
//         borderBottomWidth: 4,
//         borderBottomColor: 'white',
//     },
//     bottomContainer: {
//         position: 'absolute',
//         bottom: 0,
//         left: 0,
//         right: 0,
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         backgroundColor: 'white',
//         paddingVertical: 10,
//     },
//     box12: {
//         width: 50,
//         height: 50,
//         alignItems: 'center',
//         justifyContent: 'center',
//         margin: 5,
//         backgroundColor: 'white',
//         borderRadius: 10,
//     },
//     categoryText12: {
//         textAlign: 'center',
//         fontWeight: 'bold',
//         color: 'black',
//         fontSize: 12,
//         marginTop: 6,
//     },
//     inningBreakContainer: {
//         padding: 15,
//     },
//     inningBreakText: {
//         color: 'red',
//         fontSize: 20,
//     },

//     inningText: {
//         color: 'black',
//         fontSize: 30,
//         marginLeft: 15,
//         fontWeight: 'bold',

//     },
//     rowWithBorders: {
//         borderTopWidth: 1,
//         borderBottomWidth: 1,
//         borderColor: 'black',
//         marginVertical: 10,
//     },
//     rowContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',

//     },
//     rowItem: {
//         padding: 10,
//         fontSize: 15,
//         fontWeight: 'bold',

//     },
//     divider: {
//         width: 1,
//         height: '100%',
//         backgroundColor: 'black',
//     },
// });

// export default History;

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Neomorph } from 'react-native-neomorph-shadows';

// import Entypo from 'react-native-vector-icons/Entypo';
// import Entypo from 'react-native-vector-icons/Entypo';
// import Entypo from 'react-native-vector-icons/Entypo';
// import Entypo from 'react-native-vector-icons/Entypo';
// import Entypo from 'react-native-vector-icons/Entypo';

const Feature = () => {
  return (
    <View style={{ backgroundColor: "#12F2EC" }}>
      <ScrollView>
        <Neomorph
          style={{
            shadowRadius: 3,
            borderRadius: 100,
            backgroundColor: '#DDDDDD',
            width: 200,
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Neomorph
            inner
            style={{
              shadowRadius: 7,
              borderRadius: 90,
              backgroundColor: '#F19F9F',
              width: 180,
              height: 180,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Neomorph
              style={{
                shadowRadius: 7,
                borderRadius: 50,
                backgroundColor: '#DDDDDD',
                width: 100,
                height: 100,
              }}
            />
          </Neomorph>
        </Neomorph>
        <View style={styles.container}>
          {/* First row */}
          <View style={styles.row}>
            <TouchableOpacity style={styles.box}>
              <MaterialIcons name="agriculture" size={30} color="black" />
              <Text style={styles.categoryText}>agriculture</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <FontAwesome name="automobile" size={30} color="black" />
              <Text style={styles.categoryText}>automobile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Icon name="computer" size={30} color="black" />
              <Text style={styles.categoryText}>computer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Icon name="cast-for-education" size={30} color="black" />
              <Text style={styles.categoryText}>education</Text>
            </TouchableOpacity>
          </View>

          {/* Second row */}
          <View style={styles.row}>
            <TouchableOpacity style={styles.box}>
              <Icon name="electric-bolt" size={30} color="black" />
              <Text style={styles.categoryText}>electric</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Icon name="construction" size={30} color="black" />
              <Text style={styles.categoryText}>construction</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Icon name="health-and-safety" size={30} color="black" />
              <Text style={styles.categoryText}>health & safety</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Icon name="wallet-giftcard" size={30} color="black" />
              <Text style={styles.categoryText}>Home & gift</Text>
            </TouchableOpacity>
          </View>

          {/* Third row */}
          <View style={styles.row}>
            <TouchableOpacity style={styles.box}>
              <MaterialCommunityIcons name="robot-industrial" size={30} color="black" />
              <Text style={styles.categoryText}>industrial</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Feather name="trending-up" size={30} color="black" />
              <Text style={styles.categoryText}>Fashion</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <FontAwesome name="rupee" size={30} color="black" />
              <Text style={styles.categoryText}>Banking</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Ionicons name="bag-sharp" size={30} color="black" />
              <Text style={styles.categoryText}>Job</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.box}>
              <MaterialCommunityIcons name="home-city" size={30} color="black" />
              <Text style={styles.categoryText}>Property</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Icon name="admin-panel-settings" size={30} color="black" />
              <Text style={styles.categoryText}>Rental </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <FontAwesome name="bed" size={30} color="black" />
              <Text style={styles.categoryText}>Restorent</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <AntDesign name="setting" size={30} color="black" />
              <Text style={styles.categoryText}>Maintenence</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.box}>
              <Icon name="sports" size={30} color="black" />
              <Text style={styles.categoryText}>sports</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Icon name="flag" size={30} color="black" />
              <Text style={styles.categoryText}>Toure & Flag</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <FontAwesome name="recycle" size={30} color="black" />
              <Text style={styles.categoryText}>reco</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Feather name="more-horizontal" size={30} color="black" />
              <Text style={styles.categoryText}>More</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <View>
              <TouchableOpacity style={styles.box1}>
                <Text style={styles.categoryText1}>Categre</Text>
              </TouchableOpacity>
            </View>
            <View>

              <Text style={styles.categoryText2}>Khamgaon</Text>

            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.row1}>
        <TouchableOpacity style={styles.box12}>
          <MaterialIcons name="local-offer" size={30} color="black" />
          <Text style={styles.categoryText12}>offer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box12}>
          <MaterialIcons name="store-mall-directory" size={30} color="black" />
          <Text style={styles.categoryText12}>director</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box12}>
          <MaterialIcons name="store-mall-directory" size={30} color="black" />
          <Text style={styles.categoryText12}>Highligh</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box12}>
          <Icon name="event" size={30} color="black" />
          <Text style={styles.categoryText12}>Events</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white', // Set the background color to white
    borderRadius: 30,
    padding: 10

  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  box: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5, // Adjusted for the gap between boxes
    backgroundColor: 'white', // Box color
    borderRadius: 10,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    // Elevation for Android
    elevation: 5,
  },
  categoryText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 10,
  },
  box1: {
    width: 200,
    height: 30,
    margin: 5, // Adjusted for the gap between boxes
    backgroundColor: 'white', // Box color
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    // Elevation for Android
    elevation: 5,
    justifyContent: 'center',
  },
  categoryText1: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 19,
    paddingLeft: 20
  },
  categoryText2: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
    paddingRight: 40,
    justifyContent: 'center',
    marginTop: 15,
    color: '#0ABAB5'
  },
  row1: {
    width: '100%',
    height: 90,
    bottom: 0,
    paddingHorizontal: 20, // Add padding to the container
    alignItems: 'center', // Align items vertically
    justifyContent: 'space-between', // Space items evenly along the main axis (vertically)
    flexDirection: 'row',
  },
  box12: {
    padding: 20,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5, // Adjusted for the gap between boxes
    backgroundColor: 'white', // Box color
    borderRadius: 10,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    // Elevation for Android
    elevation: 5,
  },
  categoryText12: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 10,
    paddingBottom: 10
  }
});

export default Feature;

