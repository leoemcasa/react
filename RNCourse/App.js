import { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalInput from './components/GoalImput';
import GoalList from './components/GoaList';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  function startAddGoalHandler() {
    setIsModalVisible(true);
  }

  function endAddGoalHandler() {
    setIsModalVisible(false);
  }

  function addGoal(enteredGoalText) {
    setGoals(currentGoals => [...currentGoals, {text: enteredGoalText, id: Math.random().toString()}]);
    endAddGoalHandler();
  };

  function delGoal(id) {
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
    <StatusBar style="light" />
    <View style={styles.appContainer}>
      <Button title="Add new goal" color={'#5e0acc'} onPress={startAddGoalHandler} />
      <GoalInput isModalVisible={isModalVisible}  addGoal={addGoal} onCancel={endAddGoalHandler}/>
      <GoalList goals={goals} delGoal={delGoal}/>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a'
  }
});
