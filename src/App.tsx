import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Header from './components/Header';
import NotesList from './components/NotesList';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} backgroundColor={'#006266'} />
      <Header />
      <NotesList />
    </SafeAreaView>
  );
};

export default App;
