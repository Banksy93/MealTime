import { SafeAreaView } from "react-native"
import Heading from "./generic/heading"
import { commonStyles } from "../styles"

export default SearchIngredient = ({navigation}) => {
    return (
        <SafeAreaView style={commonStyles.container}>
            <Heading title="You're on the search by ingredient page!"></Heading>
        </SafeAreaView>
    )
}