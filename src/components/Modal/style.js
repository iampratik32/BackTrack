import styled from 'styled-components/native'
import { colors } from '../../assets/colors';
import { FlexHorizontal, FlexVertical, GlobalText } from '../../assets/globalStyle';
import { size } from '../../utils/device';
const width = size().width
const height = size().height

export const CenteredView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`
export const ModalView = styled(FlexVertical)`
    background-color: ${colors.darkBlueGrey};
    align-items: center;
    padding: ${height*0.01}px;
`