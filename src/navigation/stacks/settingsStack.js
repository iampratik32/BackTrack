import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Settings from '../../pages/Settings';

const Stack = createStackNavigator();

const SettingsStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="SettingsScreen" component={Settings} />
        </Stack.Navigator>
    )
}

export default SettingsStack
