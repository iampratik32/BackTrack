import { View, Text } from 'react-native'
import React from 'react'
import { FlexHorizontal, FlexVertical, MainView, VSpacer } from '../../../assets/globalStyle'
import { size } from '../../../utils/device'
import Octicons from 'react-native-vector-icons/Octicons'
import { colors } from '../../../assets/colors'
import { HistoryTopContainer } from './style'
import HistoryContainer from '../../../components/HistoryContainer'

const History = ({ navigation }) => {
    const dim = size()

    return (
        <MainView>
            <HistoryContainer />
            <HistoryContainer />
            <HistoryContainer />
            <VSpacer rem={25} />
        </MainView>
    )
}

export default History