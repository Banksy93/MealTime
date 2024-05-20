import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Favourites from "../favourites";

const Stack = createNativeStackNavigator();

const FavouritesStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
                name="FavouriteRecipes"
                component={Favourites}
                title="Favourite Recipes" />
        </Stack.Navigator>
    )
}

export default FavouritesStack;