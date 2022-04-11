import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../../pages/Profile';

const Stack = createStackNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ProfileScreen" component={Profile} initialParams={'ok'} />
        </Stack.Navigator>
    )
}

export default ProfileStack
