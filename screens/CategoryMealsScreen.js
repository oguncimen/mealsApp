import React from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealScreen = (props) => {
  
  const catId = props.navigation.getParam("categoryId");

  const displayMeals = MEALS.filter(
    //Meal'in icinde categoryIds dizesinde catId var ise getir.
    //[0,1,2] dize numaraları 0 veya 0'dan büyük ise indexOf' demekki bu categori bu dize içinde mevcut.
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
   <MealList listData={displayMeals} navigation={props.navigation}></MealList>
  );
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};



export default CategoryMealScreen;
