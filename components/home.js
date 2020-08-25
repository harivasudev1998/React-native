
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView,Image,TextInput } from 'react-native';
import { globalstyles } from "../globalstyles/globalstyles";

import axios from 'axios'


export default function HomeComponent({navigation}){
    const [allproducts, setallProducts] = useState([])
    const [permenantproducts, setpermenantProducts] = useState([])

    useEffect(()=>{
      axios.get('http://localhost:3000/allproducts')
            .then(res =>{
              console.log(res.data)
              setallProducts(res.data)
              setpermenantProducts(res.data)
            }).catch(err => {
              
              console.log(err);
          })
    },[])                                      
  
    function search(event) {
      let products = permenantproducts.filter((fprod) => {
          return fprod.name.toLowerCase().includes(event.toLowerCase())
      })
      setallProducts(products)
  }
    
  
    return (
      <View style={mystyles.maincontainer}>
        <button onClick={()=>{navigation.navigate('AddProduct', {item: allproducts})}} style={{backgroundColor:"red",padding:"30px"}}>Add product</button>
          {/* <Header></Header> */}
          
          <TextInput
                style={mystyles.inputsearch}
                placeholder='Search Product'
                onChangeText={search}

            ></TextInput>
         
          <ScrollView>
           
          {
            allproducts.map(product =>{
              console.log(product.image)
              return (
                <View key={product.id} style={globalstyles.productlist}>
                
                  
                  <TouchableOpacity onPress={()=>{navigation.navigate('Detail', {item: product})}}>
                    <Text style={mystyles.listitem}>{product.name}</Text>
                    <Image
                          style={mystyles.stretch}
                          source={{
                            uri:product.image
                          }}
                    />
                  </TouchableOpacity>
                
                </View>
              )
            })
          }
       
        </ScrollView>
   
          
      </View>
  
      
    )
  }



  
  const mystyles = StyleSheet.create({
    maincontainer:{
      backgroundColor:'lightgreen',
      flex:1,
      //alignItems:'center',
      //justifyContent:'center'
    },
    listitem:{
      // marginTop:20,
      fontSize:30,
      backgroundColor:'goldenrod',
      padding:20,
      margin:10,
      color:'purple'
    },
    stretch: {
      width: "100%",
      // justifyContent:"center",
      paddingRight:"100%",
      height: 300,
      resizeMode: 'stretch',
      // alignItems: "center"
      
    },
    cardstyle:{
      width:"25rem",
      display:"flex",
      padding:10,
      flexDirection:"row",
      flexBasis:"10"
    },
    inputsearch:{
      // marginBottom:10,
      paddingHorizontal:8,
      paddingVertical:8,
      borderBottomWidth: 3,
      borderRightWidth: 3,
      borderLeftWidth: 3,
      borderTopWidth: 3,
      borderTopColor: 'grey',
      borderLeftColor: 'grey',
      borderRightColor: 'grey',
      borderBottomColor:'grey',
      fontSize:20,
      backgroundColor:"cyan"
  },

  })
