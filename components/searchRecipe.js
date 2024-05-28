import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native"
import { commonStyles } from "../styles"
import { useState } from "react"
import MealDbRoutes from "../api/mealDbRoutes"
import BasicRecipe from "./generic/basicRecipe";

export default SearchRecipe = ({navigation}) => {
    const [searchText, onSearchTextChange] = useState('');
    const [displayResults, setDisplayResults] = useState(false);
    const [displayNothingFound, setDisplayNothingFound] = useState(false);
    const [results, setResults] = useState([]);

    const getResults = async () => {
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
            <View style={styles.searchBarFlex}>
                <View>
                    <TextInput
                        placeholder="Search recipe.."
                        style={styles.textInput}
                        onChangeText={onSearchTextChange}
                        onSubmitEditing={getResults} />
                </View>
                <TouchableHighlight
                    style={styles.searchButton}
                    onPress={getResults}>
                    <View>
                        <Text>Search</Text>
                    </View>
                </TouchableHighlight>
            </View>
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

const styles = StyleSheet.create({
    searchBarFlex: {
        flexDirection: 'row'
    },
    textInput: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchButton: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});