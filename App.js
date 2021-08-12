import React, {useState} from 'react';
import {View} from 'react-native';
import AddItem from './components/AddItem/AddItem';
import Header from './components/Header/Header';
import ItemList from './components/ItemList/ItemList';
import styles from './styles';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const App = () => {
  const [items, setItems] = useState(DATA);

  const deleteItemHandler = id => {
    return setItems(items.filter(item => item.id !== id));
  };

  const addItemHandler = title => {
    return setItems(prevState => [...prevState, {id: Math.random(), title}]);
  };

  return (
    <View style={styles.view}>
      <Header title="Todo List" />
      <AddItem addItem={addItemHandler} />
      <ItemList items={items} deleteItem={deleteItemHandler} />
    </View>
  );
};

export default App;
