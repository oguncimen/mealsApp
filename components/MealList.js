import React from "react";
import { View, StyleSheet,FlatList } from "react-native";
import MealItem from './MealItem';

const MealList = (props) => {
    const renderMealItem = (itemData) => {
        return (
          <MealItem
            title={itemData.item.title}
            duration={itemData.item.duration}
            affordability={itemData.item.affordability}
            complexity={itemData.item.complexity}
            image={itemData.item.imageUrl}
            onSelectMeal={() => {
              props.navigation.navigate({
                routeName: "MealDetail",
                params: {
                  mealId: itemData.item.id,
                },
              });
            }}
          ></MealItem>
        );
      };
  return (
    <View style={styles.screen}>
      <FlatList
        data={props.listData}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      ></FlatList>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
export default MealList;
