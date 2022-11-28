import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {

  return (
    <SafeAreaView >
      <StatusBar
        barStyle={'light-content'}
      />
      <Text>123</Text>
    </SafeAreaView>
  );
};

export default App;
