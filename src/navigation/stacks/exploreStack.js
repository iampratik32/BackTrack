import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Explore from '../../pages/Explore';

const Stack = createStackNavigator();

const ExploreStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="ExploreScreen" component={Explore} />
        </Stack.Navigator>
    )
}

export default ExploreStack
