import { FlatList, Pressable, SafeAreaView, StyleSheet, View } from "react-native";
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

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Heading title={route.params.category}></Heading>
                <View style={styles.main}>
                    <FlatList
                        data={recipes}
                        renderItem={({item}) =>
                        <Pressable
                            onPress={() => navigateToRecipeDetails(item.idMeal)}>
                            <BasicRecipe recipe={item}></BasicRecipe>
                        </Pressable>}
                        showsVerticalScrollIndicator={false}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      padding: 20
    },
    button: {
      alignSelf: 'center',
      paddingTop: 10
    },
    main: {
        height: '90%'
    },
    item: {
      padding: 20,
      fontSize: 20,
      marginTop: 5,
      color: '#FF7000'
    }
});

export default Category;