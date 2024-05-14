import { useEffect, useState } from "react"
import MealDbRoutes from "../api/mealDbRoutes";
import { Button, StyleSheet, View } from "react-native";

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
        <View style={styles.container}>
            { areas.map(a => (
                <Button
                    key={a.strArea}
                    title={a.strArea}
                    style={styles.button}
                    onPress={() => navigation.navigate('Area', {area: a.strArea})}></Button>
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