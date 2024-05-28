import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      padding: 20
    },
    mainHeight: {
        height: '90%'
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
    viewFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    item: {
      padding: 20,
      fontSize: 20,
      marginTop: 5,
      color: '#FF7000'
    },
    icon: {
        color: '#FF7000'
    }
});