import { Button, StyleSheet, Text, View } from "react-native"
import Heading from "./heading"

export default Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Heading title='Welcome To Random Recipes!'></Heading>
            <Button
                title="Random Recipe Please!"
                styles={styles.button}
                onPress={() => navigation.navigate('RandomRecipe')}></Button>
            <Button
                title="Categories"
                style={styles.button}
                onPress={() => navigation.navigate('Categories')}></Button>
            <Button
                title="Areas"
                style={styles.button}
                onPress={() => navigation.navigate('Areas')}></Button>
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
    heading: {
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center',
        paddingBottom: 10
    },
    button: {
      alignSelf: 'center',
      paddingTop: 10
    },
})