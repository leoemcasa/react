import { MEALS } from "../data/dummy-data";
import { FlatList, StyleSheet, Text, View } from "react-native";

function MealsOverviewScreen({ route }) {
    const catId = route.params.categoryId;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Meals Overview {catId} </Text>
        </View>
    );
}

export default MealsOverviewScreen;

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