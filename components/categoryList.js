import { useEffect, useState } from "react";
import MealDbRoutes from "../api/mealDbRoutes";
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Heading from "./heading";
import ListItem from "./listItem";
import { commonStyles } from "../styles";

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
                <Heading title="Categories"></Heading>
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
