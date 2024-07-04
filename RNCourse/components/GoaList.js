import { StyleSheet, View, Text, FlatList, Pressable, Modal } from "react-native";

function GoalList(props) {
    return (
        <View style={styles.goalsContainer}>
            <FlatList
                data={props.goals}
                renderItem={(itemData) => {
                    return (
                            <View style={styles.goalListItem}>
                                <Pressable
                                    android_ripple={{ color: '#210644' }}
                                    onPress={props.delGoal.bind(this, itemData.item.id)}
                                    style={({ pressed }) => pressed && styles.pressedItem}
                                >
                                    <Text style={styles.goalListItemText}>{itemData.item.text}</Text>
                                </Pressable>
                            </View>
                    );
                }}
                keyExtractor={(item, index) => item.id}
                // alwaysBounceVertical={false}
            />
            {/* <ScrollView>
            {goals.map(goal => (
                <View key={goal} style={styles.goalListItem}>
                <Text style={styles.goalListItemText}>{goal}</Text>
                </View>
            ))}
            </ScrollView> */}
        </View>
    );
}

export default GoalList;

const styles = StyleSheet.create({
    goalsContainer: {
        flex: 4
      },
      goalListItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc'
      },
      goalListItemText: {
        color: 'white',
        padding: 8
      },
      pressedItem: {
        opacity: 0.5
      }
});