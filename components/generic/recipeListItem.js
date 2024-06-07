import { Pressable } from "react-native";
import MealDbRoutes from "../../api/mealDbRoutes";
import BasicRecipe from "./basicRecipe";
import { useNavigation } from "@react-navigation/native";

const RecipeListItem = ({recipe}) => {
    const navigation = useNavigation();

    const navigateToRecipeDetails = async (id) => {
        const url = MealDbRoutes.getReicpeById(id);
        const response = await fetch(url);
        const json = await response.json();
        const recipe = json.meals[0];

        navigation.navigate("RecipeDetails", {recipe: recipe});
    }

    return (
        <Pressable onPress={() => navigateToRecipeDetails(recipe.idMeal)}>
            <BasicRecipe recipe={recipe} />
        </Pressable>
    )
}

export default RecipeListItem;