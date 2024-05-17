import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeStack from "./stacks/homeStack";
import Ionicons from '@expo/vector-icons/Ionicons';
import SearchStack from "./stacks/searchStack";
import FavouritesStack from "./stacks/favouritesStack";
import HistoryStack from "./stacks/historyStack";

const Tab = createBottomTabNavigator();


export function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Start"
                component={HomeStack}
                options={{
                    tabBarIcon: ({focused}) => { return <Ionicons name={focused ? "home" : "home-outline"} size={26} color="#FF7000"/>},
                    tabBarActiveTintColor: "#FF7000",
                    tabBarInactiveBackgroundColor: "#FFFFF"
                }}></Tab.Screen>
            <Tab.Screen
                name="Search"
                component={SearchStack}
                options={{
                    tabBarIcon: ({focused}) => { return <Ionicons name={focused ? "search" : "search-outline"} size={26} color="#FF7000"/>},
                    tabBarActiveTintColor: "#FF7000",
                    tabBarInactiveBackgroundColor: "#FFFFF"
                }}></Tab.Screen>
            <Tab.Screen
                name="Favourites"
                component={FavouritesStack}
                options={{
                    tabBarIcon: ({focused}) => { return <Ionicons name={focused ? "heart" : "heart-outline"} size={26} color="#FF7000"/>},
                    tabBarActiveTintColor: "#FF7000",
                    tabBarInactiveBackgroundColor: "#FFFFF"
                }}>
            </Tab.Screen>
            <Tab.Screen
                name="History"
                component={HistoryStack}
                options={{
                    tabBarIcon: ({focused}) => { return <Ionicons name={focused ? "time" : "time-outline"} size={26} color="#FF7000"/>},
                    tabBarActiveTintColor: "#FF7000",
                    tabBarInactiveBackgroundColor: "#FFFFF"
                }}>
            </Tab.Screen>
        </Tab.Navigator>
    )
}