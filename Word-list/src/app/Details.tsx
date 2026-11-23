import { StyleSheet, Text, View, Button } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function Details() {
  
  const {product} = useLocalSearchParams<{product: string}>();
  console.log(product);
  const item = JSON.parse(product);
  console.log(item.name);
  const {name, description, price} = item;
    return (       
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>{name}</Text>
      <Text>{description}</Text>
      <Text>${price}</Text>
    </View>  
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',    
      padding: 50,  
    },
  });
  
