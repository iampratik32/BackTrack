import { View, Text } from 'react-native'
import React from 'react'
import { Picker as RnPicker } from '@react-native-picker/picker'
import { colors } from '../../assets/colors'
import { RadiusView } from '../../assets/globalStyle'

const Picker = ({ value, setValue, list }) => {
    return (
        <RadiusView>
            <RnPicker dropdownIconRippleColor={colors.white} dropdownIconColor={colors.white}
                style={{ color: colors.white, backgroundColor: colors.darkBlueGrey }} selectedValue={value} onValueChange={v => setValue(v)} mode={'dropdown'}>
                {list.map((v, i) => <RnPicker.Item label={v} value={v} key={i} />)}
            </RnPicker>
        </RadiusView>

    )
}

export default Picker