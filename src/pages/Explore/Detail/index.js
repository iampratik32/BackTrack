import React from 'react'
import {View, Text} from 'react-native'
import {DetailImage} from '../../../assets/globalStyle'
import {styles} from './style'

const Detail = ({route, navigation}) => {
  const {data} = route.params;
  console.log("this is route param", data.item)
return (
  <View style={styles.container}>
    <DetailImage source = {require('../../../images/bosch.jpg')}/>
  <View style = {styles.textContainer}>
    <Text style={styles.title}>
      {data.item.title}
    </Text>

    </View>
  </View>

)


}
export default Detail
