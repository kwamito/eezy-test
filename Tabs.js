import { createBottomTabNavigator,BottomTab } from '@react-navigation/bottom-tabs';
import React from 'react';
import Login from './Login';
import RecipeHome from './recipeHome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Awe from 'react-native-vector-icons/dist/FontAwesome5';
import RecipeDetail from './recipeDetail';
import Search from './Search';
import SearchByIngredient from "./SearchByIngredient"
import { createStackNavigator } from '@react-navigation/stack';
import {createAppContainer} from 'react-navigation'
import { NavigationContainer } from '@react-navigation/native';

// const Out = createStackNavigator({
//     SearchByIngredient: {
//         screen: SearchByIngredient
//     },
//     Search: {
//         screen:Search
//     }
// })

// const Tabs = createBottomTabNavigator({
//     Search: Out,
//     RecipeDetail:RecipeDetail,
//     Login:Login,
//     RecipeHome:RecipeHome
// },{initialRouteName:RecipeHome});

// export default createAppContainer(Tabs)

const Tab = createBottomTabNavigator()


const Stack = createStackNavigator();
const SearchScreens = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Recipe'}>
                <Stack.Screen name="Search" component={Search} />

                <Stack.Screen name="Ingredient" component={RecipeDetail} />
            </Stack.Navigator>

        </NavigationContainer>
    );
};

const Tabs = () => {
    return (
        <Tab.Navigator
        //tabBar={props => <BottomTab {...props} state={{...props.state, routes: props.state.routes.slice(0,4)}}></BottomTab>}
            screenOptions={({ route }) => ({
                tabBarButton: [
                    "SearchByIngredient",
                ].includes(route.name)
                    ? () => {
                        return null;
                    }
                    : undefined,
            })}
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: 'white',
                    borderRadius: 6,
                    height: 60,
                },
            }}>
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Icon
                                name="home"
                                color={focused ? '#FF5C00' : 'black'}
                                size={25}
                            />
                        );
                    },
                }}
                name="Home"
                component={RecipeHome}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Icon
                                name="list"
                                color={focused ? '#FF5C00' : 'black'}
                                size={25}
                            />
                        );
                    },
                }}
                name="List"
                component={Login}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Icon
                                name="rocket"
                                color={focused ? '#FF5C00' : 'black'}
                                size={25}
                            />
                        );
                    },
                }}
                name="Details"
                component={RecipeDetail}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Awe
                                name="search"
                                color={focused ? '#FF5C00' : 'black'}
                                size={25}
                            />
                        );
                    },
                }}
                name="Login"
                component={Search}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Awe
                                name="fire"
                                color={focused ? '#FF5C00' : 'black'}
                                size={25}
                            />
                        );
                    },
                }}
                name="Trending"
                component={RecipeHome}
            />

            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Awe
                                name="search"
                                color={focused ? '#FF5C00' : 'black'}
                                size={25}
                            />
                        );
                    },
                }}
                name="SearchByIngredient"
                component={SearchByIngredient}
            />
        </Tab.Navigator>
    );
};

export default Tabs;
