import styled from 'styled-components/native'
import { FlexHorizontal } from '../../../assets/globalStyle';
import { size } from '../../../utils/device';
const width = size().width
const height = size().height

export const StatsCard = styled(FlexHorizontal)`
    display: flex;
    width: auto;
    padding: ${height * 0.01}px;
    margin: ${height * 0.01}px;
    flex-direction: row;
    justify-content: center;
`

