import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Button, View, Pressable, Text } from 'react-native';
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

  useEffect(() => {
    getRandomRecipe();
  }, []);

  return (
    <View style={styles.container}>
      { <FlatList
        data={recipes}
        style={styles.recipe}
        keyExtractor={({idMeal}) => idMeal}
        renderItem={({item}) => (
          <View>
            <Pressable onPress={() => navigation.navigate('RecipeDetails', {recipe: item})}>
              <BasicRecipe recipe={item}></BasicRecipe>
            </Pressable>
          </View>
        )}
      />}
      <Pressable onPress={getRandomRecipe}>
        <Text style={[styles.recipeDetails,styles.fullWidth ]}>Get another recipe!</Text>
      </Pressable>
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
  recipe: {
    flex: 2,
    alignSelf: 'center',
    marginVertical: 50
  },
  recipeDetails: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
    paddingBottom: 10,
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2,
    backgroundColor: '#FF7000',
    padding: 10,
    margin: 10,
    color: 'white',
    borderRadius: 10
  },
  fullWidth: {
    textAlign: 'center',
    width: '90%'
  }
});
