import React from 'react'
import { ImageBackground, StyleSheet, Text, View, Image, TextInput } from "react-native";
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import { Button, Input, TextField } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";



const image = { uri: "../../assets/images/van_logo.png" };

const useStyles = makeStyles({
  input: {
    color: "#fff"
  }
});

export default function Login({navigation}) {
  console.log(navigation)
  const classes = useStyles();

  return (
    <View width="100%" height="100%" style={styles.main_wrapper}>
      <ImageBackground source={require('../../assets/images/login_bg.png')} resizeMode="cover" style={styles.image}>
        <View  style={styles.container}>
          <View style={styles.navbar}>
            <Image source={require('../../assets/images/van_logo.png')} style={{width: 120, height:50}} />
          </View>
          <View style={styles.loginBox}>
              <View style={styles.leftCol}>
                <Text style={styles.heading}>SAP <br />Van Sales<br/> &<br/>Distribution</Text>
                <Text style={styles.para}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
                <Text>Lorem Ipsum has been the industry's standard dummy text ever
since the 1500s, when an unknown printer took a galley of type
and scrambled it to make a type specimen book. It has survived
not only five centuries, but also the leap into electronic
typesetting, remaining essentially unchanged. </Text>
              </View>
              <View style={styles.rightCol}>
                <View style={styles.innerBox}>
                  <View style={styles.darkbox}>
                    <View style={styles.fieldCol}>
                        <Text style={styles.loginTitle}>Login</Text>
                        <TextField
                          color="secondary"
                          id="username"
                          label="Username"
                          multiline
                          margin="normal"
                          inputProps={{ className: classes.input }}
                        />
                        <TextField
                          color="secondary"
                          id="password"
                          label="Password"
                          multiline
                          margin="normal"
                          inputProps={{ className: classes.input }}
                        />
                    </View>
                      
                    <View style={styles.loginButtons}>
                      <Button  onClick={() => navigation.navigate('Home') }  style = {{color:'#fbac00'}}>Login</Button>
                      <Button style = {{color:'#fbac00'}}>Signup</Button>
                    </View>
                  </View>
                </View>
              </View>
          </View>
        </View>
        </ImageBackground>
    </View>

  )
}



const styles = StyleSheet.create({
  buttonColor : {
    color : '#fbac00'
  },  
    loginBox : {
      height: 'calc(100vh - 130px)',
      width: '100%',
      backgroundColor : '#fff',
      borderTopLeftRadius : '40px',
      borderBottomRightRadius : '40px',
      flex : 1,
      flexDirection : 'row',
      alignItems : 'center',
      padding : '30px'
    },
    leftCol : {
      width : '50%',
      paddingLeft : '2em',
      paddingRight : '2em'
    },
    rightCol : {
      width : '50%',
      height : '100%',
      padding : '40px'
    },
    innerBox :{
      backgroundColor : '#f5f5f5',
      height: '100%',
      padding : '20px',
      borderRadius : '13px',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
    darkbox : {
      backgroundColor : '#444',
      height : '100%',
      borderTopLeftRadius : '20px',
      borderBottomRightRadius : '20px',
      padding : '30px',
      justifyContent :'space-between'
    },  
    fieldCol : {

    },
    loginTitle : {
      fontSize : '30px',
      color :'#fff'
    },  
    loginButtons : {
      flex : 1,
      flexDirection : 'row',
      width : '100%',
      justifyContent : 'center',
      color : '#f00',
      height : '50px',
      paddingTop : '20px'
    },  
    heading : {
      textAlign : 'center',
      fontSize: '30px',
      fontWeight: 'bold',
      marginBottom : '20px'
    },  
    image:{
      flex : 1,
      justifyContent:'center',
      height: '100%',
      paddingBottom : '2em',
      paddingTop : '30px',
      width : '100%'
    },
    main_wrapper : {
      height: '100%',
    },
    container :{
      flex: 1,
      maxWidth: '1100px',
      margin: 'auto', 
      width: '100%',
      height: '100%',
      paddingLeft :'25px',
      paddingRight :'25px'
    },
    navbar : {
      height : '60px'
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    },
    para : {
      marginBottom :'15px'
    },
  });