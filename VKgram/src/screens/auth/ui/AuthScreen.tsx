import React from 'react';

import { Text, enumTextStyles } from 'shared/ui/Text';
import { Screen } from 'shared/ui/screen';
import { Hello } from './hello/Hello';
import { Info } from './info/Info';
import { TextButton, enumButtonStyle } from 'shared/ui/text-button';

import { FaTelegram } from "react-icons/fa";
import { FaVk } from 'react-icons/fa';

export const AuthScreen = () => {
    return (
        <Screen>
            <Hello/>
            <TextButton width='100%' height={40} buttonStyle={enumButtonStyle.DEFAULT}>
                <FaTelegram width={0} color='#0088cc' size={30}/>
                <Text marginLeft={10} styleText={enumTextStyles.SUBTITLE}>Авторизация</Text>
            </TextButton>
            <TextButton marginTop={10} width='100%' height={40} buttonStyle={enumButtonStyle.DEFAULT}>
                <FaVk color='#0077FF' size={30}/>
                <Text marginLeft={10} styleText={enumTextStyles.SUBTITLE}>Авторизация</Text>
            </TextButton>
            <Info/>
        </Screen>
    );
};