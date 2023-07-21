import { useContext } from 'react';
import { Text,View } from 'react-native';
import MealList from '../components/mealList/mealsList';
import { MEALS } from '../data/dummy-data';
import Meal from '../models/meal';
import { FavoriteContext } from '../store/context/favorite-context';
import {useSelector} from 'react-redux';

function FavoritesScreen() {
  // const favoriteMealCtx=useContext(FavoriteContext)
 const favoriteMealIds = useSelector(state=>state.favoriteMeals.ids);
  const favoriteMeals=MEALS.filter(meal=>favoriteMealIds.includes(meal.id));

  if(favoriteMeals.length ===0){
    return(
    <View>
      <Text>
        you have no favorite items
      </Text>
    </View>)
  }
  return <MealList items={favoriteMeals} />
}

export default FavoritesScreen;

