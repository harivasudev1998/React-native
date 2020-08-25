import React, { useState,useEffect } from 'react';
import axios from 'axios'
import RNPickerSelect from 'react-native-picker-select';
import { StyleSheet, Text, View, TextInput, Button} from "react-native";
import { Formik } from 'formik';
import { globalstyles } from '../globalstyles/globalstyles';

export default function AddProductComponent({navigation}){


    return (
        <Formik
        initialValues={{ name: '',price:'',rating:'',stock:'',category:'',image:'',description:'' }} onSubmit={values => 
            axios.post('http://localhost:3000/addproduct', values)
            .then(response=>{
                console.log(response);
                navigation.push('Home');
                
                
           
            }, error=>{
                console.error(error);
            })
        }>
         {({ handleChange, handleBlur, handleSubmit, values }) => (
            
             
           
         
        <View>
           
            
            <Text style={globalstyles.textStyle1}>Product Name </Text><TextInput 
                style = {mystyles.inputFriend}
                placeholder='add new product name....'
                onBlur={handleBlur('name')}
                onChangeText={handleChange('name')}
                value={values.name}
            />
            <Text style={globalstyles.textStyle1}>Price </Text><TextInput 
                style = {mystyles.inputFriend}
                keyboardType="number-pad"
                placeholder='add new product price....'
                onBlur={handleBlur('price')}
                onChangeText={handleChange('price')}
                value={values.price}
            />
            <Text style={globalstyles.textStyle1}>Rating </Text><TextInput 
                style = {mystyles.inputFriend}
                keyboardType="number-pad"
                placeholder='add new product rating....'
                onBlur={handleBlur('rating')}
                onChangeText={handleChange('rating')}
                value={values.rating}
            />
            <Text style={globalstyles.textStyle1}>Stock </Text><TextInput 
                style = {mystyles.inputFriend}
                keyboardType="number-pad"
                placeholder='add new product stock....'
                onBlur={handleBlur('stock')}
                onChangeText={handleChange('stock')}
                value={values.stock}
            />
            {/* <TextInput 
                style = {mystyles.inputFriend}
                placeholder='add new product category....'
                onBlur={handleBlur('category')}
                onChangeText={handleChange('category')}
                value={values.category}
            /> */}
            <Text style={globalstyles.textStyle1}>Category </Text>
            <RNPickerSelect
            style = {mystyles.inputFriend}
            value={values.category}
            onValueChange={handleChange('category')}
            items={[
                { label: 'Mobile', value: 'Mobile' },
                { label: 'Laptop', value: 'Laptop' },
                { label: 'Groceries', value: 'Groceries' }
            ]}
            />
            <Text style={globalstyles.textStyle1}>Image URL</Text><TextInput 
                style = {mystyles.inputFriend}
                placeholder='add new product image url....'
                onBlur={handleBlur('image')}
                onChangeText={handleChange('image')}
                value={values.image}
            />
            <Text style={globalstyles.textStyle1}>Description</Text><TextInput 
                style = {mystyles.inputFriend}
                placeholder='add new product description....'
                onBlur={handleBlur('description')}
                onChangeText={handleChange('description')}
                value={values.description}
            />
            <Button onPress={handleSubmit} title="Submit" />
           
        </View>
         )}
        </Formik>
    )

}

const mystyles = StyleSheet.create({
    inputFriend:{
        marginBottom:10,
        paddingHorizontal:10,
        paddingVertical:10,
        borderBottomWidth:1,
        borderBottomColor:'grey',
        fontSize:20
    }
})