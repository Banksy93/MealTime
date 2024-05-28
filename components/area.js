import { useEffect, useState } from "react"
import MealDbRoutes from "../api/mealDbRoutes";
import { FlatList, SafeAreaView, View } from "react-native";
import RecipeListItem from "./generic/recipeListItem";
import { commonStyles } from "../styles";
import Heading from "./generic/heading";

const Area = ({route}) => {
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

    // TODO: Child component loads before useEffect is done meaning nothing is displayed
    // Use loading spinner or something similar? Or useContext?
    return (
        <SafeAreaView style={commonStyles.container}>
            <View>
                <Heading title={route.params.area}/>
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

export default Area;