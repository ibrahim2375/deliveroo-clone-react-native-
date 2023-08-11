import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
//styles
import {Styles} from '../styles/CategoryCardStyles'
const CategoryCard = ({imgUrl , title}) => {
  return (
   <TouchableOpacity style={Styles.categoryStyle}>
     <Image 
     style={Styles.CategoryImg}
     source={{
        uri: imgUrl,
     }}
     />
     <Text  style={Styles.CategoryTitle} >{title}</Text>
   </TouchableOpacity>
  )
}

export default CategoryCard