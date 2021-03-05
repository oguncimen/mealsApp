import React from "react";
import { Text, View, StyleSheet } from "react-native";

const FilterScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Filter Screen Screen!</Text>
    </View>
  );
};
FilterScreen.navigationOptions = {
  headerTitle: "Filter Meals",
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FilterScreen;
