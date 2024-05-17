import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import Heading from "./heading";
import { useEffect, useState } from "react";
import MealDbRoutes from "../api/mealDbRoutes";
import RecipeListItem from "./recipeListItem";
import { commonStyles } from "../styles";
import List from "./list";

const Category = ({route}) => {
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

    // TODO: Child component loads before useEffect is done meaning nothing is displayed
    // Use loading spinner or something similar? Or useContext?
    return (
        // <List items={recipes} headingTitle={route.params.category}></List>
        <SafeAreaView style={commonStyles.container}>
            <View>
                <Heading title={route.params.category}></Heading>
                <View style={commonStyles.mainHeight}>
                    <FlatList
                        data={recipes}
                        renderItem={({item}) =>
                            <RecipeListItem recipe={item}></RecipeListItem>}
                        showsVerticalScrollIndicator={false}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Category;