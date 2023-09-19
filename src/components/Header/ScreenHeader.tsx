import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../theme/colors';

type Props = {
  title: string;
  subtitle: string;
};

const ScreenHeader: React.FC<Props> = ({title, subtitle}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginBottom: 15},
  title: {color: colors.black, fontSize: 32, fontWeight: '500'},
  subtitle: {color: colors.gray, fontSize: 16},
});

export default ScreenHeader;
