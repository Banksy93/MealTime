import { Image, StyleSheet, Text, View } from "react-native";

const BasicRecipe = props => {
    return (
        <View style={styles.shadow}>
            <Text style={styles.heading}>{props.recipe.strMeal}</Text>
            <View style={styles.imageContainer}>
                <Image style={styles.tinyLogo} source={{uri: props.recipe.strMealThumb}}></Image>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: '95%',
        height: undefined,
        aspectRatio: 1,
        borderRadius: 10
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
    }
})

export default BasicRecipe;