import React, { Component } from 'react';
import{ View,Text,StyleSheet,Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import axios from "axios"



class Product extends Component{
    constructor(props) {
        super(props);
        this.state = {
          menu :[
            { 
              title: 'Non Veg Biryanis', 
              data: 'Biryani also known as biriyani, biriani, birani or briyani, is a mixed rice dish with its origins among the Muslims of the Indian subcontinent. This dish is especially popular throughout the Indian subcontinent, as well as among the diaspora from the region. It is also prepared in other regions such as Iraqi Kurdistan.',
            },
            { 
              title: 'Pizzas',
              data: 'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and various other ingredients (anchovies, olives, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven. In formal settings, like a restaurant, pizza is eaten with knife and fork, but in casual settings it is cut into wedges to be eaten while held in the hand. Small pizzas are sometimes called pizzettas.'
            },
            { 
             title: 'Drinks',
             data: 'A drink (or beverage) is a liquid intended for human consumption. In addition to their basic function of satisfying thirst, drinks play important roles in human culture. Common types of drinks include plain drinking water, milk, coffee, tea, hot chocolate, juice and soft drinks. In addition, alcoholic drinks such as wine, beer, and liquor, which contain the drug ethanol, have been part of human culture for more than 8,000 years.'
            },
            { 
              title: 'Deserts',
              data: 'A dessert is typically the sweet course that concludes a meal in the culture of many countries, particularly Western culture. The course usually consists of sweet foods, but may include other items. The word "dessert" originated from the French word desservir "to clear the table" and the negative of the Latin word servire'
            },
          ]
         }
      }

    //   renderAccordians=()=> {
    //     const items = [];
    //     for (item of this.state.menu) {
    //         items.push(
    //             <Accordian 
    //                 title = {item.title}
    //                 data = {item.data}
    //             />
    //         );
    //     }
    //     return items;
    // }

    
    render(){       
            
    return(
        <View style={{padding:10,}}>
            <View  style={{justifyContent:"space-between",flexDirection: "row",}}>
                <View >
                <Text style={styles.tText}>Product id</Text>
                <Text >pid 2</Text>
                
                <Text  style={styles.tText1}>Product Game</Text>
                <Text >Ergonomic Granite</Text>
                </View>
                <View style={{justifyContent:"flex-end",position:'relative'}}>
                    <Image
                    style={{width:100,height:100,}}
                    source={require('../assets/images.jpg')}
                    />
                </View>
            </View>
            <View >
                <Text style={styles.tText1}>Production Description</Text>
                <Text>ssjfas;lhf akfashfsawwffha;sghsawhf;a;shf;alshflhflahlgghlehg;elhgeg ;khe;kh;elhlh htlehjhh</Text>
            </View>

            <View  style={{justifyContent:"space-between",flexDirection: "row",marginTop:20}}>
                <View style={{justifyContent:"center"}}>
                <Text style={styles.tText}>Product Price</Text>
                <Text >234</Text>
                
                <Text style={styles.tText1}>Sales Price</Text>
                <Text >234</Text>
                </View>
                <View style={styles.purchased}>
                    <Text style={styles.pur1}>Purchased</Text>
                    <Text style={styles.pur2}>26</Text>           
                </View>
            </View>
            <View  style={{justifyContent:"space-between",flexDirection: "row",marginTop:20}}>
                <View >
                    <Text style={styles.tText}>Status</Text>
                    <Text style={styles.pubbttn}>Published</Text>
                </View>
                <View style={{marginTop:20}}>
                    <Ionicons name='newspaper-outline' size={38} style={{color:'#c05758'}}/>
                </View>
            </View>
        </View>    
     
    )
}

}

export default Product 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: '#fff',
      marginTop:20,    
      padding:10
    },
    tText:{
        color:'#928B8B'
    },
    tText1:{
        color:'#928B8B',
        marginTop:15
    },
    pubbttn:{width:'103%',height:'28%',backgroundColor:'green',borderRadius:20,color:'white',padding:10,},
    purchased:{alignItems:'center',justifyContent:"center",color:'red',position:'relative',backgroundColor:'#F4D9D9',width:'32%',borderRadius:5},
    pur1:{color:'#928B8B',fontWeight:'bold'},
    pur2:{fontSize:30,fontWeight:'bold',color:'#D0181B'},

})