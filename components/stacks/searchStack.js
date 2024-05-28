import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from "../search";
import SearchRecipe from "../searchRecipe";
import SearchIngredient from "../searchIngredient";

const Stack = createNativeStackNavigator();

const SearchStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
                name="SearchHome"
                component={Search}
                title="Search Home" />
            <Stack.Screen
                name="SearchRecipe"
                component={SearchRecipe}
                title="Search Recipe" />
            <Stack.Screen
                name="SearchIngredient"
                component={SearchIngredient}
                title="Search By Ingredient" />
        </Stack.Navigator>
    )
}

export default SearchStack;