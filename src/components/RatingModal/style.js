import styled from 'styled-components/native'
import { colors } from '../../assets/colors';
import { OkButton } from '../../assets/globalStyle';
import { size } from '../../utils/device';

const width = size().width
const height = size().height

export const CheckButton = styled(OkButton)`
    background-color: ${colors.redButton};
    padding: 0px;
    padding-left: ${height * 0.01}px;
    padding-right: ${height * 0.01}px;
    padding-top: ${height * 0.006}px;
    padding-bottom: ${height * 0.006}px;
    border-radius: 0;
`

export const BContainer = styled.View`
    flex:1;
    align-items: center;
`