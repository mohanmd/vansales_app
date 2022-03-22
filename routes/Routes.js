import { createStackNavigator } from '@react-navigation/stack';
import Home from '../src/core/Home';
import Login from '../src/core/Login';

import React from 'react';
const Stack = createStackNavigator();
const Routes = () => {
return (
<Stack.Navigator  screenOptions={{ headerShown: false}}>
  {/* <Stack.Screen name="Login" component={Login} /> */}
  <Stack.Screen name="Home" component={Home} />
</Stack.Navigator>
)
}
export default Routes