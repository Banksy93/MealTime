import { StyleSheet, Text} from "react-native"

const SubHeading = props => {
    return <Text style={styles.subHeading}>{props.title}</Text>
}

const styles = StyleSheet.create({
    subHeading: {
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default SubHeading;