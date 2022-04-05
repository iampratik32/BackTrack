import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Library from '../../pages/Library';

const Stack = createStackNavigator();

const LibraryStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="LibraryScreen" component={Library} />
        </Stack.Navigator>
    )
}

export default LibraryStack
