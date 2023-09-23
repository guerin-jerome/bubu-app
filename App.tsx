import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {AppContextProvider} from './context/AppContext';
import {AppContainer} from './AppContainer';
import {NativeBaseProvider} from 'native-base';

function App() {
  return (
    <NativeBaseProvider>
      <AppContextProvider>
        <SafeAreaView>
          <StatusBar />
          <ScrollView>
            <AppContainer />
          </ScrollView>
        </SafeAreaView>
      </AppContextProvider>
    </NativeBaseProvider>
  );
}

export default App;
