import { useEffect, useState } from "react";
import MealDbRoutes from "../api/mealDbRoutes";
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
        <SafeAreaView style={styles.container}>
            <View>
                <FlatList
                    data={categories}
                    renderItem={({item}) =>
                        <Pressable
                            style={styles.shadow}
                            onPress={() => navigation.navigate('Category', {category: item.strCategory})}>
                                <View style={styles.viewFlex}>
                                    <Text style={styles.item}>{item.strCategory}</Text>
                                    <FontAwesomeIcon style={styles.icon} icon={faArrowRight}/>
                                </View>
                        </Pressable>}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      padding: 20
    },
    item: {
      padding: 20,
      fontSize: 20,
      marginTop: 5,
      color: '#FF7000'
    },
    icon: {
        color: '#FF7000'
    },
    viewFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    shadow: {
      shadowColor: 'rgb(0, 0, 0)',
      shadowOffset: {
        width: 3,
        height: 3,
      },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 2,
      backgroundColor: 'white',
      padding: 10,
      margin: 10,
    }
});