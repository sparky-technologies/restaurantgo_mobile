import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'

type Props = {}

const Welcome = (props: Props) => {
  return (
    <SafeAreaView className='flex-1'>
        <View className='flex-1 justify-center items-center'>
            <Image source={images.logo} resizeMode='contain' />
            <Text className='mt-5 text-[24px] text-primary font-StratosBold'>Great taste, better delivery</Text>
        </View>
    </SafeAreaView>
  )
}

export default Welcome