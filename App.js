
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './Screen/Dashboard';
import Product from './Screen/Product';
import Accordian from './Screen/Accordian';


// import Product from './Screen/Product';

const Stack = createNativeStackNavigator();

export default function App() {
  return ( 
<NavigationContainer>
     <Stack.Navigator>     
     <Stack.Screen
        name="DashBoard"
        component={Dashboard}
        options={{headerShown: false }}>        
      </Stack.Screen>
      <Stack.Screen
        name="Product"
         component={Product}>
      </Stack.Screen> 
      <Stack.Screen
        name="Accordian"
         component={Accordian}>
      </Stack.Screen> 
      </Stack.Navigator>   
  </NavigationContainer>
    
  );
}

  

