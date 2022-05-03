import React, { useEffect, useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { colors } from '../../../assets/colors'
import { FlexHorizontal, FlexVertical, GlobalText, HSpacer, MainView, VSpacer } from '../../../assets/globalStyle'
import HistoryContainer from '../../../components/HistoryContainer'
import Pagination from '../../../components/Pagination'
import Picker from '../../../components/Picker'
import { size } from '../../../utils/device'
import { StatsCard } from './style'
// import { Picker } from '@react-native-picker/picker'

const History = ({ navigation }) => {
    const dim = size()
    const [type, setType] = useState('All Types')
    const [types, setTypes] = useState(['All Types', 'Movies', 'Shows', 'Episodes'])
    const [genre, setGenre] = useState('All Genres')
    const [watched, setWatched] = useState('Recently Watched')
    const [wacthes, setWatches] = useState(['Recently Watched'])
    const [genres, setGenres] = useState(['Action', 'Animation', 'Comedy'])
    const [totalItem, setTotalItem] = useState(8500)
    const [totalPlay, setTotalPlay] = useState(8650)

    useEffect(() => {
        if (type === 'All Types') setWatches(['Recently Watched'])
        else setWatches(['Recently Watched', 'Most Plays', 'Time Spent'])
    }, [type])

    return (
        <MainView>
            <FlexHorizontal style={{ justifyContent: 'center' }}>
                <StatsCard>
                    <FontAwesome name={'file-o'} color={colors.white} size={20} />
                    <HSpacer rem={7} />
                    <GlobalText>{totalItem} Items</GlobalText>
                    <HSpacer rem={25} />
                    <FontAwesome name={'check'} color={colors.white} size={20} />
                    <HSpacer rem={7} />
                    <GlobalText>{totalPlay} Plays</GlobalText>
                </StatsCard>
            </FlexHorizontal>
            <Picker list={types} value={type} setValue={setType} />
            {type !== "All Types" ? <Picker list={genres} value={genre} setValue={setGenre} /> : undefined}
            <Picker list={wacthes} value={watched} setValue={setWatched} />
            <VSpacer rem={20} />
            <Pagination />
            <VSpacer rem={20} />
            <HistoryContainer />
            <HistoryContainer />
            <HistoryContainer />
            <VSpacer rem={20} />
            <Pagination />
            <VSpacer rem={25} />
        </MainView>
    )
}

export default History