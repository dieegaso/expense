import React from 'react';
import { View, Text } from 'react-native';
import {Tabs} from 'expo-router';

const _Layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="yearIndex"
                options={{
                    title: 'Details',
                    headerShown: false,
                }}
            />  <Tabs.Screen
                name="summary"
                options={{
                    title: 'Summary',
                    headerShown: false,
                }}
            />
        </Tabs>
    );
};


export default _Layout;
