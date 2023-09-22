import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {AppContextProvider} from './context/AppContext';

function App() {
  return (
    <AppContextProvider>
      <SafeAreaView>
        <StatusBar />
        <ScrollView />
      </SafeAreaView>
    </AppContextProvider>
  );
}

export default App;
