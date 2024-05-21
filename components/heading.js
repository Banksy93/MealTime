import { StyleSheet, Text } from "react-native";

const Heading = props => {
    return <Text style={styles.heading}>{props.title}</Text>
}

const styles = StyleSheet.create({
    heading: {
       fontWeight: 'bold',
       fontSize: 20,
       alignSelf: 'center',
       paddingBottom: 10,
       shadowColor: 'rgb(0, 0, 0)',
       shadowOffset: {
         width: 3,
         height: 3,
       },
       shadowOpacity: 0.5,
       shadowRadius: 5,
       elevation: 2,
       backgroundColor: '#FF7000',
       padding: 10,
       margin: 10,
       color: 'white',
       borderRadius: 10
    },
});

export default Heading;