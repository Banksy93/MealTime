import { useEffect, useState } from "react"
import MealDbRoutes from "../api/mealDbRoutes";
import { FlatList, SafeAreaView, View } from "react-native";
import Heading from "./heading";
import RecipeListItem from "./recipeListItem";
import { commonStyles } from "../styles";
import List from "./list";

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
        // <List items={recipes} headingTitle={route.params.area}></List>
        <SafeAreaView style={commonStyles.container}>
            <View>
                <Heading title={route.params.area}></Heading>
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