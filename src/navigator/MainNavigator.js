import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
 
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
 
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
 
// Tab navigator for logged-in users
const StartScreen = () => (
  <Tab.Navigator initialRouteName="Home">
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: ({ focused }) => (
          <Text style={{ color: focused ? 'purple' : 'grey', fontSize: 12 }}>
            Home
          </Text>
        ),
        tabBarIcon: ({ focused }) => (
          <Icon
            name="home"
            type="material-community"
            color={focused ? 'purple' : 'grey'}
            size={24}
          />
        ),
        tabBarLabelPosition: 'below-icon',
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: 'lavender' },
        headerTitle: 'Social Media',
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: ({ focused }) => (
          <Text style={{ color: focused ? 'purple' : 'grey', fontSize: 12 }}>
            Profile
          </Text>
        ),
        tabBarIcon: ({ focused }) => (
          <Icon
            name="account"
            type="material-community"
            color={focused ? 'purple' : 'grey'}
            size={24}
          />
        ),
        tabBarLabelPosition: 'below-icon',
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: 'lavender' },
        headerTitle: 'Profile',
      }}
    />
  </Tab.Navigator>
);
 
const MainNavigator = () => {
  // Conditional navigation based on login state
  const isLogin = useSelector((store) => store.profileReducer.isLogin);
 
  return (
    <NavigationContainer>
      {isLogin ? (
        // Logged in — show tabs only
        <Stack.Navigator initialRouteName="Start">
          <Stack.Screen
            name="Start"
            component={StartScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : (
        // Not logged in — show login / register
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ headerTitleAlign: 'center', headerLeft: () => null }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
 
export default MainNavigator;