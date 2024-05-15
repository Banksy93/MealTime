import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import Heading from "./heading";
import { useEffect, useState } from "react";
import MealDbRoutes from "../api/mealDbRoutes";
import BasicRecipe from "./basicRecipe";

const Category = ({navigation, route}) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        async function getRecipesForCategory() {
            const url = MealDbRoutes.getByCategory(route.params.category);
            const response = await fetch(url);
            const json = await response.json();
            setRecipes(json.meals);
        }

        getRecipesForCategory();
    }, []);

    const navigateToRecipeDetails = async (id) => {
        const url = MealDbRoutes.getReicpeById(id);
        const response = await fetch(url);
        const json = await response.json();
        const recipe = json.meals[0];

        navigation.navigate("RecipeDetails", {recipe: recipe});
    }
    // TODO: Try and change to flat list for view height
    return (
        <ScrollView style={styles.container}>
            <Heading title={route.params.category}></Heading>
            <View style={styles.main}>
                { recipes.map(r => (
                    <Pressable key={r.idMeal} onPress={() => navigateToRecipeDetails(r.idMeal)}>
                        <BasicRecipe recipe={r}></BasicRecipe>
                    </Pressable>
                )) }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: "#fff",
      padding: 20
    },
    button: {
      alignSelf: 'center',
      paddingTop: 10
    },
    main: {
        height: '90%'
    }
});

export default Category;