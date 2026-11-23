import { StyleSheet, Text, View, Button } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {

  let product={name: 'My cool product',
             price: 45,
             description: 'Ice cream maker'};
    
    return (
        <View style={styles.container}>
          <Text >Home Screen</Text>
          <Link href={{
            pathname: "/Details",
            params: {product: JSON.stringify(product)}
          }} asChild>
          <Button title="Go to Details" />
          </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
