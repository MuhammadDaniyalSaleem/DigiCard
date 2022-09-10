import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DigiCards from './component/Home Page/DigiCards';
import Shop from './component/Shop Page/Shop';
import Phone from './component/Phone Page/Phone';
// import Work from  './component/Work Page/Work';
import Profile from './component/Profile Page/Profile';
import Form from './component/Shop Page/Form';
const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator   
      initialRouteName='DigiCards'
screenOptions={{headerShown:false}}
>
        <Stack.Screen
          name="DigiCards"
          component={DigiCards}
        />
        <Stack.Screen name="Shop" component={Shop} /> 
         <Stack.Screen name="Phone" component={Phone}/>  
        {/* <Stack.Screen name="Work" component={Work}/>  */}
         <Stack.Screen name="Profile" component={Profile} /> 
         <Stack.Screen name="Form" component={Form} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;
