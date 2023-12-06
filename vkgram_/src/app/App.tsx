import React from "react";
import {AppNavigator} from "./navigate";
import { NavigationContainer } from "@react-navigation/native";
import { Layout } from "widgets/layout";
import { StoreProvider } from "./providers/store";
import { ThemeProvider } from "./providers/theme";

const isAuth = true;

export const App: React.FC = () => {
    return (
        <NavigationContainer>
            <StoreProvider>
                <ThemeProvider>
                    <Layout hideNavbar={!isAuth}>
                        <AppNavigator isAuthData={isAuth}/>
                    </Layout>
                </ThemeProvider>
            </StoreProvider>
      </NavigationContainer>
    );
}