import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/MaterialIcons';



const App = ({ navigation }) => {
  const navigateToHome = () => {
    navigation.navigate('Main'); // Navigate to 'Home' screen
  };

  const navigateToMatches = () => {
    navigation.navigate('Matches'); // Navigate to 'Matches' screen
  };

  const navigateToVideo = () => {
    navigation.navigate('Video'); // Navigate to 'Video' screen
  };

  const navigateToNews = () => {
    navigation.navigate('News'); // Navigate to 'News' screen
  };

  const navigateToMore = () => {
    navigation.navigate('More'); // Navigate to 'More' screen
  };
  return (
    <>
      <View style={styles.container}>

        {/* Featured and cricbuzz section */}
        <TouchableOpacity style={styles.container1}>
          <View style={styles.row}>
            <View style={styles.featuredContainer}>
              <Text style={styles.leftText}>Featured</Text>
              <View style={styles.underline} />
            </View>
            <Text style={styles.rightText}>cricbuzz</Text>
          </View>
        </TouchableOpacity>
        <ScrollView>
          {/* Horizontal scrollable section */}
          <View style={styles.container2}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>

              {/* Replace image paths with actual paths */}
              <View style={styles.item}>
                <Text style={styles.text}>3rd T20I Pakistan tour of England 2024</Text>
                <View style={styles.imageContainer}>

                  <Text style={styles.imageText}><Image source={require('../../assets/image/123.png')} style={styles.image} />Image 2 Text</Text>

                  <Text style={styles.imageText}> <Image source={require('../../assets/image/123.png')} style={styles.image} />Image 2 Text</Text>
                </View>
                <Text style={styles.today}>Today 11 pm</Text>
                <View>
                  <Text style={styles.today1}>Today 11 pm</Text>

                </View>
              </View>
              <View style={styles.item}>
                <Text style={styles.text}>3rd T20I Pakistan tour of England 2024</Text>
                <View style={styles.imageContainer}>
                  <Text style={styles.imageText}><Image source={require('../../assets/image/123.png')} style={styles.image} />Image 2 Text</Text>

                  <Text style={styles.imageText}> <Image source={require('../../assets/image/123.png')} style={styles.image} />Image 2 Text</Text>
                </View>
                <Text style={styles.today}>Today 11 pm</Text>
                <View>
                  <Text style={styles.today1}>Today 11 pm</Text>

                </View>
              </View>
              <View style={styles.item}>
                <Text style={styles.text}>3rd T20I Pakistan tour of England 2024</Text>
                <View style={styles.imageContainer}>
                  <Text style={styles.imageText}><Image source={require('../../assets/image/123.png')} style={styles.image} />Image 2 Text</Text>

                  <Text style={styles.imageText}> <Image source={require('../../assets/image/123.png')} style={styles.image} />Image 2 Text</Text>
                </View>
                <Text style={styles.today}>Today 11 pm</Text>
                <View>
                  <Text style={styles.today1}>Today 11 pm</Text>

                </View>
              </View>
              <View style={styles.item}>
                <Text style={styles.text}>3rd T20I Pakistan tour of England 2024</Text>
                <View style={styles.imageContainer}>
                  <Text style={styles.imageText}><Image source={require('../../assets/image/123.png')} style={styles.image} />Image 2 Text</Text>

                  <Text style={styles.imageText}> <Image source={require('../../assets/image/123.png')} style={styles.image} />Image 2 Text</Text>
                </View>
                <Text style={styles.today}>Today 11 pm</Text>
                <View>
                  <Text style={styles.today1}>Today 11 pm</Text>

                </View>
              </View>
              <View style={styles.item}>
                <Text style={styles.text}>3rd T20I Pakistan tour of England 2024</Text>
                <View style={styles.imageContainer}>
                  <Text style={styles.imageText}><Image source={require('../../assets/image/123.png')} style={styles.image} />Image 2 Text</Text>

                  <Text style={styles.imageText}> <Image source={require('../../assets/image/123.png')} style={styles.image} />Image 2 Text</Text>
                  <Text style={styles.today}>Today 11 pm</Text>
                </View>
                <View>
                  <Text style={styles.today1}>Today 11 pm</Text>

                </View>

              </View>
            </ScrollView>

          </View>
          <View style={styles.container5}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <TouchableOpacity>

                <View style={styles.item2}>
                  <Text style={styles.text5}>3rd T20I</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>

                <View style={styles.item2}>
                  <Text style={styles.text5}>3rd T20I Pakistan tour of England 2024</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>

                <View style={styles.item2}>
                  <Text style={styles.text5}>3rd T20I Pakistan tour of England 2024</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>

                <View style={styles.item2}>
                  <Text style={styles.text5}>3rd T20I Pakistan tour of England 2024</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>

          </View>
          <Text style={styles.featuredText}>Featured Videos</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.videoContainer}>

              <View style={styles.videoWrapper}>
                <Video
                  source={require('../../assets/image/rnt.mp4')}
                  style={styles.video}
                  resizeMode="contain"
                  onError={(error) => console.error('Video error:', error)}
                  controls={true}
                />
              </View>

              <View style={styles.videoWrapper}>
                <Video
                  source={require('../../assets/image/rnt.mp4')}
                  style={styles.video}
                  resizeMode="contain"
                  onError={(error) => console.error('Video error:', error)}
                  controls={true}
                />
              </View>

              <View style={styles.videoWrapper}>
                <Video
                  source={require('../../assets/image/rnt.mp4')}
                  style={styles.video}
                  resizeMode="contain"
                  onError={(error) => console.error('Video error:', error)}
                  controls={true}
                />
              </View>

              <View style={styles.videoWrapper}>
                <Video
                  source={require('../../assets/image/rnt.mp4')}
                  style={styles.video}
                  resizeMode="contain"
                  onError={(error) => console.error('Video error:', error)}
                  controls={true}
                />
              </View>

              {/* Add more Video components as needed */}
            </View>
          </ScrollView>
          <Text style={styles.sectionTitle}>Top Stories</Text>

          <View style={styles.container11}>
            <View style={styles.section}>

              <View style={styles.imageContainer}>
                <Image
                  source={require('../../assets/image/images.jpeg')}
                  style={styles.image11}
                />
              </View>

              <View style={styles.contentContainer}>
                <Text style={styles.contentText11}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet metus vitae
                  quam iaculis pulvinar.
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>

      </View>
      <View style={styles.row12}>
        <TouchableOpacity style={styles.box12} onPress={navigateToHome}>
          <Icon name="masks" size={30} color="black" />
          <Text style={styles.categoryText12}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box12} onPress={navigateToMatches}>
          <Icon name="masks" size={30} color="black" />
          <Text style={styles.categoryText12}>Matches</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box12} onPress={navigateToVideo}>
          <Icon name="masks" size={30} color="black" />
          <Text style={styles.categoryText12}>Video</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box12} onPress={navigateToNews}>
          <Icon name="masks" size={30} color="black" />
          <Text style={styles.categoryText12}>News</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box12} onPress={navigateToMore}>
          <Icon name="masks" size={30} color="black" />
          <Text style={styles.categoryText12}>More</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  container1: {
    backgroundColor: '#00e600',
    width: '100%',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',  
    paddingHorizontal: 20,
  },
  leftText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    marginLeft: 50
  },
  rightText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginRight: 50,
    margin: 'auto', // Pushes text to the right
    color: 'white',
  },
  underline: {
    borderBottomWidth: 5,
    borderBottomColor: 'white',
    width: 170,
  },
  container2: {
    flexDirection: 'row',  // Ensure items are displayed horizontally
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: 230,
  },
  item: {
    marginRight: 15,  // Add margin between items
    borderWidth: 1,   // Example border style
    borderColor: '#ccc', // Example border color
    borderRadius: 8,  // Example border radius
    // Example padding
    backgroundColor: 'white'

  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10
  },
  imageContainer: {
    marginTop: -10,
    flexDirection: 'column',  // Images displayed in a row
    justifyContent: 'space-between',  // Space between images
  },
  image: {
    width: 40,
    height: 40,


  },

  imageText: {
    flexDirection: 'row',
    fontSize: 14,
    marginLeft: 10,        // Space between image and text
  },
  today: {
    paddingLeft: 14,
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  today1: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Example background color for visibility
    padding: 10,
    marginBottom: -43,
    width: '100%'
  },
  container5: {
    flexDirection: 'row',  // Arrange items horizontally
    padding: 10,
    height: 60,
  },
  item2: {
    marginRight: 15,        // Space between items
    borderWidth: 1,         // Example border style
    borderColor: '#ccc',    // Example border color
    borderRadius: 8,        // Example border radius
    padding: 10,            // Example padding
  },
  text5: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'black'
  },
  videoContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  featuredText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    marginLeft: 13
  },
  videoWrapper: {
    marginRight: 10,
  },
  video: {
    width: 300,
    height: 200,
  },
  row12: {
    width: '100%',
    height: 70,
    bottom: 0,
    paddingHorizontal: 20, // Add padding to the container
    alignItems: 'center', // Align items vertically
    justifyContent: 'space-between', // Space items evenly along the main axis (vertically)
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  box12: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5, // Adjusted for the gap between boxes
    backgroundColor: 'white', // Box color
    borderRadius: 10,
    // Shadow for iOS

  },
  categoryText12: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 10,
    paddingBottom: 10
  },
  container11: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  section: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    marginLeft: 13
  },
  imageContainer1: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  image11: {
    width: 370,
    height: 200,
    borderRadius: 8,
  },
  contentContainer: {
    width: '100%',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  contentText11: {
    fontSize: 17,
    lineHeight: 24,
    color: 'black',

  },

});

export default App;
