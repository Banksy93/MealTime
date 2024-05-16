import { useEffect, useState } from "react"
import MealDbRoutes from "../api/mealDbRoutes";
import { FlatList, Pressable, SafeAreaView, StyleSheet, View } from "react-native";
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
        <SafeAreaView style={styles.container}>
            <View>
                <Heading title={route.params.area}></Heading>
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