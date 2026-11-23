import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const PizzaTranslator = () => {
  const [input, setInput] = useState('');
  const [translation, setTranslation] = useState('');
  const pizza = '🍕';

  //onChangeText - the changed text is passed as a single string to the callback handler
  return (
    <View style={{padding: 10, marginTop: 40}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={text => {
          setInput(text);
          setTranslation(translation+pizza);
        }}                
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {input}        
      </Text>
      <Text style={{padding: 10, fontSize: 42}}>
        {translation}        
      </Text>
    </View>
  );
}

export default PizzaTranslator;