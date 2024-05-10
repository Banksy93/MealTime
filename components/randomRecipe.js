import { useState } from 'react';
import { FlatList, StyleSheet, Text, Image, Button, View } from 'react-native';
import MealDbRoutes from '../api/mealDbRoutes.js';
import BasicRecipe from './basicRecipe.js';

export default RandomRecipe = ({navigation}) => {
  const [recipes, setRecipes] = useState([]);
  const [recipeButtonText, setRecipeButtonText] = useState('Find Recipe');

  const getRandomRecipe = async () => {
    const url = MealDbRoutes.generateRandomRecipe;
    const response = await fetch(url);
    const json = await response.json();
    setRecipes(json.meals);

    setRecipeButtonText('Find Another Recipe');
  }

  return (
    <View style={styles.container}>
      { <FlatList
        data={recipes}
        style={styles.recipe}
        keyExtractor={({idMeal}) => idMeal}
        renderItem={({item}) => (
          <View>
            <View>
              <BasicRecipe recipe={item}></BasicRecipe>
            </View>
            <Button
              title="More details"
              style={styles.button}
              onPress={() => navigation.navigate('RecipeDetails', {recipe: item})}></Button>
          </View>
        )}
      />}
      <Button title={recipeButtonText} style={styles.button} onPress={getRandomRecipe}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "#fff",
    padding: 20
  },
  tinyLogo: {
    width: 150,
    height: 150,
    alignSelf: 'center'
  },
  button: {
    alignSelf: 'center',
    paddingTop: 10
  },
  recipe: {
    flex: 2,
    alignSelf: 'center',
    marginVertical: 50
  }
});
