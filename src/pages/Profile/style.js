import styled from 'styled-components/native'
import { colors } from '../../assets/colors';
import { size } from '../../utils/device';
import { ImageBackground } from "react-native";
import { FlexHorizontal, FlexVertical, GlobalText } from '../../assets/globalStyle';

const width = size().width
const height = size().height
export const CardView = styled(FlexVertical)`
    /* border-radius: 20%; */
    padding-left: ${width * 0.03}px;
    padding-right: ${width * 0.03}px;
    padding-bottom: ${height * 0.01}px;
    padding-top: ${height * 0.01}px;
    background-color: ${colors.darkBlueGrey};
    flex: 1;
`
export const AvatarContainer = styled.View`
    flex: 1;
    align-items: center;
`

export const Avatar = styled.Image`
    width: 95px;
    height: 95px;
    border-radius: ${(width + height) / 2}px;
`

export const AvatarDetailContainer = styled(FlexVertical)`
    flex: 3;
    padding-left: ${width * 0.03}px;
`

export const AvatarName = styled.Text`
    font-size: 20px;
    flex: 9;
    font-weight: bold;
`

export const AvatarStatContainer = styled(FlexHorizontal)`
    align-items: center;
    justify-content: space-around;
    flex: 1;
    margin-top: ${height * 0.02}px;
`
export const AvatarStatWrapper = styled(FlexVertical)`
    align-items: center;
`

export const StatText = styled(GlobalText)`
    margin-top: ${height * 0.005}px;
`

export const CardBackground = styled(ImageBackground)`
    height: ${height * 0.13}px;
    display: flex;
    justify-content: flex-end;
    padding: ${height*0.01}px;
    margin-bottom: ${height * 0.015}px;
`
