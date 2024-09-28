import { FlatList, StyleSheet, Text, View } from 'react-native';

import MealItem from '../MealsList/MealItem';

function MealsList({ items }) {

    function renderMealItem(itemData) {

        const item = itemData.item;

        const mealItemProps = {
            id: item.id,
            title: item.title,
            ImageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration,
        };
        
        return <MealItem {...mealItemProps} />
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
}

export default MealsList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})