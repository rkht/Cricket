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
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {NeomorphBox} from 'react-native-neomorph-shadows';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

const Feature = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container2}>
        <View style={styles.container}>
          <ScrollView style={styles.scrollView}>
            {/* First row */}
            <View style={styles.row}>
              <TouchableOpacity>
                <NeomorphBox style={styles.box} swapShadowLevel>
                  <MaterialIcons name="agriculture" size={30} color="black" />
                  <Text style={styles.categoryText}>Agriculture</Text>
                </NeomorphBox>
              </TouchableOpacity>
              <TouchableOpacity>
                <NeomorphBox style={styles.box} swapShadowLevel>
                  <FontAwesome name="automobile" size={30} color="black" />
                  <Text style={styles.categoryText}>Automobile</Text>
                </NeomorphBox>
              </TouchableOpacity>
              <TouchableOpacity>
                <NeomorphBox style={styles.box} swapShadowLevel>
                  <Icon name="computer" size={30} color="black" />
                  <Text style={styles.categoryText}>Computer</Text>
                </NeomorphBox>
              </TouchableOpacity>
              <TouchableOpacity>
                <NeomorphBox style={styles.box} swapShadowLevel>
                  <Icon name="cast-for-education" size={30} color="black" />
                  <Text style={styles.categoryText}>Education</Text>
                </NeomorphBox>
              </TouchableOpacity>
            </View>

            {/* Second row */}
            <View style={styles.row}>
              <TouchableOpacity>
                <NeomorphBox style={styles.box}>
                  <Icon name="electric-bolt" size={30} color="black" />
                  <Text style={styles.categoryText}>Electric</Text>
                </NeomorphBox>
              </TouchableOpacity>
              <TouchableOpacity>
                <NeomorphBox style={styles.box}>
                  <Icon name="construction" size={30} color="black" />
                  <Text style={styles.categoryText}>Construction</Text>
                </NeomorphBox>
              </TouchableOpacity>
              <TouchableOpacity>
                <NeomorphBox style={styles.box}>
                  <Icon name="health-and-safety" size={30} color="black" />
                  <Text style={styles.categoryText}>Health & Safety</Text>
                </NeomorphBox>
              </TouchableOpacity>
              <TouchableOpacity>
                <NeomorphBox style={styles.box}>
                  <Icon name="wallet-giftcard" size={30} color="black" />
                  <Text style={styles.categoryText}>Home & Gift</Text>
                </NeomorphBox>
              </TouchableOpacity>
            </View>

            {/* Third row */}
            <View style={styles.row}>
              <TouchableOpacity>
                <NeomorphBox style={styles.box}>
                  <MaterialCommunityIcons
                    name="robot-industrial"
                    size={30}
                    color="black"
                  />
                  <Text style={styles.categoryText}>Industrial</Text>
                </NeomorphBox>
              </TouchableOpacity>

              <TouchableOpacity>
                <NeomorphBox style={styles.box}>
                  <Feather name="trending-up" size={30} color="black" />
                  <Text style={styles.categoryText}>Fashion</Text>
                </NeomorphBox>
              </TouchableOpacity>
              <TouchableOpacity>
                <NeomorphBox style={styles.box}>
                  <FontAwesome name="rupee" size={30} color="black" />
                  <Text style={styles.categoryText}>Banking</Text>
                </NeomorphBox>
              </TouchableOpacity>
              <TouchableOpacity>
                <NeomorphBox style={styles.box}>
                  <Ionicons name="bag-sharp" size={30} color="black" />
                  <Text style={styles.categoryText}>Job</Text>
                </NeomorphBox>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <TouchableOpacity>
                <NeomorphBox style={styles.box}>
                  <MaterialCommunityIcons
                    name="home-city"
                    size={30}
                    color="black"
                  />
                  <Text style={styles.categoryText}>Property</Text>
                </NeomorphBox>
              </TouchableOpacity>
              <TouchableOpacity>
                <NeomorphBox style={styles.box}>
                  <Icon name="admin-panel-settings" size={30} color="black" />
                  <Text style={styles.categoryText}>Rental</Text>
                </NeomorphBox>
              </TouchableOpacity>
              <TouchableOpacity>
                <NeomorphBox style={styles.box}>
                  <FontAwesome name="bed" size={30} color="black" />
                  <Text style={styles.categoryText}>Restaurant</Text>
                </NeomorphBox>
              </TouchableOpacity>
              <TouchableOpacity>
                <NeomorphBox style={styles.box}>
                  <AntDesign name="setting" size={30} color="black" />
                  <Text style={styles.categoryText}>Maintenance</Text>
                </NeomorphBox>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <TouchableOpacity>
                <NeomorphBox style={styles.box}>
                  <Icon name="sports" size={30} color="black" />
                  <Text style={styles.categoryText}>Sports</Text>
                </NeomorphBox>
              </TouchableOpacity>
              <TouchableOpacity>
                <NeomorphBox style={styles.box}>
                  <Icon name="flag" size={30} color="black" />
                  <Text style={styles.categoryText}>Tour & Flag</Text>
                </NeomorphBox>
              </TouchableOpacity>
              <TouchableOpacity>
                <NeomorphBox style={styles.box}>
                  <FontAwesome name="recycle" size={30} color="black" />
                  <Text style={styles.categoryText}>Recycle</Text>
                </NeomorphBox>
              </TouchableOpacity>
              <TouchableOpacity>
                <NeomorphBox style={styles.box}>
                  <Feather name="more-horizontal" size={30} color="black" />
                  <Text style={styles.categoryText}>More</Text>
                </NeomorphBox>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity>
                <NeomorphBox style={styles.box1} swapShadowLevel>
                  <Text style={styles.categoryText1}>Category</Text>
                </NeomorphBox>
              </TouchableOpacity>
              <View>
                <Text style={styles.categoryText2}>Khamgaon</Text>
              </View>
            </View>
            <View style={styles.card}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text style={styles.businessName}>Didwaniya Super Bazar</Text>
                  <Text style={styles.businessCategory}>Grocery</Text>
                  <View style={styles.verifiedContainer}>
                    <MaterialIcons name="verified" size={20} color="green" />
                    <Text style={styles.verifiedText}>Verified</Text>
                  </View>
                  <TouchableOpacity style={styles.offerButton}>
                    <Text style={styles.offerText}>
                      Offer(s) available today
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    width: 80,
                    height: 80,
                    backgroundColor: 'grey',
                    borderWidth: 1,
                  }}></View>
              </View>

              <Text style={styles.address}>
                Main Market, Near SBI Main Branch, 444303
              </Text>
              <View style={styles.iconsContainer}>
                <TouchableOpacity>
                  <NeomorphBox
                    style={{
                      shadowRadius: 3,
                      backgroundColor: '#E9E8E9',
                      borderRadius: 100,
                      width: 40,
                      height: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <MaterialIcons
                      name="share"
                      size={30}
                      style={{color: 'yellow'}}
                    />
                  </NeomorphBox>
                </TouchableOpacity>
                <TouchableOpacity>
                  <NeomorphBox
                    style={{
                      shadowRadius: 3,
                      borderRadius: 100,
                      backgroundColor: '#E9E8E9',
                      width: 40,
                      height: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <MaterialIcons
                      name="star-border"
                      size={30}
                      style={{color: 'blue'}}
                    />
                  </NeomorphBox>
                </TouchableOpacity>
                <TouchableOpacity>
                  <NeomorphBox
                    style={{
                      shadowRadius: 3,
                      borderRadius: 100,
                      backgroundColor: '#E9E8E9',
                      width: 40,
                      height: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <MaterialIcons
                      name="call"
                      size={30}
                      style={{color: 'green'}}
                    />
                  </NeomorphBox>
                </TouchableOpacity>
                <TouchableOpacity>
                  <NeomorphBox
                    style={{
                      shadowRadius: 3,
                      borderRadius: 100,
                      backgroundColor: '#E9E8E9',
                      width: 40,
                      height: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Ionicons
                      name="location-outline"
                      size={30}
                      style={{color: 'red'}}
                    />
                  </NeomorphBox>
                </TouchableOpacity>
                <TouchableOpacity>
                  <NeomorphBox
                    style={{
                      shadowRadius: 3,
                      borderRadius: 100,
                      backgroundColor: '#E5E4E2',
                      width: 40,
                      height: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Ionicons
                      name="heart-outline"
                      size={30}
                      style={{color: 'orange'}}
                    />
                  </NeomorphBox>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>

      <View style={styles.bottomNavigation}>
        <TouchableOpacity>
          <NeomorphBox style={styles.box12}>
            <MaterialIcons name="local-offer" size={30} color="white" />
            <Text style={styles.categoryText12}>Offer</Text>
          </NeomorphBox>
        </TouchableOpacity>
        <TouchableOpacity>
          <NeomorphBox style={styles.box12}>
            <MaterialIcons
              name="store-mall-directory"
              size={30}
              color="white"
            />
            <Text style={styles.categoryText12}>Directory</Text>
          </NeomorphBox>
        </TouchableOpacity>
        <TouchableOpacity>
          <NeomorphBox style={styles.box12}>
            <MaterialIcons name="home" size={30} color="white" />
            <Text style={styles.categoryText12}>Home</Text>
          </NeomorphBox>
        </TouchableOpacity>
        <TouchableOpacity>
          <NeomorphBox style={styles.box12}>
            <MaterialIcons name="people-alt" size={30} color="white" />
            <Text style={styles.categoryText12}>Member</Text>
          </NeomorphBox>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#04bfd4ff',
  },
  container: {
    flex: 1,
    backgroundColor: '#E9E8E9',
    borderRadius: 30,
    padding: 10,
    // paddingTop:-10
  },
  container2: {
    flex: 1,
    backgroundColor: '#b3edff',
    borderRadius: 30,
    paddingTop: 5,
  },
  scrollView: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    gap:13
  },
  box: {
    width: 80,
    height: 80,
    borderRadius: 10,
    // backgroundColor: '#f5f5f0',
    justifyContent: 'center',
    alignItems: 'center',
    // shadowRadius: 5,
    // shadowOffset: {width: -5, height: -5},
    shadowRadius: 3,
    backgroundColor: '#E9E8E9',
  

  },
  box1: {
    width: 190,
    height: 30,
    borderRadius: 10,
    backgroundColor: '#E9E8E9',
    color: 'black',
    // justifyContent: 'center',
    // alignItems: 'center',
    shadowRadius: 5,
    shadowOffset: {width: -5, height: -5},
    marginLeft: -20,
  },
  box12: {
    width: 70,
    height: 50,
    borderRadius: 10,

    backgroundColor: '#00C8E0',
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 3,
    // shadowOffset: {width: -5, height: -5},
  },
  categoryText: {
    marginTop: 5,
    textAlign: 'center',
    color: '#606060',
    fontWeight: 'bold',
  },
  categoryText1: {
    marginTop: 5,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  categoryText2: {
    marginTop: 5,
    textAlign: 'center',
    color: '#12F2EC',
    fontWeight: 'bold',
    fontSize: 18,
  },
  categoryText12: {
    textAlign: 'center',
    color: 'white',
  },
  card: {
    backgroundColor: '#E9E8E9',
    borderRadius: 10,
    padding: 20,
    // margin: 10,
    shadowRadius: 5,
    shadowOpacity: 0.2,
    // shadowOffset: {width: 0, height: 2},
    elevation: 5,
  },
  businessName: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'#606060'
  },
  businessCategory: {
    fontSize: 14,
    color: 'grey',
  },
  verifiedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  verifiedText: {
    marginLeft: 5,
    color: 'green',
    fontWeight: 'bold',
  },
  offerButton: {
    // backgroundColor: '#f0c14b',
    width: 190,
    // padding: 10,
    borderRadius: 5,
    // marginVertical: 5,
    borderWidth: 1,
    borderColor: 'green',
    fontWeight: 'bold',
  },
  offerText: {
    textAlign: 'center',
    color: 'green',
    marginRight: 35,
  },
  address: {
    fontSize: 12,
    color: 'grey',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#04bfd4ff',
    paddingVertical: 10,
    // borderTopWidth: 1,
    borderColor: '#00C8E0',
  },
});

export default Feature;
