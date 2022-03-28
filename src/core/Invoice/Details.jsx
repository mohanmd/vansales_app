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
import PageSubHeader  from '../PageSubHeader';
import { Box, Grid, Card, CardActions, CardContent, IconButton, InputBase , Typography, CardMedia } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MinimizeIcon from '@mui/icons-material/Minimize';
import InvoiceSuccess from './InvoiceSuccess';



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

const dialogStyles = makeStyles((theme) => ({
    paper : {
        width : '800px'
    }
}));

function createData(s_no, article, lot_no,description, unit_price, available_stock,quantity,discount,total) {
    return {s_no, article,lot_no, description, unit_price, available_stock,quantity,discount,total };
  }
  
const rows = [
    createData("1",345783,43567865, 'Frozen yoghurt', 24, 100,10,10,3000),
    createData("2",345793,43567865, 'Frozen yoghurt', 24, 200,20,40,4000),
    createData("3",345794,43567865, 'Frozen yoghurt', 21, 205,23,43,5000),
    createData("4",345783,43567865, 'Frozen yoghurt', 24, 100,10,10,3000),
    createData("5",345793,43567865, 'Frozen yoghurt', 24, 200,20,40,4000),
    createData("6",345794,43567865, 'Frozen yoghurt', 21, 205,23,43,5000),

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

let styles = StyleSheet.create({
    tableWrapper : {
        flex : 1,

    }
})

export default function Details({ navigation }) {
    const dialogClasses = dialogStyles();


    const [open, setOpen] = React.useState(false);
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
    const actionBtns = {
        backgroundColor : '#ecb800', 
        minWidth : '220px',
        margin:'12px',
        fontWeight : 600,
        textTransform : 'capitalize',
        color : '#402608',
        fontSize : 17
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
    
  return (
    <>
    <View width="100%" height="100%" style={common_style.main_wrapper}>
        <ImageBackground source={require('../../../assets/images/login_bg.png')} resizeMode="cover" style={common_style.image}>
            <View  style={pages_style.container}>
                <HeaderSecondary />
                <AppHeader  title={"Invoice"}/>
                <PageSubHeader  checked={check} onClick={toggleChecked} headerSecond={false}/>
                <View style={pages_style.homepage_box}>
                    <View style={styles.tableWrapper}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left" style={tableHead}>S.No</TableCell>
                                        <TableCell align="left" style={tableHead}>Article</TableCell>
                                        <TableCell align="left" style={tableHead}>Lot No</TableCell>
                                        <TableCell align="left" style={tableHead}>Description</TableCell>
                                        <TableCell align="left" style={tableHead}>Unit Price</TableCell>
                                        <TableCell align="left" style={tableHead}>Avilable Stock</TableCell>
                                        <TableCell align="left" style={tableHead}>Quantity</TableCell>
                                        <TableCell align="left" style={tableHead}>Discount %</TableCell>
                                        <TableCell align="left" style={tableHead}>Total</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {rows.map((row, index) => (
                                    <StyledTableRow key={index}>
                                        <TableCell align="left"  style={tableCell}>{row.s_no}</TableCell>
                                        <TableCell align="left" style={tableCell}>{row.article}</TableCell>
                                        <TableCell align="left" style={tableCell}>{row.lot_no}</TableCell>
                                        <TableCell align="left" style={tableCell}>{row.description}</TableCell>
                                        <TableCell align="left" style={tableCell}>{row.unit_price}</TableCell>
                                        <TableCell align="left" style={tableCell}>{row.available_stock}</TableCell>
                                        <TableCell align="left" style={tableCell}>{row.quantity}</TableCell>
                                        <TableCell align="left" style={tableCell}>{row.discount}</TableCell>
                                        <TableCell align="left" style={tableCell}>{row.total}</TableCell>
                                    </StyledTableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </View>

                    <View style={pages_style.price_grid}>
                        <Grid container spacing={2}  justifyContent="end">
                            <Grid  item xs={2}>
                                <Typography sx={{ fontWeight : 'bold', fontSize :'17px', color : '#fff'}}>Total SKU :  4</Typography>
                            </Grid>
                            <Grid  item xs={2}>
                                <Typography sx={{ fontWeight : 'bold', fontSize :'17px', color : '#fff'}}>Total Quantity :  400</Typography>
                            </Grid>
                            <Grid  item xs={2}>
                                <Typography sx={{ fontWeight : 'bold', fontSize :'17px', color : '#fff'}}>Invoice Discount :  0</Typography>
                            </Grid>
                            <Grid  item xs={2}>
                                <View  style={{ textAlign :'right', paddingRight : 26}}>
                                    <Typography sx={{ fontWeight : 'bold', fontSize :'18px', color : '#ecb800'}}>Total :  $9000</Typography>
                                    <Typography sx={{ fontWeight : 'bold', fontSize :'18px', color : '#fff'}}>Net :  $9000</Typography>
                                </View>
                            </Grid>
                        </Grid>
                    </View>

                    <View style={pages_style.save_cancel_btn_view}>
                        <Button style={actionBtns} onClick={handleOpen}>Save and Cash</Button>
                        <Button style={actionBtns} onClick={() => navigation.navigate('Home')}>Cancel</Button>
                    </View>

                </View>
            </View>
        </ImageBackground>
 
        <InvoiceSuccess setSelectedValue={SelectedValue} openmodal={open} handleClose={handleClose} classes={dialogClasses}></InvoiceSuccess>

    </View>

    
    </>

  );
}

