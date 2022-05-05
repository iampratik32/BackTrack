import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { GlobalText, HSpacer, MainView, StatsCard } from '../../../assets/globalStyle'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { colors } from '../../../assets/colors'
import Picker from '../../../components/Picker'

const Friends = () => {

    const [type, setType] = useState('Friends')
    const [types, setTypes] = useState(['Friends', 'Followers', 'Following'])
    const [sort, setSort] = useState('Oldest')
    const [sorts, setSorts] = useState(['Oldest', 'Newest'])
    const [totalPeople, setTotalPeople] = useState(7)

    return (
        <MainView>
            <StatsCard>
                <FontAwesome name={'user-o'} color={colors.white} size={20} />
                <HSpacer rem={10} />
                <GlobalText>{totalPeople} People</GlobalText>
            </StatsCard>
            <Picker list={types} value={type} setValue={setType} />
            <Picker list={sorts} value={sort} setValue={setSort} />
        </MainView>
    )
}

export default Friends