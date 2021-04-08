import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import EntryListItem from './EntryListItem';

const EntryList = () => {
  return (
    <View>
      <Text style={styles.title}>Ultimos Lançamentos</Text>
      <FlatList
        data={[{key: 'Padaria: $10'}, {key: 'Posto Ipiranga: $190'}]}
        renderItem={({item}) => <Text>{item.key}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default EntryList;
