import { useContext,useEffect } from 'react';
import { Button, Text,View } from 'react-native';
import MealList from '../components/mealList/mealsList';
import { MEALS } from '../data/dummy-data';
import Meal from '../models/meal';
import { FavoriteContext } from '../store/context/favorite-context';
import {useSelector} from 'react-redux';
import notificationService from '../store/service/notification';
function FavoritesScreen() {
  // const favoriteMealCtx=useContext(FavoriteContext)
 const favoriteMealIds = useSelector(state=>state.favoriteMeals.ids);
  const favoriteMeals=MEALS.filter(meal=>favoriteMealIds.includes(meal.id));
useEffect(()=>{
  notificationService.createDefaultChannel()
})
const handleLocalNotification = () => {
  notificationService.sendLocalNotification('This is a local notification!');
  notificationService.sendNotification('This is a local schedule notification!')
};

  if(favoriteMeals.length ===0){
    return(
    <View>
      <Text>
        you have no favorite items
      </Text>
      <Button onPress={handleLocalNotification} title={'notify'}/>
    </View>)
  }
  return <MealList items={favoriteMeals} />
}

export default FavoritesScreen;

