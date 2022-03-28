import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Image, TextInput } from "react-native";
import { makeStyles } from "@material-ui/core/styles";
import common_style from '../../assets/styles/common_style.js';
import pages_style from '../../assets/styles/pages_style';
import HeaderSecondary from './HeaderSecondary';
import React, {Fragment} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';




const useStyles = makeStyles((theme) => ({
    input: {
      color: "#fff"
    },  
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },

}));
export default function SaleOrderC() {
    const classes = useStyles();
    const itemList =  {
            maxWidth : '200px' , 
            width : '100%', 
            textAlign : 'center',
            borderRadius : '14px',
            border: '1px solid #ccc',
            height : '210px' 
    };
    const itemTextTitle =  {
        fontSize : '18px',
        color: '#186e9e',
        fontWeight : '600',
        marginBottom: '10px'
        
    };
    const mb0 = {
        marginBottom: '0'
    }
    const itemListAdd = {
        maxWidth : '200px' , 
        width : '100%', 
        height : '220px' ,
        textAlign : 'center',
        borderRadius : '14px',
        border: '1px solid #ccc',
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center',
        display: "flex",
    }
    const itemListAdd1 = {
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
    const itemListAddText = { 
        fontSize : '3em',
        color: '#186e9e',
    }
  return (
    <>
    <View width="100%" height="100%" style={common_style.main_wrapper}>
        <ImageBackground source={require('../../assets/images/login_bg.png')} resizeMode="cover" style={common_style.image}>
            <View  style={pages_style.container}>
                <HeaderSecondary />
                <AppBar position="static" color="default" style={{background: 'linear-gradient(45deg, #f1f0e8, transparent)', boxShadow : 'none'}}>
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} style={{color: '#c7781c'}} aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title} style={{fontWeight : 'bold', color: '#c7781c', fontSize : '22px'}}>
                            Sales Order
                        </Typography>
                        <TextInput placeholder='Search by Customer/Civil ID/Mobile Number' style={pages_style.searchBar}></TextInput>
                    </Toolbar>
                </AppBar>
                <View style={pages_style.homepage_box}>
                    <View style={pages_style.orderList}>
                        <Card sx={{ minWidth: 275, textAlign : 'center' }} style={itemList}>
                            <CardContent>
                                <Typography  component="div">
                                    Sale Order No
                                </Typography>
                                <Typography style={itemTextTitle} >
                                    T120002121
                                </Typography>
                                <Typography  component="div">
                                   Customer Name
                                </Typography>
                                <Typography style={itemTextTitle} >
                                    David Williams
                                </Typography>
                                <Typography  component="div">
                                    Created Date
                                </Typography>
                                <Typography style={itemTextTitle} >
                                    06/06/2022
                                </Typography>
                            </CardContent>
                        </Card>
                        
                        <Card sx={{ minWidth: 275, textAlign : 'center' }} style={itemList}>
                            <CardContent>
                                <Typography  component="div">
                                    Sale Order No
                                </Typography>
                                <Typography style={itemTextTitle} >
                                    T120002122
                                </Typography>
                                <Typography  component="div">
                                   Customer Name
                                </Typography>
                                <Typography style={itemTextTitle} >
                                    Robinson Walker
                                </Typography>
                                <Typography  component="div">
                                    Created Date
                                </Typography>
                                <Typography style={itemTextTitle} >
                                    16/06/2022
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card sx={{ minWidth: 275 }}  style={itemList}>
                            <CardContent>
                                <Typography  component="div">
                                    Sale Order No
                                </Typography>
                                <Typography style={itemTextTitle} >
                                    T120002121
                                </Typography>
                                <Typography  component="div">
                                    Sale Order No
                                </Typography>
                                <Typography style={itemTextTitle} >
                                    T120002121
                                </Typography>
                                <Typography  component="div">
                                    Sale Order No
                                </Typography>
                                <Typography style={itemTextTitle} >
                                    T120002121
                                </Typography>
                            </CardContent>
                        </Card>
                        
                        <Card sx={{ minWidth: 275 }}  style={itemListAdd}>
                            <CardContent style={itemListAdd1}>
                                <Typography  component="div" style={itemListAddText}>
                                    +
                                </Typography>
                            </CardContent>
                        </Card>
                    </View>
                </View>
            </View>
        </ImageBackground>
 

    </View>

    
    </>

  );
}

