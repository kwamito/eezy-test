/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import {creaeAppContainer, createSwitchNavigator} from 'react-navigation'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from './Login';
import RecipeHome from './recipeHome';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import RecipeDetail from './recipeDetail';
import Tabs from './Tabs';

import SearchByIngredient from "./SearchByIngredient"

//const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    // <Tab.Navigator>
    //   <Tab.Screen name="Home" component={RecipeHome} />
    //   <Tab.Screen name="Settings" component={Login} />
    // </Tab.Navigator>
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

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


const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName={'Recipe'}>
        <Stack.Screen name="Home" component={RecipeHome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Search" component={Tabs} />
        <Stack.Screen
          name="Recipe"
          component={RecipeHome}
          options={{
            title: 'Home', //Set Header Title
            headerStyle: {
              backgroundColor: '#d8d8d8', //Set Header color
            },
            headerTintColor: 'black', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
            headerRight: () => (
              <Icon
                name="search"
                style={{marginRight: 10}}
                size={25}
                color="#FF5C00"
              />
            ),
          }}
        />
        <Stack.Screen name="Details" component={RecipeDetail} />
      </Stack.Navigator>
       */}
       <Tabs />
    </NavigationContainer>
  );
};

export default App;
