import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const FlatListExample = () => {
    //dataSource contains the data we want rendered as a list
    //the dataSource should contain a unique key for each item in the array
    const dataSource = [
        {key: '001', firstName: 'Devin', description: 'Software developer'},
        {key: '002', firstName: 'Dan', description: 'Product manager'},
        {key: '003', firstName: 'Dominick', description: 'Designer'},
        {key: '004', firstName: 'Jackson', description: 'Engineer'},
        {key: '005', firstName: 'James', description: 'QA analyst'},
        {key: '006', firstName: 'Joel', description: 'Data scientist'},
        {key: '007', firstName: 'John', description: 'Marketing specialist'},
        {key: '008', firstName: 'Jillian', description: 'UX researcher'},
        {key: '009', firstName: 'Jimmy', description: 'Technical writer'},
        {key: '0010', firstName: 'Julie', description: 'Business analyst'},
      ];
    
      //the renderItem prop takes a function. The function has a parameter which
      //is an item in the data source. Place the item in a component to display the item.
  return (
    <View style={styles.container}>
      <FlatList
        data={dataSource}
        renderItem={({item}) =>
          <View style={styles.border}>         
            <Text style={styles.item}>{item.firstName}</Text>
            <Text style={styles.item}>{item.description}</Text>      
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 50
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    border: {
      borderColor: 'gray',
      borderWidth: 1,
    },
  });  

export default FlatListExample;