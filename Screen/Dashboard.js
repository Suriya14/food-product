import React,{ Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,Button,TextInput,TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfilePicture from 'react-native-profile-picture';
import { Card, } from 'react-native-elements';
import Accordion from 'react-native-collapsible/Accordion';

import { SearchBar } from 'react-native-elements';
import Product from './Product';
import Accordian from './Accordian';


class Dashboard extends Component{
    constructor(props) {
        super(props);
        this.state = {  };
      }
    render() {
        const { navigation } = this.props;
        // const [text, setText] = useState('');

    
    return(

      <View style={styles.container}>
        <View style={{justifyContent:"space-between",flexDirection: "row",}}>
            <Ionicons name='options-outline' size={38} style={{justifyContent:"center",color:'red'}}/>
            <ProfilePicture
            isPicture={true}
            requirePicture={require('../assets/images.jpg')}
            shape='circle'
            style={{justifyContent:"center",alignItems: "center",width:30,height:30}}/>
        </View>
        
        <View style={{ flex:0 }}>
            <Text style={{fontSize:28,fontWeight:'bold'}}>All Products</Text>
            <Text >Lorem ipsum dolor sit amet</Text>
            <Button
                title="product"
                onPress={() =>
                navigation.navigate('Product')
                }
            />      
            {/* <Button
                title="Accordian"
                onPress={() =>
                navigation.navigate('Accordian',)
                }
            />    */}
        </View>  
            <View style={{ flex:1 }}>
                <View  style={styles.searchbox}>
                    <Ionicons name='search' size={20} style={styles.searchicon}/>      
                    <TextInput
                        style={{width:'90%',marginRight:0}}
                        placeholder="Search Products"
                    /> 
                    
                </View>
            </View>
            <View style={{ flex:6 }}>
                {/* <TouchableOpacity style={{width:'100%',Height:'30%',borderRadius:5,backgroundColor:"red"}}>
                     <Text style={{padding:10}}>hai</Text>
                </TouchableOpacity> */}
               <Product/>
            </View>
            <StatusBar style="auto" />
      </View>
    );
  }
}
  // https://60cc791971b73400171f7d68.mockapi.io/api/v1/products
  export default Dashboard
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
    //   backgroundColor: 'red',
      backgroundColor: '#fff',
      marginTop:20,    
      padding:10
    },
    searchbox:{
        marginTop:10,
        backgroundColor:'#DFE2E1',
        width:'100%',
        height:40,
        borderRadius:5,
        flexDirection:'row',
        justifyContent:"space-between"
    },
    searchicon:{
        alignItems:"center",
        justifyContent:'center',
        color:'gray',        
        padding:10
    },
    clearicon:{
        alignItems:"center",
        justifyContent:'center',
        color:'gray', 
        padding:10,
        
    }
    
  });