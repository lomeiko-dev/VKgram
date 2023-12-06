import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {UsersScreen} from "screens/users";
import {ProfileScreen} from "screens/profile";
import {ChatsScreen} from "screens/chats";
import {PostsScreen} from "screens/posts";
import {AuthScreen} from "screens/auth";

import { SettingsScreen } from "screens/settings";
import { typeKeyNavigation } from "shared/config/navigate/types";

interface IAppNavigatorProps {
    isAuthData: boolean
}

export const AppNavigator = ({isAuthData}: IAppNavigatorProps) => {
    const Stack = createNativeStackNavigator<typeKeyNavigation>();
    return (
        <Stack.Navigator initialRouteName={isAuthData ? "Profile" : "Auth"}>
        <Stack.Screen
            name="Users"
            component={UsersScreen}
            options={{headerShown:false}}/>
        <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{headerShown:false}}/>
        <Stack.Screen
            name="Chats"
            component={ChatsScreen}
            options={{headerShown:false}}/>
        <Stack.Screen
            name="Posts"
            component={PostsScreen}
            options={{headerShown:false}}/>
        <Stack.Screen
            name="Auth"
            component={AuthScreen}
            options={{headerShown:false}}/>
        <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{headerShown:false}}/>
    </Stack.Navigator>
    );
}