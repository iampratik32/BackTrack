import React, { useState } from 'react'
import { Animated, LayoutAnimation, Text, UIManager, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import Easing from 'react-native/Libraries/Animated/Easing'
import { colors } from '../../assets/colors'
import { size } from '../../utils/device'
import MovieCard from '../MovieCard'
import { HistoryMainContiner, HistoryTopContainer, HistoryWrapper } from './style'

const HistoryContainer = ({ ratings }) => {

    Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental ? UIManager.setLayoutAnimationEnabledExperimental(true) : undefined
    const tempImage = "https://static.onecms.io/wp-content/uploads/sites/6/2010/06/mad-men-season-4_510.jpg"

    const [open, setOpen] = useState(true)
    const [hide, setHide] = useState(false)
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
        if (!open) {
            setTimeout(() => {
                setHide(false)
            }, 100)
        }
        else setHide(true)
    }

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg']
    })

    return (
        <HistoryWrapper>
            <TouchableOpacity onPress={expand}>
                <HistoryTopContainer>
                    {!ratings ?
                        <Octicons color={colors.white} name={'history'} size={20} style={{ flex: 1.5 }} /> :
                        <MaterialCommunityIcons color={colors.white} name={'progress-clock'} size={20} style={{ flex: 1.5 }} />}

                    <Text style={{ flex: 9, fontWeight: 'bold' }}>Tuesday April 12, 2022</Text>
                    {!ratings ?
                        <Text style={{ flex: 5 }}>1 hour, 12 mins</Text> :
                        undefined}
                    <Animated.View style={{ transform: [{ rotate: spin }], alignItems: 'center', flex: 1 }}>
                        <Octicons color={colors.white} name={'chevron-up'} size={17} />
                    </Animated.View>
                </HistoryTopContainer>
            </TouchableOpacity>
            <HistoryMainContiner hide={hide} closed={!open}>
                <View style={{ padding: size().height * 0.01 }}>
                    <MovieCard />
                </View>

            </HistoryMainContiner>
        </HistoryWrapper>
    )
}

export default HistoryContainer