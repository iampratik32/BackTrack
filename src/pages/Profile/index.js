import { View, Text, Image } from 'react-native'
import React from 'react'
import { FlexHorizontal, FlexVertical, GlobalText, HeaderText, HSpacer, MainView, VSpacer } from '../../assets/globalStyle'
import { size } from '../../utils/device'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Feather from 'react-native-vector-icons/Feather'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../../assets/colors'
import { Avatar, AvatarContainer, AvatarDetailContainer, AvatarName, AvatarStatContainer, AvatarStatWrapper, CardBackground, CardView, StatText } from './style'

const Profile = ({ navigation }) => {
    const dim = size()
    const avatar = "https://walter.trakt.tv/images/users/002/111/545/avatars/medium/fb5d2cf854.jpg"

    const items = [
        { name: 'History', open: 'ProfileHistoryScreen', image: 'https://cdn.vox-cdn.com/thumbor/nKnrxQj_OR0P1qbXg0xIsUioZgw=/320x0:3520x1600/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/23077643/star_wars_eclipse_still_17.jpg' },
        { name: 'Progress', open: 'ProfileProgressScreen', image: 'https://images4.alphacoders.com/722/thumb-1920-722051.jpg' },
        { name: 'Collection', open: 'ProfileHistoryScreen', image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dddb8beb-7509-4c66-bc59-5e64fc25d614/d8r49ti-84975722-465d-40b1-b4ee-0acf750aefcd.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RkZGI4YmViLTc1MDktNGM2Ni1iYzU5LTVlNjRmYzI1ZDYxNFwvZDhyNDl0aS04NDk3NTcyMi00NjVkLTQwYjEtYjRlZS0wYWNmNzUwYWVmY2QuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.k2kUUiuA2SOv9ZcdaHCgg_B5_v2th0r-PDCNNamdHdM' },
        { name: 'Ratings', open: 'ProfileRatingsScreen', image: 'https://coolmaterial.com/wp-content/uploads/2017/07/Tyrion-Dragon.jpg' },
        { name: 'Lists', open: 'ProfileHistoryScreen', image: 'https://wallpaperaccess.com/full/5599270.jpg' },
        { name: 'Comments', open: 'ProfileHistoryScreen', image: 'https://images.wallpapersden.com/image/download/keeping-up-with-the-kardashians-2020_bGhlaWuUmZqaraWkpJRobWllrWdma2U.jpg' },
        { name: 'Friends', open: 'ProfileFriendsScreen', image: 'https://wallpaperaccess.com/full/1504291.jpg' },
    ]

    const ItemCard = ({ data }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate(data.open)}>
                <CardBackground source={{ uri: data.image }} resizeMode="cover">
                    <HeaderText size={'22px'}>{data.name}</HeaderText>
                </CardBackground>
            </TouchableOpacity>
        )
    }

    return (
        <MainView>
            <HeaderText size={'26px'}>Your Profile</HeaderText>
            <VSpacer rem={dim.height * 0.03} />
            <CardView>
                <FlexHorizontal>
                    <AvatarContainer>
                        <Avatar source={{ uri: avatar }} />
                    </AvatarContainer>
                    <AvatarDetailContainer>
                        <FlexHorizontal>
                            <HSpacer rem={dim.width * 0.02} />
                            <AvatarName numberOfLines={1}>Shane Long</AvatarName>
                        </FlexHorizontal>
                        <AvatarStatContainer>
                            <AvatarStatWrapper>
                                <Feather name='tv' color={colors.white} size={17} />
                                <StatText fontSize={'12px'}>130</StatText>
                                <GlobalText fontSize={'12px'}>Shows</GlobalText>
                            </AvatarStatWrapper>
                            <AvatarStatWrapper>
                                <Octicons name='device-camera-video' color={colors.white} size={17} />
                                <StatText fontSize={'12px'}>130</StatText>
                                <GlobalText fontSize={'12px'}>Movies</GlobalText>
                            </AvatarStatWrapper>
                            <AvatarStatWrapper>
                                <MaterialIcons name='collections-bookmark' color={colors.white} size={17} />
                                <StatText fontSize={'12px'}>130 (Shows)</StatText>
                                <GlobalText fontSize={'12px'}>123 (Movies)</GlobalText>
                            </AvatarStatWrapper>
                        </AvatarStatContainer>
                    </AvatarDetailContainer>
                </FlexHorizontal>
            </CardView>
            <VSpacer rem={dim.height * 0.04} />
            {items.map((v, i) => <ItemCard data={v} key={i} />)}
            <VSpacer rem={dim.height * 0.05} />
        </MainView>
    )
}

export default Profile