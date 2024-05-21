import { SafeAreaView } from "react-native"
import Heading from "./heading"
import { commonStyles } from "../styles"

export default SearchRecipe = ({navigation}) => {
    return (
        <SafeAreaView style={commonStyles.container}>
            <Heading title="You're on the search recipe page!"></Heading>
        </SafeAreaView>
    )
}