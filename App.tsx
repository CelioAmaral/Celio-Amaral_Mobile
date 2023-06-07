import React, { useContext, useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { House, User, UsersThree } from 'phosphor-react-native';

import { Provider as AuthProvider, Context as AuthContext } from './src/context/AuthContext';
import { navigationRef } from './src/RootNavigation';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Home from './src/screens/Home';
import Friends from './src/screens/Friends';
import Profile from './src/screens/Profile';
import Loading from './src/components/Loading';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter';
import { THEME } from './src/theme';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    background: THEME.COLORS.BACKGROUND_900,
  },
};

function App() {
  const { token, tryLocalLogin, isLoading } = useContext(AuthContext);

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  useEffect(() => {
    tryLocalLogin();
  }, []);

  if (!fontsLoaded || isLoading) {
    return <Loading />;
  }

  return (
    <NavigationContainer theme={AppTheme} ref={navigationRef}>
      {!token ? (<Stack.Navigator
        screenOptions={{
          headerShown: false,
          statusBarStyle: "dark",
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>) : (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              switch (route.name) {
                case "Home":
                  return <House size={size} color={color} />;
                case "Friends":
                  return <UsersThree size={size} color={color} />;
                case "Profile":
                  return <User size={size} color={color} />;
                default:
                  return null;
              }
            },
            tabBarStyle: { backgroundColor: THEME.COLORS.BACKGROUND_800 },
            tabBarShowLabel: false,
            headerShown: false,
          })}
        >
          <Tab.Screen name='Home' component={Home} />
          <Tab.Screen name='Friends' component={Friends} />
          <Tab.Screen name='Profile' component={Profile} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )
};
