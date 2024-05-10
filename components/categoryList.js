import { useEffect, useState } from "react";
import MealDbRoutes from "../api/mealDbRoutes";
import { Button, StyleSheet, View } from "react-native";

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
        <View style={styles.container}>
            { categories.map(c => (
                <Button
                    key={c.strCategory}
                    title={c.strCategory}
                    style={styles.button}
                    onPress={() => navigation.navigate('Category', {category: c.strCategory})}>
                </Button>
            )) }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: "#fff",
      padding: 20
    },
    button: {
      alignSelf: 'center',
      paddingTop: 10
    }
});