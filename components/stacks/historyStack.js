import History from "../history";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const HistoryStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
                name="Recipe History"
                component={History}
                title="History" />
        </Stack.Navigator>
    )
}

export default HistoryStack;