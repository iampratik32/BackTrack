import { View, Text, Animated, LayoutAnimation, UIManager } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlexHorizontal, FlexVertical } from '../../assets/globalStyle'
import { HistoryMainContiner, HistoryTopContainer, HistoryWrapper } from './style'
import Octicons from 'react-native-vector-icons/Octicons'
import { colors } from '../../assets/colors'
import Easing from 'react-native/Libraries/Animated/Easing'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import ListContainer from '../ListContainer'

const HistoryContainer = () => {

    Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental ? UIManager.setLayoutAnimationEnabledExperimental(true) : undefined

    const [open, setOpen] = useState(true)
    const spinValue = new Animated.Value(open ? 0 : 1)

    Animated.timing(
        spinValue,
        {
            toValue: open ? 1 : 0, duration: 100, easing: Easing.linear, useNativeDriver: true
        }
    ).start()

    const expand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.create(
            100,
            LayoutAnimation.Types.linear,
            LayoutAnimation.Properties.scaleXY
        ))
        setOpen(!open)

    }

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg']
    })

    const data = [
        {
            "title": "The Dark Knight",
            "year": 2008,
            "ids": {
                "trakt": 16,
                "slug": "the-dark-knight-2008",
                "imdb": "tt0468569",
                "tmdb": 155
            }
        },
        {
            "title": "Fight Club",
            "year": 1999,
            "ids": {
                "trakt": 727,
                "slug": "fight-club-1999",
                "imdb": "tt0137523",
                "tmdb": 550
            }
        },
        {
            "title": "Jurassic Park",
            "year": 1993,
            "ids": {
                "trakt": 393,
                "slug": "jurassic-park-1993",
                "imdb": "tt0107290",
                "tmdb": 329
            }
        },
        {
            "title": "Back to the Future",
            "year": 1985,
            "ids": {
                "trakt": 308,
                "slug": "back-to-the-future-1985",
                "imdb": "tt0088763",
                "tmdb": 105
            }
        },
        {
            "title": "The Shawshank Redemption",
            "year": 1994,
            "ids": {
                "trakt": 231,
                "slug": "the-shawshank-redemption-1994",
                "imdb": "tt0111161",
                "tmdb": 278
            }
        },
        {
            "title": "The Social Network",
            "year": 2010,
            "ids": {
                "trakt": 98,
                "slug": "the-social-network-2010",
                "imdb": "tt1285016",
                "tmdb": 37799
            }
        },
        {
            "title": "Star Wars: Episode IV - A New Hope",
            "year": 1977,
            "ids": {
                "trakt": 738,
                "slug": "star-wars-episode-iv-a-new-hope-1977",
                "imdb": "tt0076759",
                "tmdb": 11
            }
        },
        {
            "title": "The Lord of the Rings: The Return of the King",
            "year": 2003,
            "ids": {
                "trakt": 374,
                "slug": "the-lord-of-the-rings-the-return-of-the-king-2003",
                "imdb": "tt0167260",
                "tmdb": 122
            }
        },
        {
            "title": "The Lord of the Rings: The Two Towers",
            "year": 2002,
            "ids": {
                "trakt": 373,
                "slug": "the-lord-of-the-rings-the-two-towers-2002",
                "imdb": "tt0167261",
                "tmdb": 121
            }
        },
        {
            "title": "The Matrix",
            "year": 1999,
            "ids": {
                "trakt": 269,
                "slug": "the-matrix-1999",
                "imdb": "tt0133093",
                "tmdb": 603
            }
        }
    ]

    return (
        <HistoryWrapper>
            <TouchableOpacity onPress={expand}>
                <HistoryTopContainer>
                    <Octicons color={colors.white} name={'history'} size={20} style={{ flex: 1.5 }} />
                    <Text style={{ flex: 9, fontWeight: 'bold' }}>Tuesday April 12, 2022</Text>
                    <Text style={{ flex: 5 }}>1 hour, 12 mins</Text>
                    <Animated.View style={{ transform: [{ rotate: spin }], alignItems: 'center', flex: 1 }}>
                        <Octicons color={colors.white} name={'chevron-up'} size={17} />
                    </Animated.View>
                </HistoryTopContainer>
            </TouchableOpacity>
            <View style={!open ? { height: 0 } : undefined}>
                <HistoryMainContiner>
                    
                </HistoryMainContiner>
            </View>
        </HistoryWrapper>
    )
}

export default HistoryContainer