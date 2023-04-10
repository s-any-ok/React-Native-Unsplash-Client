import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';

import NotFoundScreen from '../screens/NotFoundScreen';
import ViewImageScreen from '../screens/ViewImageScreen';
import BottomTabNavigator from './BottomTabNavigator';
import {SCREEN} from '../constants/Screens';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREEN.ROOT} component={BottomTabNavigator} />
      <Stack.Screen name={SCREEN.VIEW_IMAGE} component={ViewImageScreen} />
      <Stack.Screen
        name={SCREEN.NOT_FOUND}
        component={NotFoundScreen}
        options={{title: 'Oops!'}}
      />
    </Stack.Navigator>
  );
}
