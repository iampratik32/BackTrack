import { View, Text, Image } from 'react-native'
import React from 'react'
import { CardImage, VSpacer, CardText, MovieCard as MC } from '../../assets/globalStyle'
import { TouchableOpacity } from 'react-native-gesture-handler'

const MovieCard = ({ data }) => {
    const val = data.item
    const tempImage = "https://static.onecms.io/wp-content/uploads/sites/6/2010/06/mad-men-season-4_510.jpg"
    return (
        <TouchableOpacity>
            <MC>
                <CardImage source={{ uri: tempImage }} />
                <VSpacer rem={5} />
                <CardText ellipsizeMode={'tail'} numberOfLines={1}>{val?.title} ({val?.year})</CardText>
            </MC>
        </TouchableOpacity>
    )
}

export default MovieCard