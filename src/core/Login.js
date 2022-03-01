import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";


const image = { uri: "https://reactjs.org/logo-og.png" };


export default function Login() {
  return (
    <View width="100%" height="100%">
    {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}> */}
      {/* <Text style={styles.text}>Inside</Text> */}
    {/* </ImageBackground> */}


            <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        style={{ backgroundColor: '#a38257'}}
        height = "70%"
        width = "70%"
        >

            dfd
        </Box>
   

  </View>
  )
}

const styles = StyleSheet.create({
    
    image: {
      flex: 1,
      justifyContent: "center"
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    }
  });
  
