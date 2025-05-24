import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';

export default function App(): tsx.Element {
  const [shopName, setShopName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [errors, setErrors] = useState<{
    shopName?: string;
    phoneNumber?: string;
    terms?: string;
  }>({});

  const validate = (): boolean => {
    const newErrors: {
      shopName?: string;
      phoneNumber?: string;
      terms?: string;
    } = {};

    if (!shopName.trim()) {
      newErrors.shopName = 'Shop name is required';
    }

    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(phoneNumber.trim())) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit phone number';
    }

    if (!isChecked) {
      newErrors.terms = 'You must accept the Terms & Conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (): void => {
    if (validate()) {
      console.log('Login successful with:', { shopName, phoneNumber });
      alert('Login successful!');
    } else {
      console.log('Validation failed');
    }
  };

  const handleSignUp = (): void => {
    console.log('Navigate to sign up screen');
    alert('Navigate to Sign Up screen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoid}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.logoContainer}>
            <Image
              source={{ uri: 'https://via.placeholder.com/150x50?text=Laundry+Buddy' }}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.welcomeText}>Welcome!</Text>
          <Text style={styles.subText}>
            Hi, Enter your details to login to your account.
          </Text>

          <View style={styles.formContainer}>
            {/* Shop Name Input */}
            <View style={styles.inputContainer}>
              <Ionicons name="person-outline" size={20} color="#888" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Enter Shop Name"
                placeholderTextColor="#aaa"
                value={shopName}
                onChangeText={(text: string) => {
                  setShopName(text);
                  if (errors.shopName) {
                    setErrors(prev => ({ ...prev, shopName: undefined }));
                  }
                }}
              />
            </View>
            {errors.shopName && <Text style={styles.errorText}>{errors.shopName}</Text>}

            {/* Phone Number Input */}
            <View style={styles.inputContainer}>
              <Ionicons name="call-outline" size={20} color="#888" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                placeholderTextColor="#aaa"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={(text: string) => {
                  setPhoneNumber(text);
                  if (errors.phoneNumber) {
                    setErrors(prev => ({ ...prev, phoneNumber: undefined }));
                  }
                }}
              />
            </View>
            {errors.phoneNumber && <Text style={styles.errorText}>{errors.phoneNumber}</Text>}

            {/* Terms & Conditions */}
            <View style={styles.checkboxContainer}>
              <Checkbox
                value={isChecked}
                onValueChange={(value: boolean) => {
                  setIsChecked(value);
                  if (errors.terms) {
                    setErrors(prev => ({ ...prev, terms: undefined }));
                  }
                }}
                color={isChecked ? '#6979F8' : undefined}
                style={styles.checkbox}
              />
              <Text style={styles.checkboxText}>
                I Accept the Terms & Conditions
                <Text style={styles.asterisk}>*</Text>
              </Text>
            </View>
            {errors.terms && <Text style={styles.errorText}>{errors.terms}</Text>}

            {/* Buttons */}
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
              <Ionicons name="person-add-outline" size={20} color="#6979F8" />
              <Text style={styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  keyboardAvoid: { flex: 1 },
  scrollContainer: { flexGrow: 1, paddingHorizontal: 20, paddingTop: 20, paddingBottom: 20 },
  logoContainer: { alignItems: 'center', marginTop: 20, marginBottom: 30 },
  logo: { width: 280, height: 80 },
  welcomeText: { fontSize: 36, fontWeight: '600', color: '#6979F8', marginBottom: 8 },
  subText: { fontSize: 16, color: '#888', marginBottom: 30 },
  formContainer: { width: '100%' },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 20,
    paddingBottom: 8,
  },
  inputIcon: { marginRight: 10 },
  input: { flex: 1, fontSize: 16, color: '#333' },
  errorText: {
    color: '#FF5252',
    fontSize: 12,
    marginTop: -16,
    marginBottom: 16,
  },
  checkboxContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 25 },
  checkbox: { marginRight: 8 },
  checkboxText: { fontSize: 14, color: '#6979F8' },
  asterisk: { color: '#FF5252' },
  loginButton: {
    backgroundColor: '#6979F8',
    borderRadius: 50,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: { color: '#FFFFFF', fontSize: 18, fontWeight: '600' },
  signUpButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#6979F8',
    borderRadius: 50,
    height: 56,
    marginBottom: 30,
  },
  signUpText: { color: '#6979F8', fontSize: 18, fontWeight: '500', marginLeft: 8 },
});
