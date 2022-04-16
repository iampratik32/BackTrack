import { View, Text, Animated, LayoutAnimation, UIManager } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlexHorizontal, FlexVertical } from '../../assets/globalStyle'
import { HistoryMainContiner, HistoryTopContainer, HistoryWrapper } from './style'
import Octicons from 'react-native-vector-icons/Octicons'
import { colors } from '../../assets/colors'
import Easing from 'react-native/Libraries/Animated/Easing'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import ListContainer from '../ListContainer'

const HistoryContainer = () => {

    Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental ? UIManager.setLayoutAnimationEnabledExperimental(true) : undefined

    const [open, setOpen] = useState(true)
    const spinValue = new Animated.Value(open ? 0 : 1)

    Animated.timing(
        spinValue,
        {
            toValue: open ? 1 : 0, duration: 100, easing: Easing.linear, useNativeDriver: true
        }
    ).start()

    const expand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.create(
            100,
            LayoutAnimation.Types.linear,
            LayoutAnimation.Properties.scaleY
        ))
        setOpen(!open)
    }

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg']
    })

    return (
        <HistoryWrapper>
            <TouchableOpacity onPress={expand}>
                <HistoryTopContainer>
                    <Octicons color={colors.white} name={'history'} size={20} style={{ flex: 1.5 }} />
                    <Text style={{ flex: 9, fontWeight: 'bold' }}>Tuesday April 12, 2022</Text>
                    <Text style={{ flex: 5 }}>1 hour, 12 mins</Text>
                    <Animated.View style={{ transform: [{ rotate: spin }], alignItems: 'center', flex: 1 }}>
                        <Octicons color={colors.white} name={'chevron-up'} size={17} />
                    </Animated.View>
                </HistoryTopContainer>
            </TouchableOpacity>
            <HistoryMainContiner closed={!open}>
                
            </HistoryMainContiner>
        </HistoryWrapper>
    )
}

export default HistoryContainer