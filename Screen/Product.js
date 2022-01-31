import React, { Component } from 'react';
import{ View,Text,StyleSheet,Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import axios from "axios"



class Product extends Component{
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //       data:[],
    //       createdAt:"",
    //       name:"",
    //       image:"",
    //       pid:"",
    //       description:"",     
    //       price:"",
    //       sale_price:"",
    //       status:"",
    //       num_of_purchases:"",
    //       _id:""
    //     }
    //   }

    //   getAll(){
    //     axios.post("https://60cc791971b73400171f7d68.mockapi.io/api/v1/products").then(res=>{  
    //       console.log(res)  
    //        this.setState({data:res.data})   
    //     })
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