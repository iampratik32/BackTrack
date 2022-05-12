import React, { useEffect } from 'react'
import { View } from 'react-native'
import { colors } from '../../assets/colors'
import { FlexHorizontal, FlexVertical, FriendsItemWrapper, GlobalText, HSpacer, VSpacer } from '../../assets/globalStyle'
import { Avatar, AvatarContainer } from '../../pages/Profile/style'

const FriendsItem = ({ item, nav }) => {

    const data = {
        "username": "sean",
        "private": false,
        "name": "Sean Rudford",
        "vip": true,
        "vip_ep": true,
        "ids": {
            "slug": "sean"
        },
        "joined_at": "2010-09-25T17:49:25.000Z",
        "location": "SF",
        "about": "I have all your cassette tapes.",
        "gender": "male",
        "age": 35,
        "images": {
            "avatar": {
                "full": "https://walter.trakt.tv/images/users/002/111/545/avatars/medium/fb5d2cf854.jpg"
            }
        }
    }

    useEffect(() => {
        item.user ? getUserData(item.user.slug) : undefined
    }, [item.user])

    const getUserData = () => {
        // Get User Profile Here... 
    }

    const openProfile = (name) => {
        nav.navigate(`ProfileDetailScreen`, { navTitle: name })
    }

    return (
        <FriendsItemWrapper onPress={() => openProfile(data.name)}>
            <AvatarContainer>
                <Avatar other source={{ uri: data.images?.avatar?.full }} />
            </AvatarContainer>
            <HSpacer rem={15} />
            <View style={{ flex: 5, justifyContent: 'center' }}>
                <GlobalText weight={'bold'}>{item.user?.name}</GlobalText>
                <VSpacer rem={3} />
                <GlobalText>{item.followed_at?.substring(0, 10)}</GlobalText>
            </View>
        </FriendsItemWrapper>
    )
}

export default FriendsItem