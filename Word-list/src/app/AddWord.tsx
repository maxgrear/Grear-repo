import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Button, TextInput, StyleSheet, Text, View } from 'react-native';

export default function AddWord() {
    const [word, setWord] = useState("");
    const [definition, setDefinition] = useState("");

    return (
       <View style={styles.container}>
          <TextInput
            style={{height: 40,
              paddingTop:150,
            borderColor: 'gray',
            borderWidth: 1}}
            placeholder="Enter Word"
            onChangeText={(newText)=>{
              setWord(newText);
            }}
         
          />
          <TextInput
            style={{height: 40,
            borderColor: 'gray',
            paddingTop:200,
            borderWidth: 1}}
            placeholder="Enter Definition"
            onChangeText={(newText)=>{
              setDefinition(newText);
            }}
        
          />
         <Link href={{
          pathname: "/WordList",
          params: {
            newWordDef: JSON.stringify({
              word: word,
              definition: definition,
            }),
          },
         }} asChild>
          <Button title="Save" />
         </Link>
       </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
      paddingBottom: 50,
    },
    itemName: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    itemDesc: {
      padding: 10,
      fontSize: 10,
      height: 44,
    },
    border: {
      borderWidth: 4,
      borderColor: "blue",
    },
});
  