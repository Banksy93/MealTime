import { StyleSheet, Text } from "react-native";

const Heading = props => {
    return <Text style={styles.heading}>{props.title}</Text>
}

const styles = StyleSheet.create({
    heading: {
       fontWeight: 'bold',
       fontSize: 20,
       alignSelf: 'center',
       paddingBottom: 10
    },
});

export default Heading;