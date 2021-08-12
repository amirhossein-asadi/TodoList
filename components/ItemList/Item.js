import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

const Item = ({title, id, deleteItem}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <TouchableOpacity onPress={() => deleteItem(id)}>
      <Text style={styles.deleteIcon}>Delete</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  item: {
    borderColor: 'grey',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    padding: 10,
    margin: 1,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: 'black',
  },
  deleteIcon: {
    color: 'red',
  },
});

export default Item;
