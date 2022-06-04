import { TouchableOpacity, ImageBackground } from 'react-native-gesture-handler'
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
    padding: ${p => p.np ? 0 : '5%'};
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

export const HistoryWrapper = styled(FlexVertical)`
    background-color: ${colors.materialBlack};
`

export const HistoryTopContainer = styled(FlexHorizontal)`
    background-color: ${colors.darkBlueGrey};
    align-items: center;
    border-radius: 10px;
    padding: ${height * 0.01}px;
`
export const HistoryMainContiner = styled(FlexVertical)`
    height: ${p => p.closed ? '0px' : 'undefined'};
    opacity: ${p => p.hide ? 0 : 1};
    margin-bottom: ${height * 0.005}px;
    margin-top: ${height * 0.005}px;
`

export const FriendsItemWrapper = styled(TouchableOpacity)`
    background-color: ${colors.blueGreyDark};
    flex-direction: row;
    marginBottom: 10px;
    paddingTop: 10px;
    paddingLeft: 5px;
    paddingBottom: 10px; 
    paddingRight: 5px;
`
export const ProfileBack = styled.ImageBackground`
    height: ${height * 0.3}px;
    justify-content: flex-end;
    padding: ${width * 0.05}px;
`
export const ProfileInfo = styled(FlexVertical)`
    margin-left: ${width*0.05}px;
    justify-content: center;
`

export const ActionSheetButton = styled.Pressable`
    width: 100%;
    flex-direction: row;
    font-weight: bold;
    align-items: center;
    background-color: ${colors.darkBlueGrey};
    padding-top: ${height*0.02}px;
    padding-bottom: ${height*0.02}px;
    padding-left: ${width*0.05}px;
`