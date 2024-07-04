import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function Title({ children }) {
    return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        // fontWeight: 'bold',
        color: Colors.primary500,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#b38a05',
        padding: 12,
    }
})