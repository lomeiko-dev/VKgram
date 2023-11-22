import React from 'react';
import {View} from "react-native";
import { Text, enumTextStyles } from 'shared/ui/Text';
import { TextButton, enumButtonStyle } from 'shared/ui/text-button';

export const AuthScreen = () => {
    return (
        <View style={{backgroundColor: "#ffffff0"}}>
            <TextButton marginBottom={20} width={100} height={50} buttonStyle={enumButtonStyle.SUBMIT}>Кнопка1</TextButton>
            <TextButton isCircle={true} width={100} height={50} buttonStyle={enumButtonStyle.DEFAULT}>Кнопка2</TextButton>
            <TextButton width={100} height={50} buttonStyle={enumButtonStyle.NONE}>Кнопка3</TextButton>
        </View>
    );
};