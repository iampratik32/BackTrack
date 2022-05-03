import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlexHorizontal, GlobalText, OkButton } from '../../assets/globalStyle'
import { AirbnbRating } from 'react-native-ratings'
import LoadingComponent from '../LoadingComponent'
import { colors } from '../../assets/colors'
import { BContainer, CheckButton } from '../RatingModal/style'
const heart = require('../../assets/heart.png')

function WatchedModal({ hide, modalLoading, setModalLoading, modalVisibe, title }) {

    const reviews = ['Weak Sauce :(', 'Terrible', 'Bad', 'Poor', 'Meh', 'Fair', 'Good', 'Great', 'Superb', 'Total Ninja!']
    const [rating, setRating] = useState(0)
    const [color, setColor] = useState(colors.rating)

    useEffect(() => {
        if (!modalVisibe) {
            setRating(0)
        }
    }, [modalVisibe])

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
            <GlobalText style={{ marginBottom: 10, paddingTop:10 }} numberOfLines={1} weight={'bold'}>Add To Watched History</GlobalText>
            <GlobalText style={{ marginBottom: 15 }} numberOfLines={1}>When Did You Watch This?</GlobalText>
            <FlexHorizontal>

                <BContainer>
                    <CheckButton><Text>Right Now</Text></CheckButton>
                </BContainer>
                <BContainer>
                    <CheckButton><Text>Release Date</Text></CheckButton>
                </BContainer>
                <BContainer>
                    <CheckButton><Text>Other Date</Text></CheckButton>
                </BContainer>
                

            </FlexHorizontal>
        </>
    )
}

export default WatchedModal