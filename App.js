import { NavigationContainer } from '@react-navigation/native';
import RandomRecipe from './components/randomRecipe';
import RecipeDetails from './components/recipeDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/home';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
