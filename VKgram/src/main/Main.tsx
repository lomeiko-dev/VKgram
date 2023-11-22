import React from "react";
import {AppNavigator} from "./navigate";
import { Layout } from "widgets/layout";

export const Main = () => {
    return (
        <Layout appStyle={{height: '100%', overflow: 'hidden'}}>
            <AppNavigator isAuthData={true}/>
        </Layout>
    );
}