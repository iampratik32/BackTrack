import styled from 'styled-components/native'
import { colors } from '../../assets/colors';
import { FlexHorizontal, FlexVertical, GlobalText } from '../../assets/globalStyle';
import { size } from '../../utils/device';
const width = size().width
const height = size().height

export const MovieGrid = styled(FlexVertical)`
    height: auto;
    width: 170px;
    margin-right: 10px;
    position: relative;
    background-color: ${colors.materialBlack};
`
export const Poster = styled.Image`
    height: 265px;
    width: 100%;
`
export const PosterFooter = styled(FlexHorizontal)`
    height: 41px;
`
export const PosterIconWrapper = styled.TouchableOpacity`
    flex: ${p => p.flex ? p.flex : 1};
    flex-direction: row;
    background-color: ${p => p.back ? p.back : colors.black};
    align-items: center;
    justify-content: center;
`
export const PosterTitleWrapper = styled.View`
    align-items: center;
`
export const PosterTitle = styled.Text`
    padding-top: ${height * 0.005}px;
    font-weight: ${p => p.bold ? 'bold' : 100};
    font-size: 14px;
    overflow: hidden;
    letter-spacing: 0.2px;
    color: ${colors.white};
`

export const PosterRating = styled(FlexHorizontal)`
    width: 0;
    height: 0;
    border-style: solid;
    border-right-width: 30px;
    border-bottom-width: 30px;
    border-right-color: ${colors.ratingBack};
    border-left-color: transparent;
    border-top-color: transparent;
    border-bottom-color: transparent;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
`

export const MovieRating = styled(GlobalText)`
    font-size: 12px;
    top: 0;
    text-align: center;
    width: 15px;
    height: 30px;
    right: -22px;
    z-index: 15;
    line-height: 13px;
    transform: rotate(45deg);
    position: absolute;
    color: ${colors.white};
    font-weight: bold;
`