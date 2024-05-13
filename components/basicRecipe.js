import { Image, StyleSheet, Text, View } from "react-native";

const BasicRecipe = props => {
    return (
        <View style={styles.border}>
            <Text style={styles.heading}>{props.recipe.strMeal}</Text>
            <View style={styles.imageContainer}>
                <Image style={styles.tinyLogo} source={{uri: props.recipe.strMealThumb}}></Image>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 350,
        height: 350,
        borderRadius: 10,
    },
    heading: {
      fontWeight: 'bold',
      fontSize: 20,
      alignSelf: 'center',
      paddingBottom: 10
    },
    imageContainer: {
        padding: 5,
        alignSelf: 'flex-start'
    },
    border: {
        borderWidth: 3,
        paddingBottom: 5
    }
})

export default BasicRecipe;