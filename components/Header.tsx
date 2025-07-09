import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';


const Header = ({ icon,rightButton = null }: any) => {
  return (
    <View className="flex-between flex-row w-full my-5 px-5">
      <View className="flex-start">
        <Text className="small-bold text-primary">{'Deliver to'}</Text>
        <TouchableOpacity className="flex-center flex-row gap-x-2 mt-0.5">
          <Text className="paragraph-bold text-dark-100">{'Israel'}</Text>
          <Image source={icon} className="size-3" resizeMode="contain" />
        </TouchableOpacity>
      </View>
    {rightButton}
    </View>
  );
};

export default Header;
