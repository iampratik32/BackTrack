import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { GlobalText, HSpacer, MainView, StatsCard, VSpacer } from '../../../assets/globalStyle'
import Entypo from 'react-native-vector-icons/Entypo'
import { colors } from '../../../assets/colors'
import Picker from '../../../components/Picker'
import ListItem from '../../../components/ListItem'

const List = () => {

  // const [type, setType] = 'Personal Lists'
  // const [types, setTypes] = useState(['Personal Lists', 'Collaborations', 'Liked Lists'])
  const [type, setType] = useState('Personal Lists')
  const [types, setTypes] = useState(['Personal Lists', 'Collaborations', 'Liked Lists'])
  const [sort, setSort] = useState('Rank')
  const [sorts, setSorts] = useState(['Rank', 'Recently Updated', 'Title', 'Likes', 'Comments', 'Items', 'Random'])
  const [totalItem, setTotalItem] = useState(2)

  return (
    <MainView>
      <StatsCard>
        <Entypo name={'list'} color={colors.white} size={20} />
        <HSpacer rem={7} />
        <GlobalText>{totalItem} Lists</GlobalText>
      </StatsCard>
      <Picker list={types} value={type} setValue={setType} />
      <Picker list={sorts} value={sort} setValue={setSort} />
      <VSpacer rem={20} />
      <ListItem />
      <VSpacer rem={25} />
    </MainView>
  )
}

export default List