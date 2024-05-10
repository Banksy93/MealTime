import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import SubHeading from "./subHeading";
import Heading from "./heading";
import Ingredients from "./ingredients";
import Instructions from "./instructions";

export default RecipeDetails = ({navigation, route}) => {
    return (
      <View style={styles.main}>
        <ScrollView style={styles.container}>
          <Heading title={route.params.recipe.strMeal}></Heading>
          <Image style={styles.tinyLogo} source={{uri: route.params.recipe.strMealThumb}} />
          <SubHeading title="Ingredients"></SubHeading>
          <Ingredients recipe={route.params.recipe}></Ingredients>
          <SubHeading title="Instructions"></SubHeading>
          <Instructions instructions={route.params.recipe.strInstructions}></Instructions>
          <Button
            title="Home"
            style={styles.button}
            onPress={() => navigation.navigate('RandomRecipe')}></Button>
        </ScrollView>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: "#fff",
      padding: 20,
      paddingBottom: 20
    },
    tinyLogo: {
      width: 150,
      height: 150,
      alignSelf: 'center'
    },
    button: {
      alignSelf: 'center',
      marginBottom: 5
    },
    main: {
      flex: 1
    }
});