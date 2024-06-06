import { TextInput, TouchableHighlight, View } from "react-native";
import { commonStyles } from "../../styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SearchFunction = ({placeholder, onSearchCallback}) => {
    const [searchText, onSearchTextChange] = useState('');

    return (
        <View style={commonStyles.searchBarFlex}>
            <View>
                <TextInput
                    placeholder={placeholder}
                    style={commonStyles.textInput}
                    selectionColor="#FF7000"
                    onChangeText={onSearchTextChange}
                    onSubmitEditing={() => onSearchCallback(searchText)}/>
            </View>
            <TouchableHighlight
                style={commonStyles.searchButton}
                underlayColor="white"
                onPress={() => onSearchCallback(searchText)}>
                    <FontAwesomeIcon style={commonStyles.icon} size={30} icon={faSearch}/>
            </TouchableHighlight>
        </View>
    )
}

export default SearchFunction;