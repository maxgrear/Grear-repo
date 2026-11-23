import { Text, View, Image, Button } from 'react-native';
import {useState} from 'react';
import { TextInput } from 'react-native-gesture-handler';

function Cat({name}: {name:string}) { 
  const [message, setMessage] = useState("I am hungry");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [nickname, setNickname] = useState("");
  function feedCat() {
    console.log("feed cat");
    setMessage("Thank you!");
    setButtonDisabled(true);
  }
  return (
    <View>
      <Image
        src={'https://reactnative.dev/docs/assets/p_cat2.png'}
        style={{ width: 200, height: 200 }}
      />
      <Text>Hello, I am your cat, {name}!</Text>
      <TextInput
        style={{height: 40}}
        placeholder="Give me a nickname"
        onSubmitEditing={event => {
          setNickname(event.nativeEvent.text);
          console.log(event.nativeEvent.text);
        }}
        />
      <Text>{message}</Text>
      <Button title="Please feed me" disabled={buttonDisabled} 
        onPress={feedCat} />
    </View>
  );
}

/* Cafe is the parent component we will call in App.js
   Cat is considered a child component */
export default function Cafe() {  
  return (
    <View style={{paddingTop: 50}}>   
      <Cat name="Bob" />
      <Cat name="Charlie" />     
    </View>
  );
}


// import { Text, View, Image, Button } from 'react-native';
// import {useState} from 'react';

// function Cat({name}: {name:string}) { 
//   const [message, setMessage] = useState("I am hungry");
//   const [buttonDisabled, setButtonDisabled] = useState(false);
  
//   function feedCat() {
//     console.log("feed cat");
//     setMessage("Thank you!");
//     setButtonDisabled(true);
//   }
//   return (
//     <View>
//       <Image
//         src={'https://reactnative.dev/docs/assets/p_cat2.png'}
//         style={{ width: 200, height: 200 }}
//       />      
//       <Text>Hello, I am your cat, {name}!</Text>
//       <Text>{message}</Text>
//       <Button title="Please feed me" disabled={buttonDisabled} 
//         onPress={feedCat} />
//     </View>
//   );
// }

// /* Cafe is the parent component we will call in App.js
//    Cat is considered a child component */
// export default function Cafe() {  
//   return (
//     <View style={{paddingTop: 50}}>   
//       <Cat name="Bob" />
//       <Cat name="Charlie" />     
//     </View>
//   );
// }
