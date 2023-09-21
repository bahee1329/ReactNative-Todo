import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../constants/index'
import {Home,Archive,Update,Password} from '../screens/index'


const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 70
    }
}

const BottomtabNaivigation = () => {
    return (
        <Tab.Navigator screenOptions={screenOptions} >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <Ionicons name={focused ? "home" : "home-outline"}
                            size={24}
                            color={focused ? COLORS.primary : COLORS.gray2} />
                    }
                }}
            />

            <Tab.Screen
                name="Update"
                component={Update}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <Ionicons name={focused ? "bandage" : "bandage-outline"}
                            size={24}
                            color={focused ? COLORS.primary : COLORS.gray2} />
                    }
                }}
            />

            <Tab.Screen
                name="Password"
                component={Password}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <Ionicons name={focused ? "archive" : "archive-outline"}
                            size={24}
                            color={focused ? COLORS.primary : COLORS.gray2} />
                    }
                }}
            />

        </Tab.Navigator>
    )
}

export default BottomtabNaivigation

