import { View, Text } from 'react-native'
import React from 'react'
import { Tabs, useRouter } from 'expo-router'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../config/FirebaseConfig';
export default function TabLayout() {

    const router=useRouter();
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          console.log(uid)
          // ...
        } else {
          // User is signed out
          router?.push('/login')
          // ...
        }
      });
      
  return (
    <Tabs screenOptions={{
        headerShown:false
    }}>
        <Tabs.Screen name="index"
            options={{
                tabBarLabel:'Home',
                tabBarIcon:({color,size})=>(
                    <FontAwesome5 name="home" size={24} color={color} />
                )
            }}
        />
        <Tabs.Screen name="AddNew"
            options={{
                tabBarLabel:'Add New',
                tabBarIcon:({color,size})=>(
                    <FontAwesome5 name="plus-square" size={24} color={color} />
                )
            }}/>
        <Tabs.Screen name="Profile"
            options={{
                tabBarLabel:'Profile',
                tabBarIcon:({color,size})=>(
                    <FontAwesome5 name="user" size={24} color={color} />
                )
            }}/>
    </Tabs>
  )
}