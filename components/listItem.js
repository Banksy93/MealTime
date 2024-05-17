import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { StyleSheet, Text, View } from "react-native"

const ListItem = ({text}) => {
    return (
        <View style={styles.viewFlex}>
            <Text style={styles.item}>{text}</Text>
            <FontAwesomeIcon listItem  style={styles.icon} icon={faArrowRight}/>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
      padding: 20,
      fontSize: 20,
      marginTop: 5,
      color: '#FF7000'
    },
    icon: {
        color: '#FF7000'
    },
    viewFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
});

export default ListItem;