import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import FeedScreen from '../screens/FeedScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

// @ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';
// @ts-ignore
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {SCREEN} from '../constants/Screens';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Feed">
      <BottomTab.Screen
        name={SCREEN.FEED}
        component={FeedNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <SimpleLineIcons name="feed" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name={SCREEN.FAVORITES}
        component={FavoritesNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <TabBarIcon name="heart-outline" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {name: string; color: string}) {
  return <Ionicons size={30} style={{marginBottom: -3}} {...props} />;
}

const FeedStack = createStackNavigator();

function FeedNavigator() {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen
        name={SCREEN.FEED_SCREEN}
        component={FeedScreen}
        options={{headerTitle: 'Unsplash Feed'}}
      />
    </FeedStack.Navigator>
  );
}

const FavoritesStack = createStackNavigator();

function FavoritesNavigator() {
  return (
    <FavoritesStack.Navigator>
      <FavoritesStack.Screen
        name={SCREEN.FAVORITES_SCREEN}
        component={FavoritesScreen}
        options={{headerTitle: 'Favorites'}}
      />
    </FavoritesStack.Navigator>
  );
}
