import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";

import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";

function FavoritesScreen() {

    const favoriteMealsContext = useContext(FavoritesContext);

    const favoriteMeals = MEALS.filter((meal) => {
        return favoriteMealsContext.ids.includes(meal.id);
    });

    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favorite meals yet.</Text>
            </View>
        )
    }

    return (
        <MealsList items={favoriteMeals} />
    )
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})