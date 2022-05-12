import React from 'react'
import { FlexHorizontal, GlobalText, MainView, ProfileBack, ProfileInfo, VSpacer } from '../../../assets/globalStyle'
import { Avatar } from '../style'

const Detail = () => {
    const avatar = "https://walter.trakt.tv/images/users/002/111/545/avatars/medium/fb5d2cf854.jpg"
    const back = "https://cdn.pixabay.com/photo/2020/02/05/15/50/natural-4821585_1280.png"
    //TODO:: Add A Button To Remove Or Add As Friend
    return (
        <MainView np>
            <ProfileBack source={{ uri: back }}>
                <FlexHorizontal>
                    <Avatar border source={{ uri: avatar }} />
                    <ProfileInfo>
                        <GlobalText fontSize={'20px'} weight={'bold'}>Pratik Poudel</GlobalText>
                        <VSpacer rem={5} />
                        <GlobalText>9 Followers</GlobalText>
                        <VSpacer rem={5} />
                        <GlobalText>Kathmandu, 22</GlobalText>
                    </ProfileInfo>
                </FlexHorizontal>
            </ProfileBack>
            
        </MainView>
    )
}

export default Detail