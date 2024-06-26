import { Image, StyleSheet, Text, View } from "react-native";
import { commonStyles } from "../../styles";

const BasicRecipe = props => {
    return (
        <View style={commonStyles.shadow}>
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
})

export default BasicRecipe;