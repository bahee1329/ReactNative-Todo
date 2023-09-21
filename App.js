import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import BottomtabNaivigation from './navigation/BottomnNavigation'
import { Archive } from './screens/index';


const Stack = createNativeStackNavigator()

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen
          name="BottomNavigation"
          component={BottomtabNaivigation}
          options={{ headerShown: false }} />
          
      <Stack.Screen
          name="Archive"
          component={Archive}
          options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

