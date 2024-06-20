// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const Matches = ({ navigation }) => {
//     const [selectedTab, setSelectedTab] = useState('Live'); // State to track selected tab
//     const [selectedItem, setSelectedItem] = useState(null);


//     const handleTabPress = (tabName) => {
//         setSelectedTab(tabName);
//     };

//     const handleItemPress = (index) => {
//         setSelectedItem(index); // Set selected item index when item is pressed
//     };


//     const handlePress = () => {
//         navigation.navigate('Main'); // Navigate to 'Main' screen
//     };
//     const handlePres = () => {
//         navigation.navigate('History'); // Navigate to 'History' screen
//       };
//     return (
//         <View style={styles.container}>
//             <View style={styles.container1}>
//                 <Text style={styles.text55}>Current Matches</Text>
//             </View>

//             <View style={styles.tabRow}>
//                 <TouchableOpacity
//                     style={[styles.tabItem, selectedTab === 'Live' && styles.selectedTab]}
//                     onPress={() => handleTabPress('Live')}
//                 >
//                     <Text style={styles.tabText}>Live</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                     style={[styles.tabItem, selectedTab === 'Upcoming' && styles.selectedTab]}
//                     onPress={() => handleTabPress('Upcoming')}
//                 >
//                     <Text style={styles.tabText}>Upcoming</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                     style={[styles.tabItem, selectedTab === 'Recent' && styles.selectedTab]}
//                     onPress={() => handleTabPress('Recent')}
//                 >
//                     <Text style={styles.tabText}>Recent</Text>
//                 </TouchableOpacity>
//             </View>


//             <View style={styles.container5}>
//                 <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//                     {[...Array(1).keys()].map((index) => (
//                         <TouchableOpacity key={index} onPress={() => handleItemPress(index)}>
//                             <View style={[styles.item2, index === selectedItem && styles.selectedItem]}>
//                                 <Text style={[styles.text5, index === selectedItem && { color: 'blue' }]}>
//                                     ALL
//                                 </Text>
//                             </View>
//                         </TouchableOpacity>

//                     ))}
//                     {[...Array(1).keys()].map((index) => (
//                         <TouchableOpacity key={index} onPress={() => handleItemPress(index)}>
//                             <View style={[styles.item2, index === selectedItem && styles.selectedItem]}>
//                                 <Text style={[styles.text5, index === selectedItem && { color: 'blue' }]}>
//                                     International
//                                 </Text>
//                             </View>
//                         </TouchableOpacity>

//                     ))}
//                     {[...Array(1).keys()].map((index) => (
//                         <TouchableOpacity key={index} onPress={() => handleItemPress(index)}>
//                             <View style={[styles.item2, index === selectedItem && styles.selectedItem]}>
//                                 <Text style={[styles.text5, index === selectedItem && { color: 'blue' }]}>
//                                     League
//                                 </Text>
//                             </View>
//                         </TouchableOpacity>

//                     ))}
//                     {[...Array(4).keys()].map((index) => (
//                         <TouchableOpacity key={index} onPress={() => handleItemPress(index)}>
//                             <View style={[styles.item2, index === selectedItem && styles.selectedItem]}>
//                                 <Text style={[styles.text5, index === selectedItem && { color: 'blue' }]}>
//                                     Domestic
//                                 </Text>
//                             </View>
//                         </TouchableOpacity>

//                     ))}

//                 </ScrollView>
//             </View>
//             <Text style={styles.sectionTitle}>Top Stories</Text>
//             <View style={[styles.sectionTitle2, { backgroundColor: '#66ffcc', height: 40, padding: 10, marginTop: 10 }]}>
//                 <Text style={styles.sectionTitle1}>ICC MANS T20I WORLD CUP WARM-UP MATCHES</Text>
//             </View>
//             <TouchableOpacity onPress={handlePres}>

//                 <View style={styles.container2}>
//                     <View style={styles.item}>
//                         <Text style={styles.text}>3rd T20I Pakistan tour of England 2024</Text>
//                         <View style={styles.imageContainer}>
//                             <Text style={styles.imageText}><Image source={require('../../assets/image/123.png')} style={styles.image} />Image 2 Text</Text>

//                             <Text style={styles.imageText}> <Image source={require('../../assets/image/123.png')} style={styles.image} />Image 2 Text</Text>
//                         </View>
//                         <Text style={styles.today}>India Won By & Wicket</Text>

//                     </View>
//                 </View>
//             </TouchableOpacity>


//             <View style={styles.contentContainer}>

//             </View>


