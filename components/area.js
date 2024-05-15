import { useEffect, useState } from "react"
import MealDbRoutes from "../api/mealDbRoutes";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import BasicRecipe from "./basicRecipe";
import Heading from "./heading";

const Area = ({navigation, route}) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        async function getReciesForArea() {
            const url = MealDbRoutes.getByArea(route.params.area);
            const response = await fetch(url);
            const json = await response.json();
            setRecipes(json.meals);
        }

        getReciesForArea();
    }, []);

    const navigateToRecipeDetails = async (id) => {
        const url = MealDbRoutes.getReicpeById(id);
        const response = await fetch(url);
        const json = await response.json();
        const recipe = json.meals[0];

        navigation.navigate("RecipeDetails", {recipe: recipe});
    }

    return (
        <ScrollView style={styles.container}>
            <Heading title={route.params.area}></Heading>
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

export default Area;