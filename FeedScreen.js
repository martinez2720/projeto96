
import Postcard from "./PostCard";
import { Flatlist } from "react-native-gesture-handler";
import { View, Text, StyleSheet} from 'react-native';

let posts = require("./temp_posts.json");

export default class Feed extends Component {

renderItem = ({ item: post }) => {

return <PostCard post={post} />;

};

keyExtractor = (item, index) => index.toString();

render() {
return (

   <View style={styles.container}>
      <SafeAreaView style={styles.droidSafeArea} /> 
      <View style={styles.appTitle}>
    <Text style={styles.appTitleText}>Espectagrama</Text>
    </View>

    <View style={styles.cardContainer}>
     <FlatList
        keyExtractor={this.keyExtractor}
      data={posts}
      renderItem ={this.renderItem}

/>

</View>

</View>

);
   }}

   const styles = StyleSheet.create({

    container: {
    flex: 1,
    backgroundColor: "darkblue"
    
    },
    
    droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 35

    },
    
    appTitle: {
    
    flex: 0.07,
    padding: 5,
    flexDirection: "row", 
    justifyContent: "center"
    
    },
    
    appTitleText: {
    
    color: "white",
    fontsize: 28,
    
    },
    
    cardContainer: {

    flex: 0.93
    
    }
    
    });






