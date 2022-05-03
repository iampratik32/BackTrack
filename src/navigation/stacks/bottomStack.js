import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Ant from 'react-native-vector-icons/AntDesign';
import Ioni from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import HomeStack from './homeStack';
import ProfileStack from './profileStack';
import ExploreStack from './exploreStack';
import { colors } from '../../assets/colors';

const Tab = createBottomTabNavigator()

const BottomStack = () => {
    return (
        <Tab.Navigator 
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: colors.white,
            tabBarInactiveTintColor: colors.blueGreyDark,
            tabBarStyle: {
                height: 50,
                paddingBottom: 5,
                borderTopColor: colors.darkGray,
                backgroundColor: colors.materialBlack
            },
            showLabel: true,
        }}>
            <Tab.Screen options={{
                tabBarIcon: ({ color }) => (
                    <Ant name="home" color={color} size={19} />
                )
            }} component={HomeStack} name="Home" />
            <Tab.Screen options={{
                tabBarIcon: ({ color }) => (
                    <Foundation name="compass" color={color} size={19} />
                )
            }} component={ExploreStack} name="Explore" />
            <Tab.Screen options={{
                tabBarIcon: ({ color }) => (
                    <Ant name="user" color={color} size={19} />
                )
            }} component={ProfileStack} name="Profile" />
        </Tab.Navigator>
    )
}

export default BottomStack
