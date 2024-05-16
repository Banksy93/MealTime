import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import SubHeading from "./subHeading";
import Heading from "./heading";
import Ingredients from "./ingredients";
import Instructions from "./instructions";

export default RecipeDetails = ({route}) => {
    return (
      <ScrollView style={[styles.container, styles.main]}>
        <View style={{paddingBottom: 20}}>
          <Heading title={route.params.recipe.strMeal}></Heading>
          <Image style={styles.tinyLogo} source={{uri: route.params.recipe.strMealThumb}} />
          <SubHeading title="Ingredients"></SubHeading>
          <Ingredients recipe={route.params.recipe}></Ingredients>
          <SubHeading title="Instructions"></SubHeading>
          <Instructions instructions={route.params.recipe.strInstructions}></Instructions>
        </View>
      </ScrollView>
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
      width: '95%',
      height: undefined,
      aspectRatio: 1,
      borderRadius: 10
    },
    main: {
      height: '90%'
    }
});