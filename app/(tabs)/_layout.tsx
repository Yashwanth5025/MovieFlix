import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'

const TabIcon = ({focused, text, icon} : any) => {
    if(focused) {
        return (
            <ImageBackground source={images.highlight} className='flex flex-row flex-1 min-w-[112px] min-h-16 justify-center items-center rounded-full overflow-hidden w-full mt-3'>
                <Image source={icon} tintColor="#151312" className='size-5'/>
                <Text className='text-secondary text-base font-semibold ml-2'>{text}</Text>
            </ImageBackground>
        )
    }
    return (
        <View className='size-full items-center justify-center mt-4 rounded-full'>
            <Image source={icon} tintColor="#A8B5DB" className='size-5'/>
        </View>
    )
}

const _layout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarItemStyle: {
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center'
            },
            tabBarStyle: {
                backgroundColor: '#0f0D23',
                borderRadius: 50,
                marginHorizontal: 20,
                marginBottom: 36,
                height: 51,
                position: 'absolute',
                overflow: 'hidden',
                borderWidth: 0.3,
                borderColor: '0f0d23'
            }
        }}  
    >
        <Tabs.Screen 
            name='index'
            options={{title: 'Home', headerShown: false, tabBarIcon: ({focused}) => (
                <TabIcon focused={focused} text='Home' icon={icons.home} />
            )}}
        />
        <Tabs.Screen 
            name='search'
            options={{title: 'Search', headerShown: false, tabBarIcon: ({focused}) => (
                <TabIcon focused={focused} text='Search' icon={icons.search} />
            )}}
        />
        <Tabs.Screen 
            name='saved'
            options={{title: 'Saved', headerShown: false, tabBarIcon: ({focused}) => (
                <TabIcon focused={focused} text='Saved' icon={icons.save} />
            )}}
        />
        <Tabs.Screen 
            name='profile'
            options={{title: 'Profile', headerShown: false, tabBarIcon: ({focused}) => (
                <TabIcon focused={focused} text='Profile' icon={icons.person} />
            )}}
        />
    </Tabs>
  )
}

export default _layout