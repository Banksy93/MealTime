import { useEffect, useState } from "react"
import MealDbRoutes from "../api/mealDbRoutes";
import { FlatList, Pressable, SafeAreaView, View } from "react-native";
import { commonStyles } from "../styles";
import ListItem from "./generic/listItem";
import Heading from "./generic/heading";

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
                <Heading title="Cuisines" />
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
