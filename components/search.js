import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Heading from "./generic/heading";
import { commonStyles } from "../styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default Search = ({navigation}) => {
    return (
        <SafeAreaView style={commonStyles.container}>
            <Heading title="What would you like to search?"></Heading>
            <Pressable
                style={commonStyles.shadow}
                onPress={() => navigation.navigate('SearchRecipe')}>
                <View style={commonStyles.viewFlex}>
                    <Text style={commonStyles.item}>Search recipe</Text>
                    <FontAwesomeIcon style={commonStyles.icon} icon={faArrowRight} />
                </View>
            </Pressable>
            <Pressable
                style={commonStyles.shadow}
                onPress={() => navigation.navigate('SearchIngredient')}>
                <View style={commonStyles.viewFlex}>
                    <Text style={commonStyles.item}>Search by ingredient</Text>
                    <FontAwesomeIcon style={commonStyles.icon} icon={faArrowRight} />
                </View>
            </Pressable>
        </SafeAreaView>
    )
}
