import React from 'react';

import Home from './screens/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Detail from './screens/Detail';

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'ANOTAÇÕES',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Details"
        component={Detail}
        options={{
          title: 'ANOTAÇÃO',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};
