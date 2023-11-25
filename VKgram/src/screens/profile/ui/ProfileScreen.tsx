import React from 'react';
import {Text, View} from "react-native";
import { useTheme } from 'shared/lib/hooks/useTheme';
import { Image } from 'shared/ui/Image';
import { Panel } from 'shared/ui/panel';

export const ProfileScreen = () => {
    const {theme} = useTheme();
    return (
        <Panel height='100%' bgColor={theme.bgColor}>
            <Text>Profile Screen</Text>
            
        </Panel>
    );
};