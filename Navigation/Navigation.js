import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screen/Home';
import MeetingRoom from '../Screen/MeetingRoom';

const Navigation = () => {
    const Stack= createNativeStackNavigator();
    return (
        <View>
           <NavigationContainer>

            <Stack.Navigator intialRoutName={Home}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="MeetingRoom" component={MeetingRoom} />
            </Stack.Navigator>



           </NavigationContainer>
        </View>
    )
}

export default Navigation
