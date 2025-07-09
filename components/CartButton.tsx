import { View, Text, TouchableOpacity, Image, ImageProps } from 'react-native'
import React from 'react'

interface CartButtonProps {
    btnText: string;
    icon:ImageProps
    totalItems: number;
}

const CartButton = ({btnText="Cart Button",icon,totalItems = 10}:CartButtonProps) => {

  return (
    <TouchableOpacity className='cart-btn' onPress={()=>{

    }}>
        <Image source={icon} className="size-5" resizeMode='contain'/>
       

       {totalItems > 0 && (
        <View className='cart-badge'>
        <Text className="small-bold text-white">
            {totalItems}
        </Text>
        </View>
       )}
    </TouchableOpacity>
  )
}

export default CartButton