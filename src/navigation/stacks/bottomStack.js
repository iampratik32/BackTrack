import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Ant from 'react-native-vector-icons/AntDesign';
import Ioni from 'react-native-vector-icons/Ionicons';
import HomeStack from './homeStack';
import SettingsStack from './settingsStack';
import LibraryStack from './libraryStack';

const Tab = createBottomTabNavigator()

const BottomStack = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            showLabel: true,
            inactiveTintColor: '#000',
            activeTintColor: '#000',
        }}>
            <Tab.Screen options={{
                tabBarIcon: ({ color }) => (
                    <Ant name="home" color={color} size={19} />
                )
            }} component={HomeStack} name="Home" />
            <Tab.Screen options={{
                tabBarIcon: ({ color }) => (
                    <Ioni name="library-outline" color={color} size={19} />
                )
            }} component={LibraryStack} name="Library" />
            <Tab.Screen options={{
                tabBarIcon: ({ color }) => (
                    <Ant name="setting" color={color} size={19} />
                )
            }} component={SettingsStack} name="Settings" />
        </Tab.Navigator>
    )
}

export default BottomStack
