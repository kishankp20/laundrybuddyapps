import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const SignupScreen = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    shopName: '',
    address: '',
    city: '',
    contactNumber: '',
    gstNumber: '',
  });

  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleChange = (key: string, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    if (!agreeTerms) {
      alert('You must accept the Terms & Conditions');
      return;
    }
    console.log('Form Submitted:', form);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../../assets/laundrybuddy_logo.png')} style={styles.logo} />
      <View style={styles.row}>
        <TextInput
          style={[styles.input, { flex: 1, marginRight: 8 }]}
          placeholder="First Name"
          value={form.firstName}
          onChangeText={(text) => handleChange('firstName', text)}
        />
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Last Name"
          value={form.lastName}
          onChangeText={(text) => handleChange('lastName', text)}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Shop Name"
        value={form.shopName}
        onChangeText={(text) => handleChange('shopName', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={form.address}
        onChangeText={(text) => handleChange('address', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        value={form.city}
        onChangeText={(text) => handleChange('city', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contact Number"
        keyboardType="phone-pad"
        value={form.contactNumber}
        onChangeText={(text) => handleChange('contactNumber', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="GST Number"
        value={form.gstNumber}
        onChangeText={(text) => handleChange('gstNumber', text)}
      />
      <View style={styles.checkboxContainer}>
        <Checkbox value={agreeTerms} onValueChange={setAgreeTerms} color={agreeTerms ? '#6c63ff' : undefined} />
        <Text style={styles.checkboxLabel}> I Accept the Terms & Conditions*</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 220,
    height: 60,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#6c63ff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 12,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxLabel: {
    marginLeft: 8,
    color: '#6c63ff',
  },
  button: {
    backgroundColor: '#6c63ff',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SignupScreen;
