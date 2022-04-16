import React from 'react'
import Modal from "react-native-modal"
import { colors } from '../../assets/colors'
import { CenteredView, ModalView } from './style'

const MainModal = ({ visible,  hide, data }) => {

    return (
        <CenteredView>
            <Modal animationIn={'slideInLeft'} animationOut={'slideOutRight'} isVisible={visible} onBackdropPress={hide} onBackButtonPress={hide} backdropColor={colors.black} backdropOpacity={0.5}>
                <ModalView>
                    {data}
                </ModalView>
            </Modal>
        </CenteredView>
    )
}

export default MainModal