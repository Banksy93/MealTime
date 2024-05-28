import { Pressable, Text, View } from "react-native"
import Heading from "./generic/heading"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { commonStyles } from "../styles";

export default Home = ({navigation}) => {
    return (
        <View style={commonStyles.container}>
            <Heading title='What would you like to do?'></Heading>
            <Pressable
                style={commonStyles.shadow}
                onPress={() => navigation.navigate('RandomRecipe')}>
                <View style={commonStyles.viewFlex}>
                    <Text style={commonStyles.item}>Random Recipe Please!</Text>
                    <FontAwesomeIcon style={commonStyles.icon} icon={faArrowRight}/>
                </View>
            </Pressable>
            <Pressable
                style={commonStyles.shadow}
                onPress={() => navigation.navigate('Categories')}>
                <View style={commonStyles.viewFlex}>
                    <Text style={commonStyles.item}>Browse Categories</Text>
                    <FontAwesomeIcon style={commonStyles.icon} icon={faArrowRight}/>
                </View>
            </Pressable>
            <Pressable
                style={commonStyles.shadow}
                onPress={() => navigation.navigate('Areas')}>
                <View style={commonStyles.viewFlex}>
                    <Text style={commonStyles.item}>Browse Cuisines</Text>
                    <FontAwesomeIcon style={commonStyles.icon} icon={faArrowRight}/>
                </View>
            </Pressable>
        </View>
    )
}