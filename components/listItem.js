import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { Text, View } from "react-native"
import { commonStyles } from "../styles";

const ListItem = ({text}) => {
    return (
        <View style={commonStyles.viewFlex}>
            <Text style={commonStyles.item}>{text}</Text>
            <FontAwesomeIcon listItem  style={commonStyles.icon} icon={faArrowRight}/>
        </View>
    )
}

export default ListItem;