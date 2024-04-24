import React, { useState } from "react";
import {
  Text,
  View,
  Pressable,
  ScrollView,
  TextInput,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScrollView>
      <View style={style.container}>
        <ImageBackground
          source={{
            uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
          }}
        />
        <TextInput
          style={style.input}
          placeholder="enter username"
          keyboardType="email-address"
          returnKeyType="next"
          autoCapitalize={false}
          value={email}
          onChangeText={(email) => {
            setEmail(email);
          }}
        />
        <TextInput
          style={style.input}
          placeholder="enter username"
          keyboardType="email-address"
          returnKeyType="next"
          autoCapitalize={false}
          value={email}
          onChangeText={(password) => {
            setPassword(password);
          }}
        />
        <Pressable onPress={() => alert(email, password)}>login</Pressable>
        <Text style={style.text}>forgot password</Text>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    flex: 1,
    alignItems: "center",
  },
  input: {
    margin: 20,
    color: "red",
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "red",
  },
  text: {
    color: "blue",
    fontSize: 13,
  },
});

export default App;
