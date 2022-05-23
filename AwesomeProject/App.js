import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const getName = (name, gender) => {
  if (gender == "female") {
    return "Ms. " + name;
  } else if (gender == "male") {
    return "Mr. " + name;
  }
}

const Cat = (props) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text style={{color: '#888', fontSize: 18}}
      >Hello there, I am {getName(props.name, props.gender)}. I am {isHungry ? "hungry!" : "full~"}</Text>
      <TouchableOpacity 
        style={!isHungry ? styles.buttonDisabled : styles.button}
        disabled={!isHungry}
        onPress={() => {setIsHungry(false)}}
      >
        <Text style={styles.text}>{isHungry ? "Pour me some milk, please~" : "Thank you!"}</Text>
     </TouchableOpacity>
    </View>
  );
}

const Cafe = () => {
  return (
    <View
      style={styles.container}>
      <Cat name="Maru" gender="male" />
      <Cat name="Jellylorum" gender="female" />
      <Cat name="Spot" gender="male" />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 4
  },
  buttonDisabled: {
    alignItems: "center",
    backgroundColor: "grey",
    padding: 10,
    borderRadius: 4
  },
  text: {
    color: "white"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Cafe;