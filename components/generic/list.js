import { FlatList, SafeAreaView, View } from "react-native"
import { commonStyles } from "../../styles"
import RecipeListItem from "./recipeListItem"
import Heading from "./heading"

const List = ({items, headingTitle}) => {
    return (
        <SafeAreaView style={commonStyles.container}>
            <View>
                <Heading title={headingTitle}></Heading>
                <View style={commonStyles.mainHeight}>
                    <FlatList
                        data={items}
                        renderItem={({item}) => {
                            <RecipeListItem recipe={item}></RecipeListItem>
                        }}
                        showsVerticalScrollIndicator={false}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default List;