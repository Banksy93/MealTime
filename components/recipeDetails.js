import { useEffect, useState } from "react";
import { Button, FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";

const ingredientProp = "strIngredient";
const measureProp = "strMeasure";

export default RecipeDetails = ({navigation, route}) => {
    const [ingredients, setIngredients] = useState(null);
    const [isDoubleDigit, setDoubleDigit] = useState(false);

    const getIngredients = () => {
        let recipeIngredients = [];
        const recipe = route.params.recipe;
        // Don't like this logic but the repsonse model doesn't include ingredients as an array
        // Instead it's 'strIngredient1', 'strIngredient2' etc..
        // Same for measurements 'strMeasure1', 'strMeasure2' etc..
        Object.keys(recipe).filter(k => recipe[k]).map((key, i) => {
            if (key.includes(ingredientProp)) {
                const lastNumber = isDoubleDigit ? key.slice(-2) : key.slice(-1);

                if (lastNumber === "9") {
                    setDoubleDigit(true);
                }

                const measureToGet = measureProp + lastNumber;
                const ingredientDetails = recipe[measureToGet] ? recipe[key] + ' - ' + recipe[measureToGet] : recipe[key];

                if (ingredientDetails.length > 0) {
                    recipeIngredients.push(ingredientDetails);
                }
            }
        });

        const formattedIngredients = recipeIngredients.join("\r\n");

        setIngredients(formattedIngredients);
    }

    useEffect(() => {
      getIngredients();
    }, []);

    // TODO: Separate ingredients and instructions into their own components
    return (
        <ScrollView style={styles.container}>
          <Text style={styles.heading}>{route.params.recipe.strMeal}</Text>
          <Image style={styles.tinyLogo} source={{uri: route.params.recipe.strMealThumb}} />
          <Text style={styles.subHeading}>Ingredients</Text>
          <Text style={styles.textPadding}>{ingredients}</Text>
          <Text style={styles.subHeading}>Instructions</Text>
          <Text style={styles.textPadding}>{route.params.recipe.strInstructions}</Text>
          <Button
            title="Home"
            style={styles.button}
            onPress={() => navigation.navigate('RandomRecipe')}></Button>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: "#fff",
      padding: 20,
      paddingBottom: 20
    },
    tinyLogo: {
      width: 150,
      height: 150,
      alignSelf: 'center'
    },
    button: {
      alignSelf: 'center',
      marginBottom: 5
    },
    heading: {
     fontWeight: 'bold',
     fontSize: 20,
     alignSelf: 'center',
     paddingBottom: 10
    },
    subHeading: {
      fontWeight: 'bold',
      fontSize: 16
    },
    textPadding: {
      paddingBottom: 10
    }
});