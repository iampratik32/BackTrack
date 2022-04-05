import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { HeaderText, VSpacer, MainView } from '../../assets/globalStyle'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import { keyExtractor } from 'react-native/Libraries/Lists/VirtualizeUtils';
import ListContainer from '../../components/ListContainer';

const Dashboard = () => {

    const [landscape, setLandscape] = useState(false)

    const windowWidth = useWindowDimensions().width
    const windowHeight = useWindowDimensions().height

    useEffect(() => {
        windowHeight < windowWidth ? setLandscape(true) : setLandscape(false)
    }, [windowWidth, windowHeight])

    return (
        <MainView landscape={landscape}>
            <HeaderText>Dashboard</HeaderText>
            <VSpacer rem={25} />
        </MainView>
    )
}

export default Dashboard