import { View, StyleSheet,Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import Button from "./Button";
function Error({message,onConfirm}) {
  return (
    <View style={styles.container}>
        <Text style={[styles.text,styles.title]}>
            An Error occurred!
        </Text>
        <Text style={styles.text}>{message}</Text>
        <Button onPress={onConfirm}>okay</Button>
    </View>
  );
}
export default Error;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  text:{
    textAlign:'center',
    marginBottom:8,
    color:'white'
  },
  title:{
    fontSize:20,
    fontWeight:'bold'
  }
});
