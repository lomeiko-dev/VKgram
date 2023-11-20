import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {NavigationContainer} from "@react-navigation/native";
import {UsersScreen} from "screens/users";
import {ProfileScreen} from "screens/profile";
import {ChatsScreen} from "screens/chats";
import {PostsScreen} from "screens/posts";
import {AuthScreen} from "screens/auth";

import {nameNavigate} from "shared/config/navigate";

interface IAppNavigatorProps {
    isAuthData: boolean
}

export const AppNavigator = ({isAuthData}: IAppNavigatorProps) => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={isAuthData ? nameNavigate.profile : nameNavigate.auth}>
                <Stack.Screen
                    name={nameNavigate.users}
                    component={UsersScreen}
                    options={{headerShown:false}}/>
                <Stack.Screen
                    name={nameNavigate.profile}
                    component={ProfileScreen}
                    options={{headerShown:false}}/>
                <Stack.Screen
                    name={nameNavigate.chats}
                    component={ChatsScreen}
                    options={{headerShown:false}}/>
                <Stack.Screen
                    name={nameNavigate.posts}
                    component={PostsScreen}
                    options={{headerShown:false}}/>
                <Stack.Screen
                    name={nameNavigate.auth}
                    component={AuthScreen}
                    options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}