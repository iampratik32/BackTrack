import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Profile from '../../pages/Profile'
import History from '../../pages/Profile/History'
import Progress from '../../pages/Profile/Progress'
import Ratings from '../../pages/Profile/Ratings'
import Friends from '../../pages/Profile/Friends'
import Detail from '../../pages/Profile/Detail'
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
                options={() => headerOption('Your History')} />
            <Stack.Screen name="ProfileProgressScreen" animationEnabled={true} component={Progress}
                options={() => headerOption('Your Progress')} />
            <Stack.Screen name="ProfileRatingsScreen" animationEnabled={true} component={Ratings}
                options={() => headerOption('Your Ratings')} />
            <Stack.Screen name="ProfileFriendsScreen" animationEnabled={true} component={Friends}
                options={() => headerOption('Your Friends')} />
            <Stack.Screen name="ProfileDetailScreen" animationEnabled={true} component={Detail}
                options={({ route }) => headerOption(route.params.navTitle)} />
        </Stack.Navigator>
    )
}

export default ProfileStack
