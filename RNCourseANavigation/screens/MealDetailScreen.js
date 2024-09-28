import { useLayoutEffect, useContext } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

import IconButton from '../components/IconButton';
import List from '../components/MealDetail/List';
import SubTitle from '../components/MealDetail/Subtitle';
import { MEALS } from '../data/dummy-data';
import MealDetails3 from '../components/MealDetails3';
import { FavoritesContext } from '../store/context/favorites-context';

function MealDetailScreen({ route, navigation }) {

    const favoritesMealsCtx = useContext(FavoritesContext);

    const mealId = route.params.mealId

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const isFavorite = favoritesMealsCtx.ids.includes(mealId);

    function changeFavoriteStatusHandler() {
        if (isFavorite) {
            favoritesMealsCtx.removeFavorite(mealId);
        } else {
            favoritesMealsCtx.addFavorite(mealId);
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                // return <Button title='Tap me' onPress={headerButtonPressHandler}/>
                return (
                    <IconButton
                        onPress={changeFavoriteStatusHandler} 
                        icon={isFavorite ? 'star' : 'star-outline'}
                        color='white'
                    />
                )
            }
        });
    }, [navigation, changeFavoriteStatusHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails3
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
            <View style={styles.listContainer}>
                <SubTitle>Ingredients</SubTitle>
                <List data={selectedMeal.ingredients}/>
                <SubTitle>Steps</SubTitle>
                <List data={selectedMeal.steps}/>
            </View>
            </View>
        </ScrollView>
        
    );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        width: '80%',
    }
})