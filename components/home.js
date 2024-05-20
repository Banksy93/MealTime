import { Pressable, StyleSheet, Text, View } from "react-native"
import Heading from "./heading"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Heading title='What would yo like to do?'></Heading>
            <Pressable
                style={styles.shadow}
                onPress={() => navigation.navigate('RandomRecipe')}>
                <View style={styles.viewFlex}>
                    <Text style={styles.item}>Random Recipe Please!</Text>
                    <FontAwesomeIcon style={styles.icon} icon={faArrowRight}/>
                </View>
            </Pressable>
            <Pressable
                style={styles.shadow}
                onPress={() => navigation.navigate('Categories')}>
                <View style={styles.viewFlex}>
                    <Text style={styles.item}>Browse Categories</Text>
                    <FontAwesomeIcon style={styles.icon} icon={faArrowRight}/>
                </View>
            </Pressable>
            <Pressable
                style={styles.shadow}
                onPress={() => navigation.navigate('Areas')}>
                <View style={styles.viewFlex}>
                    <Text style={styles.item}>Browse Cuisines</Text>
                    <FontAwesomeIcon style={styles.icon} icon={faArrowRight}/>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: "#fff",
      padding: 20
    },
    viewFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    item: {
      padding: 20,
      fontSize: 20,
      marginTop: 5,
      color: '#FF7000'
    },
    shadow: {
      shadowColor: 'rgb(0, 0, 0)',
      shadowOffset: {
        width: 3,
        height: 3,
      },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 2,
      backgroundColor: 'white',
      padding: 10,
      margin: 10,
      borderRadius: 10
    },
    icon: {
        color: '#FF7000'
    }
})