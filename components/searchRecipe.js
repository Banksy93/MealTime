import { FlatList, Pressable, SafeAreaView, Text, View } from "react-native"
import { commonStyles } from "../styles"
import { useState } from "react"
import MealDbRoutes from "../api/mealDbRoutes"
import BasicRecipe from "./generic/basicRecipe";
import SearchFunction from "./generic/searchFunction";

export default SearchRecipe = ({navigation}) => {
    const [displayResults, setDisplayResults] = useState(false);
    const [displayNothingFound, setDisplayNothingFound] = useState(false);
    const [results, setResults] = useState([]);

    const getResults = async (searchText) => {
        const url = MealDbRoutes.searchMealByName(searchText);
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

    return (
        <SafeAreaView style={commonStyles.container}>
            <SearchFunction
                placeholder="Search for a recipe"
                onSearchCallback={getResults}/>
            <View>
                { displayResults ? <FlatList
                    data={results}
                    renderItem={({item}) =>
                    <Pressable onPress={() => navigation.navigate('RecipeDetails', {recipe: item})}>
                        <BasicRecipe recipe={item} />
                    </Pressable>}
                    showsVerticalScrollIndicator={false} /> : null}
            </View>
            { displayNothingFound ?
            <View style={commonStyles.viewFlex}>
                <Text style={commonStyles.item}>We couldn't find any results for: {searchText}. Please try searching again.</Text>
            </View> : null}
        </SafeAreaView>
    )
}