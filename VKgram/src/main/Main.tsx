import React from "react";
import {AppNavigator} from "./navigate";
import { Layout } from "widgets/layout";

const isAuth = false;

export const Main = () => {
    return (
        <Layout hideNavbar={!isAuth}>
            <AppNavigator isAuthData={isAuth}/>
        </Layout>
    );
}