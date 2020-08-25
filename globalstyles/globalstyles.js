import { StyleSheet } from "react-native";



export const globalstyles = StyleSheet.create({
    textStyle:{
        fontSize:20,
        fontWeight:'bold',
        color:'red',
        justifyContent:"center",
        textAlign:'center',
        padding:10,
        fontSize:"25px"
    },
    productlist: {
        borderBottomWidth: 3,
        borderRightWidth: 3,
        borderLeftWidth: 3,
        borderTopWidth: 3,
        borderTopColor: 'gray',
        borderLeftColor: 'gray',
        borderRightColor: 'gray',
        borderBottomColor: 'gray',
        // alignItems: "center",
        width:"100%",
        flexWrap:"wrap",
        overflow:"visible",
        // width:"1rem",
        // display:"flex",
        // flexDirection:"row",
        marginTop: 20,
        // flexShrink: 1,
        padding: 20,
    },
    textStyle1:{
        fontSize:16,
        fontWeight:'bold',
        color:'wheat',
        justifyContent:"center",
        textAlign:'center',
        padding:5,
        fontSize:"15px",
        backgroundColor:"green"
    },
    containerStyle:{
        padding: 20,
        flex:1,
        backgroundColor:"lightgreen"
    },
    touchButtonContainer:{
        backgroundColor: 'pink',
        padding:10,
        margin:20,
        borderRadius:5
    }
})