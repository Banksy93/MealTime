import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from "../search";

const Stack = createNativeStackNavigator();

const SearchStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
                name="SearchRecipe"
                component={Search}
                title="Search Recipe" />
        </Stack.Navigator>
    )
}

export default SearchStack;