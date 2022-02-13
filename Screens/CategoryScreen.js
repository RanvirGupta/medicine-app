import React from 'react'; 
import {View,Text,TextInput,TouchableOpacity,StyleSheet} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

export default class CategoryScreen extends React.Component{
  render(){
    return(
      <View>
      <Text>Category Screen</Text>
      <TextInput
        style={styles.formInput}
        placeholder={"Medicine Name"}
        maxLength={12}
        onChangeText={(text) => {
          this.setState({
            firstName: text,
          });
        }}
      />
      <TouchableOpacity>
      <Text>Search</Text>
      </TouchableOpacity>
      </View>
    )
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerItemsContainer: {
    flex: 0.8,
  },
  
  logOutContainer: {
    flex: 0.2,
    justifyContent: "flex-end",
    paddingBottom: 30,
    flexDirection: "row",
  },
  logOutButton: {
    height: 30,
    width: "85%",
    justifyContent: "center",
    padding: 10,
  },
  imageContainer: {
    flex: 0.75,
    width: "40%",
    height: "20%",
    marginLeft: 20,
    marginTop: 30,
    borderRadius: 40,
  },
  logOutText: {
    fontSize: 30,
    fontWeight: "bold",
  },
});