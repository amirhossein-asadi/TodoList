import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';

const AddItem = ({addItem}) => {
  const [enteredItem, setEnteredItem] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Please enter an activity..."
        onChangeText={value => setEnteredItem(value)}
      />
      <TouchableOpacity onPress={() => addItem(enteredItem)}>
        <Text style={styles.btn}>Add Activity</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
  btn: {
    backgroundColor: '#4a147d',
    color: 'white',
    textAlign: 'center',
    padding: 10,
    borderRadius: 10,
  },
});

export default AddItem;
