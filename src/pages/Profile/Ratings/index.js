import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { colors } from '../../../assets/colors'
import { GlobalText, HSpacer, MainView, StatsCard, VSpacer } from '../../../assets/globalStyle'
import HistoryContainer from '../../../components/HistoryContainer'
import Pagination from '../../../components/Pagination'
import Picker from '../../../components/Picker'

const Ratings = () => {

    const [type, setType] = useState('All Types')
    const [types, setTypes] = useState(['All Types', 'Movies', 'Shows', 'Seasons', 'Episodes'])
    const [watched, setWatched] = useState('Recently Watched')
    const [wacthes, setWatches] = useState(['Recently Watched', 'Highest Rated', 'Lowest Rated'])
    const [genre, setGenre] = useState('All Genres')
    const [genres, setGenres] = useState(['Action', 'Animation', 'Comedy'])
    const [rating, setRating] = useState('All Ratings')
    const [ratings, setRatings] = useState(['All Ratings', '10 - Totally Ninja!', '9 - Superb', '8 - Great', '7 - Good', '6 - Fair', '5 - Meh', '4 -Poor', '3 - Bad', '2 - Terrible', '1 - Weak Sauce :('])
    const [totalItem, setTotalItem] = useState(147)


    return (
        <MainView>
            <StatsCard>
                <FontAwesome name={'file-o'} color={colors.white} size={20} />
                <HSpacer rem={7} />
                <GlobalText>{totalItem} Items Rated</GlobalText>
            </StatsCard>
            <Picker list={types} value={type} setValue={setType} />
            {type !== "All Types" ? <Picker list={genres} value={genre} setValue={setGenre} /> : undefined}
            <Picker list={ratings} value={rating} setValue={setRating} />
            <Picker list={wacthes} value={watched} setValue={setWatched} />
            <VSpacer rem={20} />
            <Pagination />
            <VSpacer rem={20} />
            <HistoryContainer ratings={true} />
            <VSpacer rem={20} />
            <Pagination />
            <VSpacer rem={25} />
        </MainView>
    )
}

export default Ratings