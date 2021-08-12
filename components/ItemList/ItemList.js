import React from 'react';
import {View, FlatList} from 'react-native';
import Item from './Item';

const ItemList = ({items, deleteItem}) => {
  const renderItem = ({item}) => (
    <Item title={item.title} id={item.id} deleteItem={deleteItem} />
  );
  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default ItemList;
