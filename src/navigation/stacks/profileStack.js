import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Profile from '../../pages/Profile';
import History from '../../pages/Profile/History';

const Stack = createStackNavigator();
const TransitionScreenOptions = {
    ...TransitionPresets.SlideFromRightIOS,
    headerShown: false
};
const ProfileStack = () => {
    return (
        <Stack.Navigator screenOptions={TransitionScreenOptions}>
            <Stack.Screen name="ProfileScreen" component={Profile} />
            <Stack.Screen name="ProfileHistoryScreen" animationEnabled={true} component={History} />
        </Stack.Navigator>
    )
}

export default ProfileStack
