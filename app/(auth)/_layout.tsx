import { images } from '@/constants';
import { Slot } from 'expo-router';
import React from 'react';
import { Platform,KeyboardAvoidingView, ScrollView, View, Dimensions, ImageBackground, Image } from 'react-native';


const screenHeight = Dimensions.get('screen').height;

const _Layout = () => {
    return (
        <KeyboardAvoidingView behavior={Platform.select({ios:'padding',android:'height'})}>
          <ScrollView className='bg-white h-full' keyboardShouldPersistTaps='handled'>
                <View className='w-full relative' style={{height: screenHeight / 2.25}}>
                    <ImageBackground source={images.loginGraphic} className='size-full rounded-b-lg' resizeMode='stretch'/>
                    <Image source={images.logo} className='self-center size-48 absolute -bottom-16 z-10'/>
                </View>
                <Slot/>
          </ScrollView>   
      
        </KeyboardAvoidingView>
    );
}


export default _Layout;
