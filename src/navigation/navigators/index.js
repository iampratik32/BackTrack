import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import BottomStack from "../stacks/bottomStack"

const Navigator = () => {
    return (
        <NavigationContainer>
            <BottomStack />
        </NavigationContainer>
    )
}

export default Navigator