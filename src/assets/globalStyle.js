import styled from 'styled-components/native'
import { size } from '../utils/device'
import { colors } from './colors'
const height = size().height
const width = size().width

export const FlexVertical = styled.View`
    display: flex;
    flex-direction: column;
`
export const FlexHorizontal = styled.View`
    display: flex;
    flex-direction: row;
`

export const SafeView = styled.SafeAreaView`
    flex: 1;
    background-color: ${colors.materialBlack};
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
    font-weight: ${p => p.weight ? p.weight : 100};
    font-size: ${p => p.fontSize ? p.fontSize : '16px'};
`
export const DetailImage = styled.Image`
    width:100%;
    height:200px;

`
export const OkButton = styled.Pressable`
    padding: ${height * 0.01}px;
    flex-direction: row;
    border-radius: 10px;
    border: 1px solid ${colors.rating};
    margin: ${height * 0.01}px;
`
export const LoadingContainer = styled.View`
    margin: ${height * 0.01}px;
`
export const RadiusView = styled.View`
    border-radius: 10px;
    overflow: hidden;
    margin-right: 5px;
    margin-top: 5px;
`
export const StatsCard = styled(FlexHorizontal)`
    display: flex;
    width: auto;
    padding: ${height * 0.01}px;
    margin: ${height * 0.01}px;
    flex-direction: row;
    justify-content: center;
`