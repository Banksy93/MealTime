import { useEffect, useState } from "react";
import MealDbRoutes from "../api/mealDbRoutes";
import { FlatList, Pressable, SafeAreaView, View } from "react-native";
import { commonStyles } from "../styles";
import ListItem from "./generic/listItem";
import Heading from "./generic/heading";

export default CategoryList = ({navigation}) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function getCategories() {
            const url = MealDbRoutes.categoryList;
            const response = await fetch(url);
            const json = await response.json();
            setCategories(json.meals);
        }

        getCategories();
    },[]);

    return (
        <SafeAreaView style={commonStyles.container}>
            <View>
                <Heading title="Categories" />
                <View style={commonStyles.mainHeight}>
                    <FlatList
                        data={categories}
                        renderItem={({item}) =>
                            <Pressable
                                style={commonStyles.shadow}
                                onPress={() => navigation.navigate('Category', {category: item.strCategory})}>
                                    <ListItem text={item.strCategory}></ListItem>
                            </Pressable>}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}
