import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#654778',
    padding: 15,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Header;
