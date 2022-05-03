import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Explore from '../../pages/Explore';
import Detail from '../../pages/Explore/Detail';

const Stack = createStackNavigator();

const ExploreStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="ExploreScreen" component={Explore} options={{
                title:"Explore Page",
            }}/>
            <Stack.Screen name="DetailScreen" component={Detail} options={{
                title:" ",
            }}/>

        </Stack.Navigator>
    )
}

export default ExploreStack
