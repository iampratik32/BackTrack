import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { HeaderText, VSpacer, MainView } from '../../assets/globalStyle'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import { keyExtractor } from 'react-native/Libraries/Lists/VirtualizeUtils';
import ListContainer from '../../components/ListContainer';

const Explore = ({navigation}) => {
  const [landscape, setLandscape] = useState(false)

  const windowWidth = useWindowDimensions().width
  const windowHeight = useWindowDimensions().height

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

  useEffect(() => {
    windowHeight < windowWidth ? setLandscape(true) : setLandscape(false)
  }, [windowWidth, windowHeight])

  return (
    <MainView landscape={landscape}>
      <HeaderText>Explore</HeaderText>
      <VSpacer rem={25} />
      <ListContainer title={'Popular Movies'} data={data} />
      <ListContainer title={'Trending Movies'} data={data} />
      <ListContainer title={'Popular Shows'} data={data} />
      <ListContainer title={'Trending Shows'} data={data} />
    </MainView>
  )
}

export default Explore
