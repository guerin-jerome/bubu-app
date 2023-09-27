import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import {AppContextProvider} from './context/AppContext';
import {AppContainer} from './AppContainer';
import {NativeBaseProvider} from 'native-base';
import {ColorThemeStyle, screenHeight} from './constants';

function App() {
  return (
    <NativeBaseProvider>
      <AppContextProvider>
        <View
          style={{
            backgroundColor: ColorThemeStyle.background,
            height: screenHeight,
          }}>
          <SafeAreaView>
            <StatusBar />
            <ScrollView>
              <AppContainer />
            </ScrollView>
          </SafeAreaView>
        </View>
      </AppContextProvider>
    </NativeBaseProvider>
  );
}

export default App;
