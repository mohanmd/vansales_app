import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Image, TextInput } from "react-native";
import { makeStyles } from "@material-ui/core/styles";
import common_style from '../../../assets/styles/common_style.js';
import pages_style from '../../../assets/styles/pages_style';
import HeaderSecondary from '../HeaderSecondary';
import AppHeader from '../AppHeader';
import React, {Fragment} from 'react';
import { Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import PageHeader  from './PageHeader';
import { Box, Grid, Card, CardActions, CardContent, IconButton, InputBase , Typography, CardMedia } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MinimizeIcon from '@mui/icons-material/Minimize';
import { height } from '@mui/system';
import RouteMap from './RouteMap';


const useStyles = makeStyles((theme) => ({
    input: {
      color: "#fff"
    },  
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginleft: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },

}));
function createData(s_no, orderno, cname, ccity, mobileno,route) {
    return {s_no, orderno, cname, ccity, mobileno,route };
  }
  
const rows = [
    createData("1",345783, 'Mohamed', 'Ambattur', '9710823803'),
    createData("2",345793, 'John Williams', 'KK Nagar', '9089787665'),
    createData("3",345794, 'Hari Krish', 'Anna Nagar', '7665678798'),
    createData("4",345783, 'Sharuk', 'Mugappair', '9089787665'),
    createData("5",345793, 'Mohan Raj', 'Ambattur', '7665678798'),
    createData("6",345794, 'James Vasanth', 'Avadi', '9878765645'),

];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

let productList = [
    {
        "title":"Triple Chocolate Enrobed Brownie Cake",
        "description":"A truly decadent southern classic",
        "article" : 'P0001',
        "price" : "1200"
    },
    {
        "title":"Rice Dream Original Non-Dairy Beverage Organic",
        "description":"Rice Dream® Organic Original Enriched Rice Drink",
        "article" : 'P0002',
        "price" : "1300"
    },
    {
        "title":"Member's Mark Mini Plain Sliced Bagels",
        "description":"Kettle boiled like they do in the Big Apple",
        "article" : 'P0003',
        "price" : "1500"
    },
    {
        "title":"Rice Dream Original Non-Dairy Beverage Organic",
        "description":"Rice Dream® Organic Original Enriched Rice Drink",
        "article" : 'P0004',
        "price" : "1990"
    },
    {
        "title":"Triple Chocolate Enrobed Brownie Cake",
        "description":"A truly decadent southern classic",
        "article" : 'P0001',
        "price" : "1200"
    },
    {
        "title":"Rice Dream Original Non-Dairy Beverage Organic",
        "description":"Rice Dream® Organic Original Enriched Rice Drink",
        "article" : 'P0002',
        "price" : "1300"
    },
    {
        "title":"Member's Mark Mini Plain Sliced Bagels",
        "description":"Kettle boiled like they do in the Big Apple",
        "article" : 'P0003',
        "price" : "1500"
    },
    {
        "title":"Rice Dream Original Non-Dairy Beverage Organic",
        "description":"Rice Dream® Organic Original Enriched Rice Drink",
        "article" : 'P0004',
        "price" : "1990"
    }
]


export default function DeliveryRoute({ navigation }) {
    const [open, setOpen] = React.useState(false);
    const [check, setCheck] =  React.useState(true);

    const [SelectedValue, setSelectedValue] = React.useState('');
    const toggleChecked = () => {
        setCheck(value => !value)
    };

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
        height : '220px' ,
        textAlign : 'center',
        borderRadius : '14px',
        border: '1px solid #ccc',
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center',
        display: "flex",
    }
    const addOrderBtn = {
        flex: 1,
        justifyContent : 'center',
        alignItems : 'end',
        marginTop : 10,
        flexDiection:'row'
    }
    const itemListAddText = { 
        fontSize : '1.1em',
        color: '#3038ff',
        fontWeight : '600',
        textTransform: 'capitalize'
    }
    const viewCart = {
        fontSize : '1.1em',
        fontWeight : '600',
        textTransform: 'capitalize',
        backgroundColor : '#ecb800',
        color : '#412608',
        paddingLeft : 20,
        paddingRight : 20,
        marginTop : 5
    }
    const tableHead = {
        backgroundColor : '#7b7353',
        color : '#ffff',
        padding:'10px',
        fontWeight : '600',
        fontSize : '17px'
    }
    const tableCell = {
        padding:'10px',
        fontWeight : '800',
        fontSize : '15px'
    }

    const bottomButton ={
        height : '100%',
        flexDiection : 'row',
        flex : 1,
        flexGrow : 'nowrap'
    }

    let headerObj = [
        { 'title' : 'Customer Name', "data" : "James" },
        { 'title' : 'Customer No', "data" : "SA0012" },
        { 'title' : 'MTD Sales', "data" : "Sales" },
        { 'title' : 'Sales Order', "data" : "200021" },
        { 'title' : 'Customer Person', "data" : "David" },
        { 'title' : 'Credit Balance', "data" : "3000" } 
    ];

    
  return (
    <>
    <View width="100%" height="100%" style={common_style.main_wrapper}>
        <ImageBackground source={require('../../../assets/images/login_bg.png')} resizeMode="cover" style={common_style.image}>
            <View  style={pages_style.container}>
                <HeaderSecondary />
                <AppHeader  title={"Trip Planing"} searchbar={false}/>
                <PageHeader  checked={check} onClick={toggleChecked} headerSecond={true} headerObj={headerObj}/>
                <View style={pages_style.homepage_box}>
                    <View style={{ display : check ? '' : 'none'}}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left" style={tableHead}>S.No</TableCell>
                                        <TableCell align="left" style={tableHead}>Order Number</TableCell>
                                        <TableCell align="left" style={tableHead}>Customer Name</TableCell>
                                        <TableCell align="left" style={tableHead}>Customer City</TableCell>
                                        <TableCell align="left" style={tableHead}>Mobile Number</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.s_no}>
                                        <TableCell align="left"  style={tableCell}>{row.s_no}</TableCell>
                                        <TableCell align="left" style={tableCell}>{row.orderno}</TableCell>
                                        <TableCell align="left" style={tableCell}>{row.cname}</TableCell>
                                        <TableCell align="left" style={tableCell}>{row.ccity}</TableCell>
                                        <TableCell align="left" style={tableCell}>{row.mobileno}</TableCell>
                                    </StyledTableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <View style={addOrderBtn}>
                            <Button component="span" onClick={() => navigation.navigate('SaleOrder')} style={itemListAddText}>
                                + Add Order 
                            </Button>
                        </View>
                        
                        <View style={addOrderBtn}>
                            <View style={{ flexDirection : 'row', gap : 10 }}>
                                <Button varient="contained"  component="span"   onClick={toggleChecked}  style={viewCart}>
                                    Start Navigate
                                </Button>
                                <Button varient="contained"  component="span" onClick={() => navigation.navigate('Home')} style={viewCart}>
                                    Print Loading Sheet
                                </Button>
                            </View>
                        </View>
                    </View>

                    <View  style={{ display : check ? 'none' : ''}}>
                        <RouteMap></RouteMap>

                        <View style={{ flexDirection : 'row', gap : 10, justifyContent : 'end', paddingTop : 16 }}>
                            <Button varient="contained" component="span"  style={viewCart}>
                                Start Delivery
                            </Button>
                            <Button varient="contained"  component="span"  style={viewCart}>
                                Print Loading Sheet
                            </Button>
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>
 

    </View>

    
    </>

  );
}

