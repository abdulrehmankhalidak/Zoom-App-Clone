import React from 'react'
import { View, Text, StyleSheet,Image,Scro, ScrollView} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';


const ContactItem=[

{
    type:"Starred",
    name:"Starred"
},
{
    type:"contact",
    name:"Haris",
    photo: require("../assets/pic1.jpeg"),
},
{
    type:"contact",
    name:"Abdulrehman",
    photo: require("../assets/pic2.jpeg"),
},
{
    type:"contact",
    name:"Ali",
    photo: require("../assets/pic3.jpg")
},
{
    type:"contact",
    name:"Rayyan",
    photo: require("../assets/pic4.jpg")
},
{
    type:"contact",
    name:"Ali",
    photo: require("../assets/pic4.jpg")
},
{
    type:"contact",
    name:"Ali",
    photo: require("../assets/pic3.jpg")
},
{
    type:"contact",
    name:"Ali",
    photo: require("../assets/pic3.jpg")
},



]




const ContactMenu = () => {
    return (

        <ScrollView>
        <View style={styles.container}>


          {ContactItem.map((contact,index)=>

            <View  key={index} style={styles.row}>
           {contact.type=="Starred"?
           ( <View style={styles.starredIcon}>

            <AntDesign name="star" size={30} color="#efefef" />
              </View>): 

              (
                  <Image source={contact.photo} style={styles.img}/>
              )
        }
           

          <Text style={styles.text}>{contact.name}</Text>
        </View>
          )}
          
        </View>
        </ScrollView>
    )
}

export default ContactMenu;

const styles = StyleSheet.create({
    container: {
      
    
     
    },
    row:{
          flexDirection:"row",
          alignItems:"center",
          marginTop:20,
          

    },
    starredIcon:{
        backgroundColor:"#333333",
        width:55,
        height:55,
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center",

    },
    text:{
       color:"#efefef",
       fontSize:18,
       fontWeight:"600",
       paddingLeft:15,
       
    },
    img:{
        width:55,
        height:55,
        borderRadius:20,
    }
  });
  
