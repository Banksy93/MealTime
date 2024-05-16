import { useEffect, useState } from "react"
import MealDbRoutes from "../api/mealDbRoutes";
import { FlatList, Pressable, SafeAreaView, View } from "react-native";
import Heading from "./heading";
import ListItem from "./listItem";
import { commonStyles } from "../styles";

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
        <SafeAreaView style={commonStyles.container}>
            <View>
                <Heading title="Cuisines"></Heading>
                <View style={commonStyles.mainHeight}>
                    <FlatList
                        data={areas}
                        renderItem={({item}) =>
                            <Pressable
                                style={commonStyles.shadow}
                                onPress={() => navigation.navigate('Area', {area: item.strArea})}>
                                    <ListItem text={item.strArea}></ListItem>
                            </Pressable>}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}
