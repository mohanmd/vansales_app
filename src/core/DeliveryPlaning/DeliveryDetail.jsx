import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Image, TextInput } from "react-native";
import { Button, Input, TextField } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import common_style from '../../../assets/styles/common_style.js';
import pages_style from '../../../assets/styles/pages_style';
import HeaderSecondary from '../HeaderSecondary';
import React, {Fragment} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import OrderCreate from '../SaleOrder/saleOrderCreate';



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


let tripList = [
    { 'id' : 'T120002121', 'truckno' : 'T13N00121', 'date' : '16/03/2022'},
    { 'id' : 'T120002122', 'truckno' : 'T13N00146', 'date' : '06/04/2022'},
    { 'id' : 'T120002123', 'truckno' : 'T13A00132', 'date' : '26/05/2022'},
    { 'id' : 'T120002124', 'truckno' : 'T13H00145', 'date' : '10/06/2022'},
    { 'id' : 'T120002125', 'truckno' : 'T13B00141', 'date' : '06/06/2022'},
]
export default function DeliveryDetail({navigation}) {
    
    const [open, setOpen] = React.useState(false);    
    const [createTrip, setCreateTrip] = React.useState(false);
    const [SelectedValue, setSelectedValue] = React.useState('');

    const handleOpen = () => {
        setOpen(true)
    };
    const handleClose = (value) => {
        setOpen(false)
        setSelectedValue(value)
    };


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
        height : '210px' ,
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
        <ImageBackground source={require('../../../assets/images/login_bg.png')} resizeMode="cover" style={common_style.image}>
            <View  style={pages_style.container}>
                <HeaderSecondary />
                <AppBar position="static" color="default" style={{background: 'linear-gradient(45deg, #f1f0e8, transparent)', boxShadow : 'none'}}>
                    <Toolbar>
                        <IconButton onClick={() => navigation.navigate('Home')}  edge="start" className={classes.menuButton} style={{color: '#c7781c'}} aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title} style={{fontWeight : 'bold', color: '#c7781c', fontSize : '22px'}}>
                            Delivery Planning
                        </Typography>
                        <TextInput placeholder='Search by Trip No / Truck No' style={pages_style.searchBar}></TextInput>
                    </Toolbar>
                </AppBar>
                <View style={pages_style.homepage_box}>
                    <View style={pages_style.orderList}>
                        {tripList.map((data) => (
                            <Card key={data.id} sx={{ minWidth: 275, textAlign : 'center' }} style={itemList} onClick={() => navigation.navigate('DeliveryRoute')} >
                                <CardContent>
                                    <Typography  component="div">
                                        Trip ID
                                    </Typography>
                                    <Typography style={itemTextTitle} >
                                        {data.id}
                                    </Typography>
                                    <Typography  component="div">
                                        Truck Number
                                    </Typography>
                                    <Typography style={itemTextTitle} >
                                        {data.truckno}
                                    </Typography>
                                    <Typography  component="div">
                                        Created Date
                                    </Typography>
                                    <Typography style={itemTextTitle} >
                                        {data.date}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                        {createTrip && (
                            <Card sx={{ minWidth: 275 }}  style={itemListAdd}>
                                <CardContent style={itemListAdd1}>
                                    <Typography  component="div" >
                                        <Button style={itemListAddText} onClick={handleOpen}>+ </Button>
                                    </Typography>
                                    <Typography>
                                        Create a Trip
                                    </Typography>
                                </CardContent>
                            </Card>
                        )}
                    </View>
                </View>
            </View>
        </ImageBackground>
    
        <OrderCreate setSelectedValue={SelectedValue} openmodal={open} handleClose={handleClose}></OrderCreate>

    </View>

    
    </>

  );
}

