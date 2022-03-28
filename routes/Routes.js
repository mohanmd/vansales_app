import { createStackNavigator } from '@react-navigation/stack';
import Home from '../src/core/Home';
import Login from '../src/core/Login';
import SaleOrder from '../src/core/SaleOrder';
import saleOrderCreate from '../src/core/SaleOrder/saleOrderCreate';
import Orderlist from '../src/core/SaleOrder/Orderlist';
import DeliveryDetail from '../src/core/DeliveryPlaning/DeliveryDetail';
import Details from '../src/core/Invoice/Details';
import DeliveryRoute from '../src/core/DeliveryPlaning/DeliveryRoute';
import CollectionList from '../src/core/CashCollection/CollectionList';


import React from 'react';
const Stack = createStackNavigator();
const Routes = () => {
return (
<Stack.Navigator  screenOptions={{ headerShown: false}}>
  <Stack.Screen name="Login" component={Login} />
  <Stack.Screen name="Home" component={Home} />
  <Stack.Screen name="SaleOrder" component={SaleOrder} />
  <Stack.Screen name="Orderlist" component={Orderlist} />
  <Stack.Screen name="DeliveryDetail" component={DeliveryDetail} />
  <Stack.Screen name="Details" component={Details} />
  <Stack.Screen name="DeliveryRoute" component={DeliveryRoute} />
  <Stack.Screen name="CollectionList" component={CollectionList} />

</Stack.Navigator>
)
}
export default Routes