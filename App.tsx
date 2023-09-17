import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import NewsApp from './src/NewsApp';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <NewsApp />
    </SafeAreaView>
  );
}

export default App;
