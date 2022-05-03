import React, { useEffect, useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../../assets/colors'
import { GlobalText, HSpacer, OkButton } from '../../assets/globalStyle'
import MainModal from '../Modal'
import RatingModal from '../RatingModal'
import WatchedModal from '../WatchedModal'
import { MovieGrid, Poster, PosterFooter, PosterIconWrapper, PosterRating, PosterTitle, PosterTitleWrapper, MovieRating } from './style'

const MovieCard = ({ data }) => {

    const tempImage = "https://static.onecms.io/wp-content/uploads/sites/6/2010/06/mad-men-season-4_510.jpg"
    const [watched, setWatched] = useState(true)
    const [collected, setCollected] = useState(false)
    const [listed, setListed] = useState(false)
    const [rated, setRated] = useState(0)
    const [modalVisibe, setModalVisible] = useState(false)
    const [modalLoading, setModalLoading] = useState(false)
    const [opening, setOpening] = useState(null)

    useEffect(() => opening ? setModalVisible(true) : undefined, [opening])
    useEffect(() => !modalVisibe ? setOpening(null) : undefined, [modalVisibe])

    const hide = () => !modalLoading ? setModalVisible(false) : undefined

    const RModal = <RatingModal modalVisibe={modalVisibe} setModalLoading={setModalLoading} modalLoading={modalLoading}
        setVisible={setModalVisible} hide={hide} title={`1x01 (1) OPERATION STRIX`} />

    const WModal = <WatchedModal modalVisibe={modalVisibe} setModalLoading={setModalLoading} modalLoading={modalLoading}
        setVisible={setModalVisible} hide={hide} title={`1x01 (1) OPERATION STRIX Watched`} />

    return (
        <>
            <MainModal visible={modalVisibe} hide={hide}
                data={opening === 'R' ? RModal : WModal} />
            <MovieGrid>
                <PosterRating>
                    <MovieRating>9</MovieRating>
                </PosterRating>
                <Poster source={{ uri: tempImage }} />
                <PosterFooter>
                    <PosterIconWrapper onPress={() => setOpening('W')} back={watched ? colors.checked : undefined}>
                        <FontAwesome color={watched ? colors.white : colors.checked} name={'check'} size={20} />
                    </PosterIconWrapper>
                    <PosterIconWrapper back={collected ? colors.collected : undefined}>
                        <MaterialIcons color={collected ? colors.white : colors.collected} name={'collections-bookmark'} size={20} />
                    </PosterIconWrapper>
                    <PosterIconWrapper back={listed ? colors.wachlist : undefined}>
                        <Entypo color={listed ? colors.white : colors.wachlist} name={'list'} size={20} />
                    </PosterIconWrapper>
                    <PosterIconWrapper onPress={() => setOpening('R')} flex={1.5}>
                        <Fontisto color={colors.rating} name={'heart'} size={13} />
                        <HSpacer rem={4} />
                        <GlobalText fontSize={'13px'} weight={'bold'}>87%</GlobalText>
                    </PosterIconWrapper>
                </PosterFooter>
                <PosterTitleWrapper>
                    <PosterTitle ellipsizeMode={'tail'} numberOfLines={1} bold>1x01 (1) OPERATION STRIX</PosterTitle>
                    <PosterTitle ellipsizeMode={'tail'} numberOfLines={1}>Apr 6, 2020 3:09 AM</PosterTitle>
                </PosterTitleWrapper>
            </MovieGrid>
        </>
    )
}

export default MovieCard
