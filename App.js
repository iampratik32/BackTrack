import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Dashboard from './src/pages/Dashboard';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigation/navigators';
import { LogBox } from 'react-native';
import { SafeView } from './src/assets/globalStyle';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';



  return (
    <SafeView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Navigator />
      {/* <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <View style={{ display: 'flex', flexDirection: 'column' }}>
            
          </View>
    </ScrollView> */}
    </SafeView >
  );
};

export default App;
