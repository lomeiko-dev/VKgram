import { NavigationContainer } from "@react-navigation/native";
import {Main} from "main/Main";
import { StoreProvider } from "main/providers/store";
import { ThemeProvider } from "main/providers/theme";
import {View} from "react-native";

export default function App() {
  return (
    <View style={{width: '100%'}}>
      <NavigationContainer>
        <ThemeProvider>
          <StoreProvider>
            <Main />
          </StoreProvider>
        </ThemeProvider>
      </NavigationContainer>
    </View>
  );
}