import styled from 'styled-components/native'
import { size } from '../utils/device'
import { colors } from './colors'

export const FlexVertical = styled.View`
    display: flex;
    flex-direction: column;
`
export const FlexHorizontal = styled.View`
    display: flex;
    flex-direction: row;
`

export const MainView = styled.ScrollView`
    flex-direction: column;
    background-color: ${colors.materialBlack};
    padding: ${p => p.landscape ? '1%' : '5%'};
    display: flex;
    flex: 1;
`

export const HeaderText = styled.Text`
    font-size: ${p => p.size ? p.size : '32px'};
    color: ${colors.white};
    letter-spacing: 0.4px;
    font-weight: bold;
`
export const MovieCard = styled.View`
    height: 270px;
    width: 150px;
    background-color: ${colors.blueGreyDark};
    position: relative;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
`

export const CardText = styled.Text`
    padding: 6px;
    font-size: 16px;
    overflow: hidden;
    letter-spacing: 0.2px;
    color: ${colors.white};
`

export const CardImage = styled.Image`
    width: 100%;
    height: 225px;
`

export const VSpacer = styled.View`
    margin-top: ${p => `${p.rem}px`};
`
export const HSpacer = styled.View`
    margin-right: ${p => `${p.rem}px`};
`

export const ComponentTitle = styled.Text`
    font-size: 24px;
    color: ${colors.white};
    letter-spacing: 0.4px;
    font-weight: bold;
`

export const CardViewer = styled(FlexHorizontal)`
    position: absolute;
    z-index: 2;
    align-items: center;
    padding: 7px;
    border-radius: 20px;
    background-color: ${colors.blueGreyDark};
    top: 4px;
    right: 4px;
`
export const GlobalText = styled.Text`
    color: ${p => p.color ? p.color : colors.white};
    font-size: ${p => p.fontSize ? p.fontSize : '16px'};
`
export const DetailImage = styled.Image`
width:100%;
height:200px;



`
