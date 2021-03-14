import React, { useState } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
import DefaultText from "../components/DefaultText";
import { View,StyleSheet } from 'react-native';

const CategoryMealScreen = (props) => {

  const catId = props.navigation.getParam("categoryId");

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayMeals = availableMeals.filter(
    //Meal'in icinde categoryIds dizesinde catId var ise getir.
    //[0,1,2] dize numaraları 0 veya 0'dan büyük ise indexOf' demekki bu categori bu dize içinde mevcut.
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  if (displayMeals.length===0) {
    return <View style={styles.content}>
      <DefaultText>No meals found, maybe check your filters? </DefaultText>
    </View>
  }
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
const styles = StyleSheet.create({
  content:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});
