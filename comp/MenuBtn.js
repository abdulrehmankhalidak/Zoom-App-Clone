import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const item=[

{
    id:1,
    name:"video-camera",
    bg:"#FF751F",
    title:"New Meeting",
},
{
    id:2,
    name:"plus-square",
    bg:"#0470DC",
    title:"Join",
},
{
    id:3,
    name:"calendar",
    bg:"#0470DC",
    title:"Schedule",
},
{
    id:4,
    name:"upload",
    bg:"#0470DC",
    title:"Share Screen",
}

]
 
const MenuBtn = ({navigation}) => {
   
    const OpenMeeting=()=>  navigation.navigate("MeetingRoom")

    
    

    return (
        <View style={styles.container}>

            {item.map((item,index)=>
            
          <View key={index} style={styles.btnConatiner}>
      <TouchableOpacity  
      onPress={()=>OpenMeeting()}
      
      style={[styles.btn,{
          backgroundColor:item.bg
      }]}>

       <FontAwesome  name={item.name} size={20} color="#efefef"/>
      </TouchableOpacity>
       <Text style={styles.menuText}>{item.title}</Text>

          </View>
            )}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        
        marginTop:20,
        paddingBottom:10,
        borderBottomColor:"#1f1f1f",
        borderBottomWidth:1,
        flexDirection:"row",
        justifyContent:"space-around",
    },
    btnConatiner:{
        
        alignItems:"center",
        flex:1,
        
        
    },
    btn:{
        width:50,
        height:50,
        borderRadius:15,
        alignItems:"center",
        justifyContent:"center",
    },
    menuText:{
        color:"#efefef",
        fontSize:12,
        fontWeight:"600",
        paddingTop:8,
    },
});

export default MenuBtn;