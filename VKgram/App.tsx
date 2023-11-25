import { NavigationContainer } from "@react-navigation/native";
import {Main} from "main/Main";
import { ThemeProvider } from "main/providers/theme";
import {View} from "react-native";

export default function App() {
  return (
    <View style={{width: '100%'}}>
      <NavigationContainer>
        <ThemeProvider>
          <Main />
        </ThemeProvider>
      </NavigationContainer>
    </View>
  );
}