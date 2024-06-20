import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import RNPickerSelect from 'react-native-picker-select';
import {useNavigation} from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {NeomorphBox} from 'react-native-neomorph-shadows';
import {SvgXml} from 'react-native-svg';
import {Appearance} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AddBusinessForm = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    businessName: '',
    logo: null,
    mobile: '',
    email: '',
    contactPerson: '',
    website: '',
    whatsapp: '',
    state: '',
    district: '',
    taluka: '',
    address: '',
    pincode: '',
    googleMapLink: '',
    openingTime: new Date(),
    closingTime: new Date(),
    level1Category: '',
    level2Category: '',
    primaryImage: null,
    secondaryImages: [],
  });

  const [showOpeningTimePicker, setShowOpeningTimePicker] = useState(false);
  const [showClosingTimePicker, setShowClosingTimePicker] = useState(false);

  const handleImagePick = field => {
    launchImageLibrary({}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const source = {uri: response.assets[0].uri};
        if (field === 'secondaryImages') {
          setForm(prevForm => ({
            ...prevForm,
            secondaryImages: [...prevForm.secondaryImages, source],
          }));
        } else {
          setForm({...form, [field]: source});
        }
      }
    });
  };

  const handleTimeChange = (event, selectedTime, field) => {
    const currentTime = selectedTime || form[field];
    if (field === 'openingTime') {
      setShowOpeningTimePicker(false);
    } else if (field === 'closingTime') {
      setShowClosingTimePicker(false);
    }
    setForm({...form, [field]: currentTime});
  };

  const handleSubmit = () => {
    console.log('Form Data:', form);
    navigation.navigate('BusinessDetail', {formData: form});
  };

  const colorScheme = Appearance.getColorScheme();
  const placeholderTextColor = colorScheme === 'dark' ? '#606060' : '#606060';

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#04bfd4ff'}}>
      <View style={styles.container2}>
        <ScrollView style={styles.container}>
          <NeomorphBox inner style={styles.neomorphshadow}>
            <TextInput
              style={styles.input}
              placeholder="Name of business"
              value={form.businessName}
              onChangeText={text => setForm({...form, businessName: text})}
              placeholderTextColor={placeholderTextColor}
            />
          </NeomorphBox>
          <View style={styles.rowContainer}>
            <View>
              <Text
                style={{
                  color: '#606060',
                  fontSize: 16,
                  fontWeight: 'bold',
                  width: 150,
                }}>
                Upload your Profile image size 200/200
              </Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => handleImagePick('logo')}
                style={styles.imagePicker}>
                <Text
                  style={{
                    color: '#606060',
                    height: 50,
                    width: 80,
                    fontSize: 15,
                    fontWeight: 'bold',
                    padding: 13,
                  }}>
                  Select logo{' '}
                </Text>
              </TouchableOpacity>
            </View>
            {form.logo && <Image source={form.logo} style={styles.image} />}
          </View>
          <NeomorphBox inner style={styles.neomorphshadow}>
            <TextInput
              style={styles.input}
              placeholder="Mobile"
              value={form.mobile}
              onChangeText={text => setForm({...form, mobile: text})}
              placeholderTextColor={placeholderTextColor}
            />
          </NeomorphBox>
          <NeomorphBox inner style={styles.neomorphshadow}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={form.email}
              onChangeText={text => setForm({...form, email: text})}
              placeholderTextColor={placeholderTextColor}
            />
          </NeomorphBox>
          <NeomorphBox inner style={styles.neomorphshadow}>
            <TextInput
              style={styles.input}
              placeholder="Contact person"
              value={form.contactPerson}
              onChangeText={text => setForm({...form, contactPerson: text})}
              placeholderTextColor={placeholderTextColor}
            />
          </NeomorphBox>
          <NeomorphBox inner style={styles.neomorphshadow}>
            <TextInput
              style={styles.input}
              placeholder="Website URL (optional)"
              value={form.website}
              onChangeText={text => setForm({...form, website: text})}
              placeholderTextColor={placeholderTextColor}
            />
          </NeomorphBox>
          <NeomorphBox inner style={styles.neomorphshadow}>
            <TextInput
              style={styles.input}
              placeholder="WhatsApp number (optional)"
              value={form.whatsapp}
              onChangeText={text => setForm({...form, whatsapp: text})}
              placeholderTextColor={placeholderTextColor}
            />
          </NeomorphBox>
          <View style={styles.statem}>
            <RNPickerSelect
              onValueChange={value => setForm({...form, state: value})}
              items={[{label: 'Madhya Pradesh', value: 'Madhya Pradesh'}]}
              style={pickerSelectStyles}
              placeholder={{label: 'Select State', value: null}}
              placeholderTextColor={placeholderTextColor}
              Icon={() => (
                <Icon
                  name="arrow-drop-down"
                  size={24}
                  color="black"
                  marginHorizontal={14}
                  marginVertical={20}
                />
              )}
            />
          </View>
          <View style={styles.statem}>
            <RNPickerSelect
              onValueChange={value => setForm({...form, district: value})}
              items={[
                {label: 'Agar-Malva', value: 'Agar-Malva'},
                {label: 'Alirajpur', value: 'Alirajpur'},
                {label: 'Ashoknagar', value: 'Ashoknagar'},
                {label: 'Balaghat', value: 'Balaghat'},
                {label: 'Barwani', value: 'Barwani'},
              ]}
              style={pickerSelectStyles}
              placeholder={{label: 'Select District', value: null}}
              Icon={() => (
                <Icon
                  name="arrow-drop-down"
                  size={24}
                  color="black"
                  marginHorizontal={14}
                  marginVertical={20}
                />
              )} // Custom icon with black color
              placeholderTextColor={placeholderTextColor}
            />
          </View>
          <View style={styles.statem}>
            <RNPickerSelect
              onValueChange={value => setForm({...form, taluka: value})}
              items={[
                {label: 'Agar', value: 'Agar'},
                {label: 'Badod', value: 'Badod'},
                {label: 'Sunser', value: 'Sunser'},
                {label: 'Jobat', value: 'Jobat'},
                {label: 'Kotma', value: 'Kotma'},
              ]}
              style={pickerSelectStyles}
              placeholder={{label: 'Select Taluka', value: null}}
              Icon={() => (
                <Icon
                  name="arrow-drop-down"
                  size={24}
                  color="black"
                  marginHorizontal={14}
                  marginVertical={20}
                />
              )}
            />
          </View>
          <NeomorphBox inner style={styles.neomorphshadow1}>
            <TextInput
              style={styles.inputRegister}
              placeholder="Registered address"
              value={form.address}
              onChangeText={text => setForm({...form, address: text})}
              placeholderTextColor={placeholderTextColor}
            />
          </NeomorphBox>
          <NeomorphBox inner style={styles.neomorphshadow}>
            <TextInput
              style={styles.input}
              placeholder="PIN code"
              value={form.pincode}
              onChangeText={text => setForm({...form, pincode: text})}
              placeholderTextColor={placeholderTextColor}
            />
          </NeomorphBox>
          <NeomorphBox inner style={styles.neomorphshadow}>
            <TextInput
              style={styles.input}
              placeholder="Google Map link"
              value={form.googleMapLink}
              onChangeText={text => setForm({...form, googleMapLink: text})}
              placeholderTextColor={placeholderTextColor}
            />
          </NeomorphBox>
          <View style={styles.upload}>
            <View>
              <TouchableOpacity
                onPress={() => setShowOpeningTimePicker(true)}
                style={styles.timePicker}>
                <Text style={styles.time}>
                  Opening Time {/* {form.openingTime.toLocaleTimeString()} */}
                </Text>
              </TouchableOpacity>

              {showOpeningTimePicker && (
                <DateTimePicker
                  value={form.openingTime}
                  mode="time"
                  display="default"
                  onChange={(event, selectedTime) =>
                    handleTimeChange(event, selectedTime, 'openingTime')
                  }
                />
              )}
            </View>
            <View>
              <TouchableOpacity
                onPress={() => setShowClosingTimePicker(true)}
                style={styles.timePicker}>
                <Text style={styles.time}>
                  Closing Time {/*{form.closingTime.toLocaleTimeString()} */}
                </Text>
              </TouchableOpacity>
              {showClosingTimePicker && (
                <DateTimePicker
                  value={form.closingTime}
                  mode="time"
                  display="default"
                  onChange={(event, selectedTime) =>
                    handleTimeChange(event, selectedTime, 'closingTime')
                  }
                />
              )}
            </View>
          </View>
          <View style={styles.statem}>
            <RNPickerSelect
              onValueChange={value => setForm({...form, level1Category: value})}
              items={[
                {label: 'Category 1', value: 'category1'},
                {label: 'Category 2', value: 'category2'},
              ]}
              style={pickerSelectStyles}
              placeholder={{label: 'Select Level 1 Category', value: null}}
              Icon={() => (
                <Icon
                  name="arrow-drop-down"
                  size={24}
                  color="black"
                  marginHorizontal={14}
                  marginVertical={20}
                />
              )}
            />
          </View>
          <View style={styles.statem}>
            <RNPickerSelect
              onValueChange={value => setForm({...form, level2Category: value})}
              items={[
                {label: 'Category 1', value: 'category1'},
                {label: 'Category 2', value: 'category2'},
              ]}
              style={pickerSelectStyles}
              placeholder={{label: 'Select Level 2 Category', value: null}}
              Icon={() => (
                <Icon
                  name="arrow-drop-down"
                  size={24}
                  color="black"
                  marginHorizontal={14}
                  marginVertical={20}
                />
              )}
            />
          </View>

          <View style={styles.rowContainer}>
            <View>
              <Text
                style={{
                  color: '#606060',
                  fontSize: 16,
                  fontWeight: 'bold',
                  width: 200,
                }}>
                Select your primary image
              </Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => handleImagePick('primaryImage')}
                style={styles.imagePicker}>
                <Text
                  style={{
                    color: '#606060',
                    height: 50,
                    width: 80,
                    fontSize: 15,
                    fontWeight: 'bold',
                    padding: 13,
                  }}>
                  {' '}
                  image
                </Text>
              </TouchableOpacity>
            </View>
            {form.primaryImage && (
              <Image source={form.primaryImage} style={styles.image} />
            )}
          </View>
          <View style={styles.rowContainer}>
            <View>
              <Text
                style={{
                  color: '#606060',
                  fontSize: 16,
                  fontWeight: 'bold',
                  width: 200,
                }}>
                Select your secondary images
              </Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => handleImagePick('secondaryImages')}
                style={styles.imagePicker}>
                <Text
                  style={{
                    color: '#606060',
                    height: 50,
                    width: 80,
                    fontSize: 15,
                    fontWeight: 'bold',
                    padding: 13,
                  }}>
                  {' '}
                  images
                </Text>
              </TouchableOpacity>
            </View>
            {form.secondaryImages.length > 0 &&
              form.secondaryImages.map((img, index) => (
                <Image key={index} source={img} style={styles.image} />
              ))}
          </View>

          <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: '#E9E8E9',
    borderRadius: 20,
  },
  container2: {
    flex: 1,
    backgroundColor: '#b3edff',
    borderRadius: 20,
    paddingTop: 5,
    // paddingBottom:0
    marginBottom: 40,
  },
  input: {
    // borderWidth: 1,
    // borderColor: '#ccc',
    // padding: 10,
    fontWeight: 'bold',
    fontSize: 14,
    paddingLeft: 20,
    // shadowRadius:2,
    // color: '#606060',
    marginVertical: 5,
    color: '#606060',
  },
  inputRegister: {
    fontWeight: 'bold',
    fontSize: 14,
    // paddingLeft: 20,
    // shadowRadius:2,
    paddingLeft: 20,
    marginVertical: 5,
  },
  neomorphshadow: {
    shadowRadius: 3,
    shadowOpacity: 0.7, // Un-commented this line to apply opacity to the shadow
    shadowOffset: {width: 0, height: 4}, // Apply shadow on all sides
    shadowColor: '#E9E8E9',
    borderRadius: 9,
    // backgroundColor: '#E5E4E2', // Un-commented to apply background color
    width: 330,
    height: 55,
    justifyContent: 'center',
    marginVertical: 15,
  },
  neomorphshadow1: {
    shadowRadius: 3,
    shadowOpacity: 0.7, // Un-commented this line to apply opacity to the shadow
    shadowOffset: {width: 0, height: 4}, // Apply shadow on all sides
    shadowColor: '#E9E8E9',
    borderRadius: 9,
    // backgroundColor: '#606060', // Un-commented to apply background color
    width: 330,
    height: 100,
    justifyContent: 'center',
    marginVertical: 15,
  },
  upload: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  imagePicker: {
    marginVertical: 5,
    // padding: 5,
    // paddingBottom: 20,
    backgroundColor: '#ddd',
    alignItems: 'center',
    borderRadius: 5,
    // marginHorizontal: 20,
    backgroundColor: '#E9E8E9',
    elevation: 5,
  },
  image: {
    width: 200,
    height: 200,
    // marginVertical: 5,
  },
  rowContainer: {
    // flexDirection: 'row',
    alignItems: 'center',
    resizeMode: 'cover',
    // width:,
    // marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  timePicker: {
    marginVertical: 5,
  },
  time: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#606060',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
    paddingBottom: 20,
    marginBottom: 50,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  statem: {
    borderColor: '#E9E8E9',
    // padding: 10,
    marginVertical: 5,
    borderRadius: 9,
    backgroundColor: '#E9E8E9',
    elevation: 5,
    height: 55,
    width: 320,
    marginLeft: 5,
  },
  placeholder: {
    color: '#606060',
  },
});

const pickerSelectStyles = StyleSheet.create({
  //   inputIOS: {
  //     borderWidth: 1,
  //     borderColor: '#ccc',
  //     padding: 10,
  //     marginVertical: 5,
  //     borderRadius: 8,
  //     backgroundColor: '#fff',
  //   },
  inputAndroid: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
    borderRadius: 30,
    // backgroundColor: '#fff',
    color: '#606060',
  },
  placeholder: {
    color: '#606060',
  },
  viewContainer: {
    color: '#606060', // Set the dropdown text color to black
  },
});

export default AddBusinessForm;
