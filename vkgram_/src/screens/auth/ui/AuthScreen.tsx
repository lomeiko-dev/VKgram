import React from 'react';

import { Screen } from 'shared/ui/screen';
import { Hello } from './hello/Hello';
import { Info } from './info/Info';
import { TextButton, enumButtonStyle } from 'shared/ui/text-button';

import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const AuthScreen = () => {
    // const {error} = useGetAuthTokenQuery({client_id: "51802617", redirect_uri: "http://example.com/callback&scope=12"});

    // console.log(error);

    return (
        <Screen>
            <Hello/>
            <TextButton width='100%' height={40} buttonStyle={enumButtonStyle.DEFAULT} text='Авторизация'>
                <Entypo name='vk' color='#0088cc' size={30}/>
            </TextButton>
            <TextButton marginTop={10} width='100%' height={40} buttonStyle={enumButtonStyle.DEFAULT} text='Авторизация'>
                <FontAwesome name='telegram' color='#0077FF' size={30}/>
            </TextButton>
            <Info/>
        </Screen>
    );
};