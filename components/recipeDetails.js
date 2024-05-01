import { Button, Image, StyleSheet, Text, View } from "react-native";

export default RecipeDetails = ({navigation, route}) => {

    return (
        <View style={styles.container}>
            <Image style={styles.tinyLogo} source={{uri: route.params.recipe.strMealThumb}} />
            <Text>{route.params.recipe.strMeal}</Text>
            <Text>{route.params.recipe.strCategory}</Text>
            <Text>{route.params.recipe.strInstructions}</Text>
            <Button
              title="Home"
              style={styles.button}
              onPress={() => navigation.navigate('RandomRecipe')}></Button>
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
    tinyLogo: {
      width: 150,
      height: 150,
      alignSelf: 'center'
    },
    button: {
      flex: 3,
      alignSelf: 'center'
    },
});