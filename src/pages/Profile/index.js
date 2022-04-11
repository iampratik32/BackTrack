import { View, Text, Image } from 'react-native'
import React from 'react'
import { FlexHorizontal, FlexVertical, GlobalText, HeaderText, HSpacer, MainView, VSpacer } from '../../assets/globalStyle'
import { size } from '../../utils/device'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Feather from 'react-native-vector-icons/Feather'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../../assets/colors'
import { Avatar, AvatarContainer, AvatarDetailContainer, AvatarName, AvatarStatContainer, AvatarStatWrapper, CardView, StatText } from './style'

const Profile = () => {
    const dim = size()
    const avatar = "https://walter.trakt.tv/images/users/002/111/545/avatars/medium/fb5d2cf854.jpg"
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
            <VSpacer rem={dim.height*0.02}/>
        </MainView>
    )
}

export default Profile