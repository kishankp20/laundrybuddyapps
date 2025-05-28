import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Login from './screens/login';

export default function app() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <Login />
    </SafeAreaView>
    /*<View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>hello app.</Text>
    </View>*/
  );
}
