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
import OrderSuccess from './saleOrderSuccess';
import PageSubHeader  from '../PageSubHeader';
import { Box, Grid, Card, CardActions, CardContent, IconButton, InputBase , Typography, CardMedia } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MinimizeIcon from '@mui/icons-material/Minimize';


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
function createData(s_no, article, description, unit_price, available_stock,quantity,discount,total) {
    return {s_no, article, description, unit_price, available_stock,quantity,discount,total };
  }
  
const rows = [
    createData("1",345783, 'Frozen yoghurt', 24, 100,10,10,3000),
    createData("2",345793, 'Frozen yoghurt', 24, 200,20,40,4000),
    createData("3",345794, 'Frozen yoghurt', 21, 205,23,43,5000),
    createData("4",345783, 'Frozen yoghurt', 24, 100,10,10,3000),
    createData("5",345793, 'Frozen yoghurt', 24, 200,20,40,4000),
    createData("6",345794, 'Frozen yoghurt', 21, 205,23,43,5000),

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


export default function Orderlist({ navigation }) {
    const [open, setOpen] = React.useState(true);
    const [check, setCheck] =  React.useState(false);

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
    const itemListAdd1 = {
        flex: 1,
        justifyContent : 'center',
        alignItems : 'end'
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
        color : '#412608'
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

    let orderItems = [
        {'title' : 'Customer Name', 'val' : 'James'},
        {'title' : 'Customer No', 'val' : 'SA001'},
        {'title' : 'MTD Sales', 'val' : 'Sales'},
        {'title' : 'Sales Order', 'val' : '200214'},
        {'title' : 'Customer Person', 'val' : 'Hussian'},
        {'title' : 'Credit Balance', 'val' : '2000'}
    ]
  return (
    <>
    <View width="100%" height="100%" style={common_style.main_wrapper}>
        <ImageBackground source={require('../../../assets/images/login_bg.png')} resizeMode="cover" style={common_style.image}>
            <View  style={pages_style.container}>
                <HeaderSecondary />
                <AppHeader  title={"Sale Order"}/>
                <PageSubHeader  checked={check} onClick={toggleChecked} headerSecond={true} headerObj={orderItems}/>
                <View style={pages_style.homepage_box}>
                    <View style={{ display : check ? 'none' : ''}}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left" style={tableHead}>S.No</TableCell>
                                        <TableCell align="left" style={tableHead}>Article</TableCell>
                                        <TableCell align="left" style={tableHead}>Description</TableCell>
                                        <TableCell align="left" style={tableHead}>Unit Price</TableCell>
                                        <TableCell align="left" style={tableHead}>Avilable Stock</TableCell>
                                        <TableCell align="left" style={tableHead}>Quantity</TableCell>
                                        <TableCell align="left" style={tableHead}>Discount %</TableCell>
                                        <TableCell align="left" style={tableHead}>Total</TableCell>
                                        <TableCell align="left" style={tableHead}> </TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.s_no}>
                                        <TableCell align="left"  style={tableCell}>{row.s_no}</TableCell>
                                        <TableCell align="left" style={tableCell}>{row.article}</TableCell>
                                        <TableCell align="left" style={tableCell}>{row.description}</TableCell>
                                        <TableCell align="left" style={tableCell}>{row.unit_price}</TableCell>
                                        <TableCell align="left" style={tableCell}>{row.available_stock}</TableCell>
                                        <TableCell align="left" style={tableCell}>{row.quantity}</TableCell>
                                        <TableCell align="left" style={tableCell}>{row.discount}</TableCell>
                                        <TableCell align="left" style={tableCell}>{row.total}</TableCell>
                                        <TableCell align="center" style={tableCell}><HighlightOffIcon style={{color : '#f30000'}}></HighlightOffIcon></TableCell>
                                    </StyledTableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <View style={itemListAdd1}>
                            <Button component="span" onClick={() => navigation.navigate('SaleOrder')} style={itemListAddText}>
                                + Add Item
                            </Button>
                        </View>
                    </View>


                    <View style={{ display : check ? '' : 'none'}}>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2} >
                                {productList.map(list => (          
                                    <Grid  item xs={3}>
                                        <Card sx={{ minWidth: 275, borderRadius: 2 }}>
                                            <CardContent>
                                                <Grid container spacing={2}>
                                                    <Grid  item xs={5}>
                                                        <CardMedia
                                                            component="img"
                                                            height="110"
                                                            image="'assets/images/thumb.png'"
                                                            alt="Product Image"
                                                        />
                                                    </Grid>
                                                    <Grid  item xs={7}>
                                                        <View >
                                                            <Typography sx={{ fontWeight : 'bold', fontSize :'17px', lineHeight: '18px',  color : '#3d3d3d', display: '-webkit-box', overflow: 'hidden',textOverflow: 'ellipsis', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical',}}>{list.title}</Typography>
                                                            <Typography sx={{ fontWeight : 'bold', fontSize :'11px',  color : '#949494'}}>{list.description}</Typography>
                                                            <Typography sx={{ fontWeight : 'bold', fontSize :'15px', color : '#949494'}}>Article :  {list.article}</Typography>
                                                            <Typography sx={{ fontWeight : 'bold', color : '#3d3d3d', fontSize :'18px' }}>Price :  {list.price}</Typography>
                                                            <Grid container style={{ paddingTop : '10px'}}>
                                                                <Grid item xs="6" spacing={5}>
                                                                    <Paper
                                                                        component="form"  
                                                                        style={{backgroundColor : '#eff0ef',display: 'flex', alignItems: 'center',borderRadius: 20}}
                                                                    >
                                                                        <IconButton  aria-label="search">
                                                                            <MinimizeIcon style={{color : '#186e9e', fontSize : '13px'}}></MinimizeIcon>
                                                                        </IconButton>
                                                                        <InputBase textAlign="center" align="center" sx={{p: 0, textAlign : 'center' }} style={{ padding:0, flex: 1, backgroundColor : '#fff', textAlign : 'center' }} value="1"/>
                                                                        <IconButton  aria-label="search">
                                                                            <AddIcon style={{color : '#186e9e', fontSize : '13px'}}></AddIcon>
                                                                        </IconButton>
                                                                    </Paper>
                                                                </Grid>
                                                                <Grid  item xs="6" sx={{ paddingLeft: '10px'}}>
                                                                    <Button  variant="contained" style={{color : '#d36d00', paddingTop: '4px', paddingBottom: '4px', borderRadius : '20px', textTransform : 'capitalize', fontWeight :'600' }}>Add</Button>
                                                                </Grid>
                                                            </Grid>
                                                        </View>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                        
                                    </Grid>
                                ))};
                            </Grid>
                        </Box>
                        <View style={itemListAdd1}>
                            <Button varient="contained"  component="span" onClick={() => navigation.navigate('SaleOrder')} style={viewCart}>
                               View Product Cart
                            </Button>
                        </View>
                    </View>


                </View>
            </View>
        </ImageBackground>
 

        <OrderSuccess setSelectedValue={SelectedValue} openmodal={open} handleClose={handleClose}></OrderSuccess>
    </View>

    
    </>

  );
}

