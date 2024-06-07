import { Image, ScrollView, StyleSheet, View } from "react-native";
import Ingredients from "./ingredients";
import Instructions from "./instructions";
import Heading from "./generic/heading";
import SubHeading from "./generic/subHeading";
import YoutubeVideo from "./generic/youtubeVideo";

export default RecipeDetails = ({route}) => {
    return (
      <ScrollView style={[styles.container, styles.main]}>
        <View style={{paddingBottom: 20}}>
          <Heading title={route.params.recipe.strMeal} />
          <Image style={styles.tinyLogo} source={{uri: route.params.recipe.strMealThumb}} />
          <SubHeading title="Ingredients" />
          <Ingredients recipe={route.params.recipe}></Ingredients>
          <SubHeading title="Instructions" />
          <Instructions instructions={route.params.recipe.strInstructions}></Instructions>
          { route.params.recipe.strYoutube.length > 0 ?
            <YoutubeVideo videoUrl={route.params.recipe.strYoutube} />
             : null
          }
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