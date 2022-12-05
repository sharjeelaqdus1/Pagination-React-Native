import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';
import StudentsScreen from '../screens/students';
import ChatScreen from '../screens/chat';
import Profile from '../screens/profile';
import ChatList from '../screens/chatList';
import {AUTH_ROUTES} from '../navigation/routes';
export const DisabledContext = React.createContext();
const Stack = createNativeStackNavigator();

function Router() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={AUTH_ROUTES.Home} component={HomeScreen} />
      <Stack.Screen name={AUTH_ROUTES.Student} component={StudentsScreen} />
      <Stack.Screen name={AUTH_ROUTES.Chat} component={ChatScreen} />
      <Stack.Screen name={AUTH_ROUTES.Profile} component={Profile} />
      <Stack.Screen name={AUTH_ROUTES.ChatList} component={ChatList} />
    </Stack.Navigator>
  );
}

export default Router;
