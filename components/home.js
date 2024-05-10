import { Button, StyleSheet, Text, View } from "react-native"

export default Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome To Random Recipes!</Text>
            <Button
             title="Random Recipe Please!"
             styles={styles.button}
             onPress={() => navigation.navigate('RandomRecipe')}></Button>
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
    heading: {
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center',
        paddingBottom: 10
    },
    button: {
      alignSelf: 'center',
      paddingTop: 10
    },
})