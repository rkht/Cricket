import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, ScrollView, Image, SafeAreaView } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';
// import DateTimePicker from '@react-native-community/datetimepicker';

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

  const handleImagePick = (field) => {
    launchImageLibrary({}, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const source = { uri: response.assets[0].uri };
        if (field === 'secondaryImages') {
          setForm((prevForm) => ({
            ...prevForm,
            secondaryImages: [...prevForm.secondaryImages, source],
          }));
        } else {
          setForm({ ...form, [field]: source });
        }
      }
    });
  };

  const handleTimeChange = (event, selectedTime, field) => {
    const currentTime = selectedTime || form[field];
    setShowOpeningTimePicker(false);
    setShowClosingTimePicker(false);
    setForm({ ...form, [field]: currentTime });
  };

  const handleSubmit = () => {
    console.log('Form Data:', form);
    navigation.navigate('BusinessDetail', { formData: form });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#12F2EC" }}>
      <ScrollView style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Name of business"
          value={form.businessName}
          onChangeText={(text) => setForm({ ...form, businessName: text })}
        />
        <View style={styles.rowContainer}>
          <Text style={styles.rowContainer1}>Upload your imagefdfggdgdyf</Text>
          <TouchableOpacity onPress={() => handleImagePick('logo')} style={styles.imagePicker}>
            <Text>Select logo image</Text>
          </TouchableOpacity>
          {form.logo && <Image source={form.logo} style={styles.image} />}
        </View>
        <TextInput
          style={styles.input}
          placeholder="Mobile"
          value={form.mobile}
          onChangeText={(text) => setForm({ ...form, mobile: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={form.email}
          onChangeText={(text) => setForm({ ...form, email: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Contact person"
          value={form.contactPerson}
          onChangeText={(text) => setForm({ ...form, contactPerson: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Website URL (optional)"
          value={form.website}
          onChangeText={(text) => setForm({ ...form, website: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="WhatsApp number (optional)"
          value={form.whatsapp}
          onChangeText={(text) => setForm({ ...form, whatsapp: text })}
        />
        <RNPickerSelect
          onValueChange={(value) => setForm({ ...form, state: value })}
          items={[
            { label: 'State 1', value: 'state1' },
            { label: 'State 2', value: 'state2' },
          ]}
          style={pickerSelectStyles}
          placeholder={{ label: "Select State", value: null }}
        />
        <RNPickerSelect
          onValueChange={(value) => setForm({ ...form, district: value })}
          items={[
            { label: 'District 1', value: 'district1' },
            { label: 'District 2', value: 'district2' },
          ]}
          style={pickerSelectStyles}
          placeholder={{ label: "Select District", value: null }}
        />
        <RNPickerSelect
          onValueChange={(value) => setForm({ ...form, taluka: value })}
          items={[
            { label: 'Taluka 1', value: 'taluka1' },
            { label: 'Taluka 2', value: 'taluka2' },
          ]}
          style={pickerSelectStyles}
          placeholder={{ label: "Select Taluka", value: null }}
        />
        <TextInput
          style={styles.input}
          placeholder="Registered address"
          value={form.address}
          onChangeText={(text) => setForm({ ...form, address: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="PIN code"
          value={form.pincode}
          onChangeText={(text) => setForm({ ...form, pincode: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Google Map link"
          value={form.googleMapLink}
          onChangeText={(text) => setForm({ ...form, googleMapLink: text })}
        />

        {/* <TouchableOpacity onPress={() => setShowOpeningTimePicker(true)} style={styles.timePicker}>
          <Text>Select Opening Time: {form.openingTime.toLocaleTimeString()}</Text>
        </TouchableOpacity>
        {showOpeningTimePicker && (
          <DateTimePicker
            value={form.openingTime}
            mode="time"
            display="default"
            onChange={(event, selectedTime) => handleTimeChange(event, selectedTime, 'openingTime')}
          />
        )}

        <TouchableOpacity onPress={() => setShowClosingTimePicker(true)} style={styles.timePicker}>
          <Text>Select Closing Time: {form.closingTime.toLocaleTimeString()}</Text>
        </TouchableOpacity>
        {showClosingTimePicker && (
          <DateTimePicker
            value={form.closingTime}
            mode="time"
            display="default"
            onChange={(event, selectedTime) => handleTimeChange(event, selectedTime, 'closingTime')}
          />
        )} */}

        {/* <RNPickerSelect
          onValueChange={(value) => setForm({ ...form, level1Category: value })}
          items={[
            { label: 'Category 1', value: 'category1' },
            { label: 'Category 2', value: 'category2' },
          ]}
          style={pickerSelectStyles}
          placeholder={{ label: "Select Level 1 Category", value: null }}
        />
        <RNPickerSelect
          onValueChange={(value) => setForm({ ...form, level2Category: value })}
          items={[
            { label: 'Category 1', value: 'category1' },
            { label: 'Category 2', value: 'category2' },
          ]}
          style={pickerSelectStyles}
          placeholder={{ label: "Select Level 2 Category", value: null }}
        /> */}

        <TouchableOpacity onPress={() => handleImagePick('primaryImage')} style={styles.imagePicker}>
          <Text>Select primary image</Text>
        </TouchableOpacity>
        {form.primaryImage && <Image source={form.primaryImage} style={styles.image} />}
        <TouchableOpacity onPress={() => handleImagePick('secondaryImages')} style={styles.imagePicker}>
          <Text>Select secondary images (max 2)</Text>
        </TouchableOpacity>
        {form.secondaryImages.length > 0 && form.secondaryImages.map((img, index) => (
          <Image key={index} source={img} style={styles.image} />
        ))}

        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
  imagePicker: {
    marginVertical: 5,
    padding: 15,
    paddingBottom: 20,
    backgroundColor: '#ddd',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 20,
    backgroundColor:'white',
    elevation:5
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginVertical: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10, // Add margin if needed
  },
  timePicker: {
    marginVertical: 5,
    padding: 15,
    paddingBottom: 20,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
    paddingBottom: 20
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
  inputAndroid: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
});

export default AddBusinessForm;

