import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { GlobalText, HSpacer, MainView, StatsCard, VSpacer } from '../../../assets/globalStyle'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { colors } from '../../../assets/colors'
import Picker from '../../../components/Picker'
import FriendsItem from '../../../components/FriendsItem'

const Friends = ({ navigation }) => {

    const [type, setType] = useState('Friends')
    const [types, setTypes] = useState(['Friends', 'Followers', 'Following'])
    const [sort, setSort] = useState('Oldest')
    const [sorts, setSorts] = useState(['Oldest', 'Newest'])
    const [totalPeople, setTotalPeople] = useState(7)
    const data = [
        {
            "followed_at": "2014-09-01T09:10:11.000Z",
            "user": {
                "username": "sean",
                "private": false,
                "name": "Sean Rudford",
                "vip": true,
                "vip_ep": false,
                "ids": {
                    "slug": "sean"
                }
            }
        },
        {
            "followed_at": "2014-09-01T09:10:11.000Z",
            "user": {
                "username": "justin",
                "private": false,
                "name": "Justin Nemeth",
                "vip": true,
                "vip_ep": false,
                "ids": {
                    "slug": "justin"
                }
            }
        }
    ]

    return (
        <MainView>
            <StatsCard>
                <FontAwesome name={'user-o'} color={colors.white} size={20} />
                <HSpacer rem={10} />
                <GlobalText>{totalPeople} People</GlobalText>
            </StatsCard>
            <Picker list={types} value={type} setValue={setType} />
            <Picker list={sorts} value={sort} setValue={setSort} />
            <VSpacer rem={20} />
            {data.map((v, i) => <FriendsItem key={i} item={v} nav={navigation} />)}
            <VSpacer rem={25} />
        </MainView>
    )
}

export default Friends