import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GlobalText, OkButton } from '../../assets/globalStyle'
import { AirbnbRating } from 'react-native-ratings'
import LoadingComponent from '../LoadingComponent'
import { colors } from '../../assets/colors'
const heart = require('../../assets/heart.png')

const RatingModal = ({ hide, modalLoading, setModalLoading, modalVisibe, title }) => {

    const reviews = ['Weak Sauce :(', 'Terrible', 'Bad', 'Poor', 'Meh', 'Fair', 'Good', 'Great', 'Superb', 'Total Ninja!']
    const [rating, setRating] = useState(0)
    const [color, setColor] = useState(colors.rating)

    useEffect(() => {
        if (!modalVisibe) {
            setRating(0)
        }
    }, [modalVisibe])

    useEffect(() => {
        switch (rating) {
            case 1: setColor(colors.weakSauce); break
            case 2: setColor(colors.terrible); break
            case 3: setColor(colors.bad); break
            case 4: setColor(colors.poor); break
            case 5: setColor(colors.meh); break
            case 6: setColor(colors.fair); break
            case 7: setColor(colors.good); break
            case 8: setColor(colors.great); break
            case 9: setColor(colors.superb); break
            case 10: setColor(colors.totalNinja); break
            default: undefined
        }
    }, [rating])

    const rate = () => {
        if (rating) {
            setModalLoading(true)
            setTimeout(() => {
                setModalLoading(false)
                hide()
            }, 1000)
        }
        else hide()
    }

    return (
        <>
            <GlobalText style={{ marginBottom: 20 }} numberOfLines={1} weight={'bold'}>{title}</GlobalText>
            <AirbnbRating reviewColor={colors.white} starImage={heart} reviews={reviews}
                count={10} onFinishRating={(v) => setRating(v)} ratingContainerStyle={{ marginBottom: 10 }}
                defaultRating={0} selectedColor={color} size={23} showRating={rating ? true : false} />
            {modalLoading ? <LoadingComponent /> : <OkButton onPress={rate}>
                <GlobalText fontSize={'14px'} weight={'bold'}>{rating ? 'Rate' : 'Cancel'}</GlobalText>
            </OkButton>}
        </>
    )
}

export default RatingModal