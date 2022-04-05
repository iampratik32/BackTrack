import { View, Text, Image } from 'react-native'
import React from 'react'
import { CardImage, VSpacer, CardText, MovieCard as MC, CardViewer, GlobalText, HSpacer, CardViewer2 } from '../../assets/globalStyle'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { colors } from '../../assets/colors'

const MovieCard = ({ data }) => {
    const val = data.item
    const tempImage = "https://static.onecms.io/wp-content/uploads/sites/6/2010/06/mad-men-season-4_510.jpg"
    return (
        <TouchableOpacity>
            <MC>
                <CardViewer>
                    <AntDesign name='eyeo' color={colors.white} size={12} />
                    <HSpacer rem={2}/>
                    <GlobalText fontSize={10}>53</GlobalText>
                </CardViewer>
                <CardImage source={{ uri: tempImage }} />
                <VSpacer rem={5} />
                <CardText ellipsizeMode={'tail'} numberOfLines={1}>{val?.title} ({val?.year})</CardText>
            </MC>
        </TouchableOpacity>
    )
}

export default MovieCard