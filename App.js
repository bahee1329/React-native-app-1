
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import bottomtabNaivigation from './navigation/bottomtabNaivigation';
import { Card, NewArrivals, ProductDetails } from './screens/index'



const Stack = createNativeStackNavigator()

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require('./assets/fonts/Poppins-Regular.ttf'),
    bold: require('./assets/fonts/Poppins-Bold.ttf'),
    light: require('./assets/fonts/Poppins-Light.ttf'),
    extrabold: require('./assets/fonts/Poppins-ExtraBold.ttf'),
    medium: require('./assets/fonts/Poppins-Medium.ttf'),
    semibold: require('./assets/fonts/Poppins-SemiBold.ttf'),

  })


  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomNavigation"
          component={bottomtabNaivigation}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Card"
          component={Card}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="productdetails"
          component={ProductDetails}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="newArrivals"
          component={NewArrivals}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

