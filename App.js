import { useState } from 'react';
import { FlatList, StyleSheet, Text, Image, Button, View } from 'react-native';
import MealDbRoutes from './api/mealDbRoutes';

export default function App() {
  const [recipes, setRecipes] = useState([]);

  const getRandomRecipe = async () => {
    const url = MealDbRoutes.generateRandomRecipe;
    const response = await fetch(url);
    const json = await response.json();
    setRecipes(json.meals);
  }

  return (
    <View style={styles.container}>
      { <FlatList
        data={recipes}
        style={styles.recipe}
        keyExtractor={({idMeal}) => idMeal}
        renderItem={({item}) => (
          <View>
            <Image style={styles.tinyLogo} source={{uri: item.strMealThumb}} />
            <Text>{item.strMeal} - {item.strCategory}</Text>
          </View>
        )}
      />}
      <Button title="Press me" style={styles.button} onPress={getRandomRecipe}></Button>
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
    flex: 3,
    alignSelf: 'center'
  },
  recipe: {
    flex: 2,
    alignSelf: 'center',
    marginVertical: 50
  }
});
