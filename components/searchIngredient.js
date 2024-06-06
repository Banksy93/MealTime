import { FlatList, Pressable, SafeAreaView, Text, View } from "react-native"
import { commonStyles } from "../styles"
import { useState } from "react"
import MealDbRoutes from "../api/mealDbRoutes";
import BasicRecipe from "./generic/basicRecipe";
import SearchFunction from "./generic/searchFunction";

export default SearchIngredient = ({navigation}) => {
    const [displayResults, setDisplayResults] = useState([]);
    const [displayNothingFound, setDisplayNothingFound] = useState(false);
    const [results, setResults] = useState([]);

    const getResults = async (searchText) => {
        const url = MealDbRoutes.searchByIngredient(searchText);
        const response = await fetch(url);
        const json = await response.json();

        if (json.meals) {
            setResults(json.meals);
            setDisplayResults(true);
            setDisplayNothingFound(false);
        } else {
            setDisplayResults(false);
            setDisplayNothingFound(true);
        }
    }

    const getRecipeDetails = async (idMeal) => {
        const url = MealDbRoutes.getReicpeById(idMeal);
        const response = await fetch(url);
        const json = await response.json();
        const recipe = json.meals[0];

        navigation.navigate("RecipeDetails", {recipe: recipe});
    }

    return (
        <SafeAreaView style={commonStyles.container}>
            <SearchFunction
                placeholder="Search by ingredient"
                onSearchCallback={getResults} />
            <View>
                { displayResults ? <FlatList
                    data={results}
                    renderItem={({item}) =>
                    <Pressable onPress={() => getRecipeDetails(item.idMeal)}>
                        <BasicRecipe recipe={item} />
                    </Pressable>}
                    showsVerticalScrollIndicator={false} /> : null}
            </View>
            { displayNothingFound ?
            <View style={commonStyles.viewFlex}>
                <Text style={commonStyles.item}>We couldn't find any results. Please try searching again.</Text>
            </View> : null}
        </SafeAreaView>
    )
}