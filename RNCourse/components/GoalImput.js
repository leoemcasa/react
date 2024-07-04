import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native';


function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalImputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    props.addGoal(enteredGoalText);
    setEnteredGoalText('');
  }

    return (
        <Modal visible={props.isModalVisible} animationType='slide'>
            <View style={styles.inputConteiner}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/goal.png')}
                    />
                <TextInput
                    style={styles.inputText}
                    placeholder="Your goal!"
                    onChangeText={goalImputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttoncontainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} color={'#b180f0'} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel} color={'#f31282'} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputConteiner: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
      },
      inputText: {
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        width: '100%',
        padding: 16
      },
      buttoncontainer: {
        flexDirection: 'row',
        marginTop: 16
      },
      button: {
          width: '30%',
          marginHorizontal: 8
      },
      image: {
        width: 100,
        height: 100,
        margin: 20
      }
});