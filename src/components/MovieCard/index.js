import React, { useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../../assets/colors'
import { GlobalText, HSpacer } from '../../assets/globalStyle'
import { MovieGrid, Poster, PosterFooter, PosterIconWrapper, PosterRating, PosterTitle, PosterTitleWrapper, Rating } from './style'

const MovieCard = ({ data }) => {

    const tempImage = "https://static.onecms.io/wp-content/uploads/sites/6/2010/06/mad-men-season-4_510.jpg"
    const [watched, setWatched] = useState(true)
    const [collected, setCollected] = useState(false)
    const [listed, setListed] = useState(false)
    const [rated, setRated] = useState(0)

    return (
        <MovieGrid>
            <PosterRating>
                <Rating>9</Rating>
            </PosterRating>
            <Poster source={{ uri: tempImage }} />
            <PosterFooter>
                <PosterIconWrapper back={watched ? colors.checked : undefined}>
                    <FontAwesome color={watched ? colors.white : colors.checked} name={'check'} size={20} />
                </PosterIconWrapper>
                <PosterIconWrapper back={collected ? colors.collected : undefined}>
                    <MaterialIcons color={collected ? colors.white : colors.collected} name={'collections-bookmark'} size={20} />
                </PosterIconWrapper>
                <PosterIconWrapper back={listed ? colors.wachlist : undefined}>
                    <Entypo color={listed ? colors.white : colors.wachlist} name={'list'} size={20} />
                </PosterIconWrapper>
                <PosterIconWrapper flex={1.5}>
                    <Fontisto color={colors.rating} name={'heart'} size={15} />
                    <HSpacer rem={4} />
                    <GlobalText fontSize={'13px'} weight={'bold'}>87%</GlobalText>
                </PosterIconWrapper>
            </PosterFooter>
            <PosterTitleWrapper>
                <PosterTitle ellipsizeMode={'tail'} numberOfLines={1} bold>1x01 (1) OPERATION STRIX</PosterTitle>
                <PosterTitle ellipsizeMode={'tail'} numberOfLines={1}>Apr 6, 2020 3:09 AM</PosterTitle>
            </PosterTitleWrapper>
        </MovieGrid>
    )
}

export default MovieCard
