import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';

import NewsApp from './src/NewsApp';
import colors from './src/theme/colors';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <StatusBar barStyle={'light-content'} />
      <NewsApp />
    </SafeAreaView>
  );
}

export default App;
