import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {AppContextProvider} from './context/AppContext';
import {AppContainer} from './AppContainer';

function App() {
  return (
    <AppContextProvider>
      <SafeAreaView>
        <StatusBar />
        <ScrollView>
          <AppContainer />
        </ScrollView>
      </SafeAreaView>
    </AppContextProvider>
  );
}

export default App;
