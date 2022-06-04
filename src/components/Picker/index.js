import { View, Text, ActionSheetIOS, Platform } from 'react-native'
import React from 'react'
import { Picker as RnPicker } from '@react-native-picker/picker'
import { colors } from '../../assets/colors'
import { ActionSheetButton, RadiusView } from '../../assets/globalStyle'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Picker = ({ value, setValue, list }) => {

    const AndroidPicker = () => {
        return (
            <RnPicker dropdownIconRippleColor={colors.white} dropdownIconColor={colors.white}
                style={{ color: colors.white, backgroundColor: colors.darkBlueGrey }} selectedValue={value} onValueChange={v => setValue(v)} mode={'dropdown'}>
                {list.map((v, i) => <RnPicker.Item label={v} value={v} key={i} />)}
            </RnPicker>
        )
    }

    const IosPicker = () => {
        return (
            <ActionSheetButton onPress={openActionSheet}>
                <Text style={{color:colors.white, flex: 10}}>{value}</Text>
                <FontAwesome style={{justifyContent: 'flex-end', flex:1}} size={15} name='caret-down' color={colors.white}/>
            </ActionSheetButton>
        )
    }

    const openActionSheet = () =>
        ActionSheetIOS.showActionSheetWithOptions(
            {
                options: [...list, "Cancel"],
                cancelButtonIndex: list.length,
                userInterfaceStyle: 'dark'
            },
            i => {
                if (i !== list.length) setValue(list[i])
            }
        )

    return (
        <RadiusView>
            {Platform.OS === "ios" ? <IosPicker /> : <AndroidPicker />}
        </RadiusView>

    )
}

export default Picker