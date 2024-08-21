import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import CustomButton from '@/components/CustomButton'
import { Link, router } from 'expo-router'

type Props = {}

const Welcome = (props: Props) => {

    const handleLoginPress = () => {
        router.replace("/(auth)/sign-in")
    }
  return (
    <SafeAreaView className='flex-1'>
        <View className='flex-1 justify-center items-center'>
            <Image source={images.logo} resizeMode='contain' />
            <Text className='mt-5 text-[24px] text-primary font-StratosBold'>Great taste, better delivery</Text>

            <View className='mt-[100px]'>
                <CustomButton title='Login' loading={false} handlePress={handleLoginPress}/>
                <View className='flex mt-2 flex-row justify-center'>
                    <Text className='font-Stratos'>Don't have an account?, </Text>
                    <Link href='/(auth)/sign-up'>
                        <Text className='text-primary underline font-Stratos'>register here</Text>
                    </Link>
                    
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Welcome