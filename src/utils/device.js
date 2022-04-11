import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import { Dimensions } from 'react-native'

export const size = () => {
    return { width: Dimensions.get('screen').width, height: Dimensions.get('screen').height }
}

export const isLandscape = () => {
    return Dimensions.get('screen').width >= Dimensions.get('screen').height
}