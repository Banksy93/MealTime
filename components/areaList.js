import { useEffect, useState } from "react"
import MealDbRoutes from "../api/mealDbRoutes";
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Heading from "./heading";

export default AreaList = ({navigation}) => {
    const [areas, setAreas] = useState([]);

    useEffect(() => {
        async function getAreas() {
            const url = MealDbRoutes.areaList;
            const response = await fetch(url);
            const json = await response.json();
            setAreas(json.meals);
        }

        getAreas();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Heading title="Cuisines"></Heading>
                <View style={styles.main}>
                    <FlatList
                        data={areas}
                        renderItem={({item}) =>
                            <Pressable
                                style={styles.shadow}
                                onPress={() => navigation.navigate('Area', {area: item.strArea})}>
                                    <View style={styles.viewFlex}>
                                        <Text style={styles.item}>{item.strArea}</Text>
                                        <FontAwesomeIcon listItem style={styles.icon} icon={faArrowRight}/>
                                    </View>
                            </Pressable>}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
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
      borderRadius: 10
    },
    main: {
        height: '90%'
    }
});