import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Statistics from "../pages/Statistics";
import Home from "../pages/Home";
import Chat from "../pages/Chat";
import Profile from "../pages/Profile";
import Exercises from "../pages/Exercises";
import SplashScreen from "../pages/SplashScreen";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";

import ChestShoulder from "../pages/Exercises/ChestsHoulder";
import Quadriceps from "../pages/Exercises/Quadriceps";
import BicepsTriceps from "../pages/Exercises/BicepsTriceps";
import HamstringButtocks from "../pages/Exercises/HamstringButtocks";
import BackTrapeze from "../pages/Exercises/BackTrapeze";

export const BottomRoute  = () => {
   const Tab = createBottomTabNavigator();   

return(
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#fff',
                tabBarShowLabel: false,
                tabBarStyle:{
                    position: 'absolute',
                    backgroundColor: '#333333',
                    borderTopWidth: 0,

                    bottom: 15,
                    left: 15,
                    right: 15,
                    elevation: 0,
                    borderRadius: 10,
                    height: 60,
                }

            }}>
            <Tab.Screen 
                name="Exercises" 
                component={Exercises} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, focused }) => {
                        if(focused) {
                            return <Ionicons name="barbell" size={size} color={'#7CB7ED'} />
                        }

                        return  <Ionicons name="barbell" size={size} color={'#fff'} />
                    }
                }}
            />
            <Tab.Screen 
                name="Statistics" 
                component={Statistics}options={{
                    headerShown: false,
                    tabBarIcon: ({ size, focused }) => {
                        if(focused) {
                            return <MaterialCommunityIcons name="align-vertical-bottom" size={size} color={'#7CB7ED'} />
                        }

                        return  <MaterialCommunityIcons name="align-vertical-bottom" size={size} color={'#fff'} />
                    }
                }}
            />
            <Tab.Screen 
                name="Home"
                component={Home} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, focused }) => {
                        if(focused) {
                            return <Ionicons name="home" size={size} color={'#7CB7ED'} />
                        }

                        return  <Ionicons name="home-outline" size={size} color={'#fff'} />
                    }
                }}/>
            <Tab.Screen 
                name="Chat" 
                component={Chat}options={{
                    headerShown: false,
                    tabBarIcon: ({ size, focused }) => {
                        if(focused) {
                            return <Ionicons name="chatbubble" size={size} color={'#7CB7ED'} />
                        }

                        return  <Ionicons name="chatbubble-outline" size={size} color={'#fff'} />
                    }
                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={Profile} options={{
                    headerShown: false,
                    tabBarIcon: ({ size, focused }) => {
                        if(focused) {
                            return <Ionicons name="person" size={size} color={'#7CB7ED'} />
                        }

                        return  <Ionicons name="person-outline" size={size} color={'#fff'} />
                    }
                }}
            />
        </Tab.Navigator>
    )
};

export const Routes = () => {
const Stack = createNativeStackNavigator();
    return (
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Exercises" component={BottomRoute} />
                <Stack.Screen name="Statistics" component={BottomRoute} />
                <Stack.Screen name="Home" component={BottomRoute} />
                <Stack.Screen name="Chat" component={BottomRoute} />
                <Stack.Screen name="Profile" component={BottomRoute} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Cadastro" component={Cadastro} />

                
                <Stack.Screen name="ChestShoulder" component={ChestShoulder} />
                <Stack.Screen name="Quadriceps" component={Quadriceps} />
                <Stack.Screen name="BicepsTriceps" component={BicepsTriceps} />
                <Stack.Screen name="HamstringButtocks" component={HamstringButtocks} />
                <Stack.Screen name="BackTrapeze" component={BackTrapeze} />
            </Stack.Navigator>
   
    )
}
