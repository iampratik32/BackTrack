import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler';
import MovieCard from '../MovieCard';
import { ComponentTitle, FlexVertical, VSpacer } from '../../assets/globalStyle';

const ListContainer = ({ data, title }) => {
    return (
        <FlexVertical>
            {title ? <><ComponentTitle>{title}</ComponentTitle>
                <VSpacer rem={15} /></> : undefined}
            <FlatList horizontal data={data}
                renderItem={(item) => <MovieCard data={item} navigation />}
                keyExtractor={item => item.ids.slug} />
            <VSpacer rem={25} />
        </FlexVertical>

    )
}

export default ListContainer
