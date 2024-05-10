import { StyleSheet, Text } from "react-native";

const Instructions = props => {
    return <Text style={styles.textPadding}>{props.instructions}</Text>
}

const styles = StyleSheet.create({
    textPadding: {
      paddingBottom: 10
    }
})

export default Instructions;