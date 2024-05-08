import { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";

const ingredientProp = "strIngredient";
const measureProp = "strMeasure";

const Ingredients = props => {
    const [ingredients, setIngredients] = useState(null);
    const [isDoubleDigit, setDoubleDigit] = useState(false);

    const getIngredients = () => {
        let recipeIngredients = [];
        const recipe = props.recipe;
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

    return <Text style={styles.textPadding}>{ingredients}</Text>
};

const styles = StyleSheet.create({
    textPadding: {
      paddingBottom: 10
    }
});

export default Ingredients;