import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler';
import MovieCard from '../MovieCard';
import { ComponentTitle, FlexVertical, VSpacer } from '../../assets/globalStyle';

const ListContainer = ({ data, title }) => {
    return (
        <FlexVertical>
            <ComponentTitle>{title}</ComponentTitle>
            <VSpacer rem={15} />
            <FlatList horizontal data={data}
                renderItem={(item) => <MovieCard data={item} />}
                keyExtractor={item => item.ids.slug} />
            <VSpacer rem={25} />
        </FlexVertical>
    )
}

export default ListContainer