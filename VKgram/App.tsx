import { NavigationContainer } from "@react-navigation/native";
import {Main} from "main/Main";
import {StyleSheet, View} from "react-native";

export default function App() {
  return (
    <View style={{width: '100%'}}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </View>
  );
}