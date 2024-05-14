import { NavigationContainer } from '@react-navigation/native';
import RandomRecipe from './components/randomRecipe';
import RecipeDetails from './components/recipeDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/home';
import CategoryList from './components/categoryList';
import Category from './components/category';
import AreaList from './components/areaList';
import Area from './components/area';

const Stack = createNativeStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
    </NavigationContainer>
  );
}
