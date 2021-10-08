import React from 'react'
import { View, Text,StyleSheet,StatusBar,Platform,SafeAreaView } from 'react-native'
import Header from '../comp/Header'
import Search from '../comp/Search'
import MenuBtn from '../comp/MenuBtn'
import ContactMenu from '../comp/ContactMenu'

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.AndroidSafeArea}>


          <Header/>
          <Search/>
          <MenuBtn navigation={navigation}/>
          <ContactMenu/>


            </SafeAreaView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        
        backgroundColor:"#1c1c1c",
        padding:20,
        
    },
    AndroidSafeArea: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        height:"100%",
    
      }
});
export default Home;
