import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../home';
import CategoryList from '../categoryList';
import Category from '../category';
import AreaList from '../areaList';
import Area from '../area';
import RandomRecipe from "../randomRecipe";
import RecipeDetails from "../recipeDetails";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="Home"
              component={Home}
              title="Home Page" />
            <Stack.Screen
              name="RandomRecipe"
              component={RandomRecipe}
              options={{title: 'Random Recipe' }} />
            <Stack.Screen
              name="RecipeDetails"
              component={RecipeDetails}
              options={{title: 'Recipe Details'}} />
            <Stack.Screen
              name="Categories"
              component={CategoryList}
              options={{title: 'Categories'}} />
            <Stack.Screen
              name="Category"
              component={Category} />
            <Stack.Screen
              name="Areas"
              component={AreaList}
              options={{title: 'Cuisines'}} />
            <Stack.Screen
              name="Area"
              component={Area} />
      </Stack.Navigator>
    )
}

export default HomeStack;