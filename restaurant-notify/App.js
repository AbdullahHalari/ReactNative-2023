/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Ionicons} from 'react-native-vector-icons/Ionicons';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import Home from './screens/home';
import FavoriteContextProvider from './store/context/favorite-context';
import { Provider } from 'react-redux';
import {store} from './store/redux/store';
const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
// function DrawerNavigator() {
//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         headerStyle: {backgroundColor: '#351401'},
//         headerTintColor: 'white',
//         sceneContainerStyle: {backgroundColor: '#3f2f25'},
//         drawerContentStyle: {backgroundColor: '#351401'},
//         drawerInactiveTintColor: 'white',
//         drawerActiveTintColor: '#351401',
//         drawerActiveBackgroundColor: '#e4baa1',
//       }}>
//       <Drawer.Screen
//         name="Categories"
//         component={CategoriesScreen}
//         options={{
//           title: 'All Categories',
//           drawerIcon: ({color, size}) => (
//             <Ionicons name="list" color={color} size={size} />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="Favorites"
//         component={FavoritesScreen}
//         options={{
//           drawerIcon: ({color, size}) => (
//             <Ionicons name="star" color={color} size={size} />
//           ),
//         }}
//       />
//     </Drawer.Navigator>
//   );
// }
function App() {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    // <CategoriesScreen />
    // <FavoriteContextProvider>
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: 'grey'},
            headerTintColor: 'white',
            contentStyle: {backgroundColor: 'grey'},
          }}>
          {/* <Stack.Screen
          name="Drawer"
          component={DrawerNavigator}
          options={{
            headerShown: false,
          }}
        /> */}
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Categories" component={CategoriesScreen} />
          <Stack.Screen name="Favorites" component={FavoritesScreen} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{
              title: 'About the Meal',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* </FavoriteContextProvider> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default App;