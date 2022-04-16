import styled from 'styled-components/native'
import { colors } from '../../assets/colors';
import { FlexHorizontal, FlexVertical } from '../../assets/globalStyle';
import { size } from '../../utils/device';
const width = size().width
const height = size().height

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
    padding: ${height * 0.01}px;
    height: ${p => p.closed ? '0px' : 'undefined'};
`