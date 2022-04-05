import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../../pages/Dashboard';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="DashboardScreen" component={Dashboard} />
        </Stack.Navigator>
    )
}

export default HomeStack
