import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Profile from '../../pages/Profile';
import History from '../../pages/Profile/History';
import { colors } from '../../assets/colors';

const Stack = createStackNavigator();
const TransitionScreenOptions = {
    ...TransitionPresets.SlideFromRightIOS,
    headerShown: false
}

const headerOption = (title) => {
    return { title: title, headerShown: true, headerTintColor: colors.white, headerStyle: { backgroundColor: colors.materialBlack } }
}

const ProfileStack = () => {
    return (
        <Stack.Navigator screenOptions={TransitionScreenOptions}>
            <Stack.Screen name="ProfileScreen" component={Profile} />
            <Stack.Screen name="ProfileHistoryScreen" animationEnabled={true} component={History}
                options={()=>headerOption('Your History')} />
        </Stack.Navigator>
    )
}

export default ProfileStack
