import { Button, FlatList, Pressable, SafeAreaView, Text, TextInput, TouchableHighlight, View } from "react-native"
import Heading from "./generic/heading"
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
            <View style={{flexDirection: 'row'}}>
                <View>
                    <TextInput
                        placeholder="Search recipe.."
                        style={{alignItems:'center',justifyContent:'center'}}
                        onChangeText={onSearchTextChange}
                        onSubmitEditing={getResults} />
                </View>
                <TouchableHighlight
                    style={{alignItems: 'center', justifyContent: 'center'}}
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
                    <Pressable>
                        <BasicRecipe recipe={item} />
                    </Pressable>} /> : null}
            </View>
            { displayNothingFound ?
            <View style={commonStyles.viewFlex}>
                <Text style={commonStyles.item}>We couldn't find any results for: {searchText}. Please try searching again.</Text>
            </View> : null}
        </SafeAreaView>
    )
}