//             {/* Bottom navigation */}
//             <View style={styles.bottomContainer}>
//                 <TouchableOpacity style={styles.box12} onPress={handlePress}>
//                     <Icon name="masks" size={30} color="black" />
//                     <Text style={styles.categoryText12}>Home</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.box12}>
//                     <Icon name="masks" size={30} color="black" />
//                     <Text style={styles.categoryText12}>Matches</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.box12}>
//                     <Icon name="masks" size={30} color="black" />
//                     <Text style={styles.categoryText12}>Video</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.box12}>
//                     <Icon name="masks" size={30} color="black" />
//                     <Text style={styles.categoryText12}>News</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.box12}>
//                     <Icon name="masks" size={30} color="black" />
//                     <Text style={styles.categoryText12}>More</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     container1: {
//         backgroundColor: '#00e600'
//     },
//     text55: {
//         fontSize: 26,
//         fontWeight: 'bold',
//         color: 'white',
//         padding: 20,
//     },
//     contentContainer: {
//         flex: 1,
//         paddingHorizontal: 20,
//         paddingBottom: 70, // Adjusted to accommodate bottom navigation height
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
//     tabRow: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         // borderBottomWidth: 1,
//         borderBottomColor: '#ccc',
//         backgroundColor: '#00e600'
//     },
//     tabItem: {
//         paddingVertical: 10,
//         paddingHorizontal: 20,
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
//     container5: {
//         flexDirection: 'row',  // Arrange items horizontally
//         padding: 10,
//         height: 60,

//     },
//     item2: {
//         marginRight: 15,        // Space between items
//         borderWidth: 1,         // Example border style
//         borderColor: '#ccc',    // Example border color
//         borderRadius: 8,        // Example border radius
//         padding: 8,
//         backgroundColor: 'white'           // Example padding
//     },
//     text5: {
//         fontSize: 15,
//         fontWeight: 'bold',
//         color: 'black'
//     },
//     selectedItem: {
//         borderColor: 'blue', // Border color for selected item
//     },
//     sectionTitle: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         marginBottom: 10,
//         color: 'black',
//         marginLeft: 13
//     },
//     text: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         padding: 10
//     },
//     imageContainer: {
//         marginTop: -10,
//         flexDirection: 'column',  // Images displayed in a row
//         justifyContent: 'space-between',  // Space between images
//     },
//     image: {
//         width: 40,
//         height: 40,


//     },

//     imageText: {
//         flexDirection: 'row',
//         fontSize: 14,
//         marginLeft: 10,        // Space between image and text
//     },
//     today: {
//         paddingLeft: 6,
//         margin: 19,
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
//     container2: {
//         flexDirection: 'row',  // Ensure items are displayed horizontally
//         paddingHorizontal: 10,
//         paddingVertical: 10,
//         height: 200,
//         backgroundColor: 'white',
//         marginTop: 20
//     },

// });

// export default Matches;


import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DisplayFormData = ({ route }) => {
  const { formData } = route.params;

  // Function to format date to string
  const formatDate = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "#04bfd4ff" }}>

        <ScrollView style={styles.container}>
          <Text style={styles.title}>Didwaniya Bajar</Text>
          <Text style={styles.textStyle}>Business Name: {formData.businessName}</Text>
          {formData.logo && <Image source={formData.logo} style={styles.image} />}
          <Text style={styles.textStyle}>Mobile: {formData.mobile}</Text>
          <Text style={styles.textStyle}>Email: {formData.email}</Text>
          <Text style={styles.textStyle}>Contact Person: {formData.contactPerson}</Text>
          <Text style={styles.textStyle}>Website: {formData.website}</Text>
          <Text style={styles.textStyle}>WhatsApp: {formData.whatsapp}</Text>
          <Text style={styles.textStyle}>State: {formData.state}</Text>
          <Text style={styles.textStyle}>District: {formData.district}</Text>
          <Text style={styles.textStyle}>Taluka: {formData.taluka}</Text>
          <Text style={styles.textStyle}>Address: {formData.address}</Text>
          <Text style={styles.textStyle}>Pincode: {formData.pincode}</Text>
          <Text style={styles.textStyle}>Google Map Link: {formData.googleMapLink}</Text>
          <Text style={styles.textStyle}>Opening Time: {formData.openingTime && formatDate(formData.openingTime)}</Text>
          <Text style={styles.textStyle}>Closing Time: {formData.closingTime && formatDate(formData.closingTime)}</Text>
          <Text style={styles.textStyle}>Level 1 Category: {formData.level1Category}</Text>
          <Text style={styles.textStyle}>Level 2 Category: {formData.level2Category}</Text>
          {formData.primaryImage && <Image source={formData.primaryImage} style={styles.image} />}
          {formData.secondaryImages.length > 0 && formData.secondaryImages.map((img, index) => (
            <Image key={index} source={img} style={styles.image} />
          ))}
          <View style={styles.imageContainer}>
            {/* <Image source={require('./placeholder-image.png')} style={styles.image} /> */}
          </View>
          <View style={styles.imageContainer1}>
            <View style={styles.imageContainer2}>
              {/* <Image source={require('./placeholder-image.png')} style={styles.image} /> */}
            </View>
            <View style={styles.imageContainer2}>
              {/* <Image source={require('./placeholder-image.png')} style={styles.image} /> */}
            </View>
          </View>

        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius:30,
    marginBottom:20,
    color:'black'
  },
  imageContainer: {
    height: 200,
    marginTop: 16,
    backgroundColor: 'lightgray',
    borderRadius: 10,
  },
  imageContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer2: {
    flex: 1,
    marginHorizontal: 2.5, // Creates a 5px gap between the two boxes
    height: 150, // Adjust the height as needed
    backgroundColor: 'lightgray',
    marginTop: 10,
    borderRadius: 10,
    marginBottom:50
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'black'
  },
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'black'
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginVertical: 5,
  },
});

export default DisplayFormData;
