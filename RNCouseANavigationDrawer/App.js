import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';
import { back } from 'react-native/Libraries/Animated/Easing';

//const Drawer = createDrawerNavigator();
const BottonTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator */}
      <BottonTab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#3c0a6b' },
          headerTintColor: 'white',
          tabBarActiveTintColor: '#3c0a6b',
        }}
      >
        <BottonTab.Screen
          name="Welcome"
          component={WelcomeScreen} 
          options={{ 
            drawerLabel: 'Welcome Screen',
            tabBarIcon: ({color, size}) => <Ionicons name="home" color={color} size={size} />
          }}
        />
        <BottonTab.Screen name="User" component={UserScreen} 
          options={{
            tabBarIcon: ({color, size}) => <Ionicons name="person" color={color} size={size} />
          }}/>
      </BottonTab.Navigator>
    </NavigationContainer>
  );
}
