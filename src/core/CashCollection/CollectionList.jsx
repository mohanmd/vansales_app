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
import PageSubHeader  from '../PageSubHeader';
import { Box, Grid, Card, CardActions, CardContent, IconButton, InputBase , Typography, CardMedia } from '@mui/material';
import CollectionSuccess from './CollectionSuccess';



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

function createData(s_no, invoice, dueOn,balanceDays, dueAmount, amountRecived,netAmount) {
    return {s_no, invoice, dueOn,balanceDays, dueAmount, amountRecived,netAmount };
  }
  
const rows = [
    createData("1",345783,'05-02-2021', '10', '300', '2100','2400'),
    createData("2",345793,'15-02-2021', '20', '1200', '1200','2400'),
    createData("3",345794,'15-02-2021', '21', '2000', '5000','7000'),
    createData("4",345783,'06-02-2021', '11', '600', '7000','7600'),
    createData("5",345793,'09-02-2021', '23', '640', '2400','3040'),
    createData("6",345794,'11-02-2021', '11', '900', '5200','6100'),

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

export default function CollectionList({ navigation }) {
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
        fontSize : '15px',
        color : '#6b6b6b'
    }
    
  return (
    <>
    <View width="100%" height="100%" style={common_style.main_wrapper}>
        <ImageBackground source={require('../../../assets/images/login_bg.png')} resizeMode="cover" style={common_style.image}>
            <View  style={pages_style.container}>
                <HeaderSecondary />
                <AppHeader  title={"Cash Collection"}/>
                <PageSubHeader  checked={check} onClick={toggleChecked} headerSecond={false}/>
                <View style={pages_style.homepage_box}>
                    <View style={styles.tableWrapper}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left" style={tableHead}>S.No:</TableCell>
                                        <TableCell align="left" style={tableHead}>Invoice:</TableCell>
                                        <TableCell align="left" style={tableHead}>Due On:</TableCell>
                                        <TableCell align="left" style={tableHead}>Balance Days:</TableCell>
                                        <TableCell align="left" style={tableHead}>Due Amount:</TableCell>
                                        <TableCell align="left" style={tableHead}>Amount Recived:</TableCell>
                                        <TableCell align="left" style={tableHead}>Net Due Amount:</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.s_no}>
                                        <TableCell align="left"  style={tableCell}>{row.s_no}</TableCell>
                                        <TableCell align="left" style={tableCell}>{row.invoice}</TableCell>
                                        <TableCell align="left" style={tableCell}>{row.dueOn}</TableCell>
                                        <TableCell align="left" style={tableCell}>{row.balanceDays}</TableCell>
                                        <TableCell align="left" style={tableCell}>{row.dueAmount}</TableCell>
                                        <TableCell align="left" style={tableCell}>{row.amountRecived}</TableCell>
                                        <TableCell align="left" style={tableCell}>{row.netAmount}</TableCell>
                                    </StyledTableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </View>

                    <View style={pages_style.price_grid}>
                        <Grid container spacing={2}  justifyContent="end">
                            <Grid  item xs={2}>
                                <Typography sx={{ fontWeight : 'bold', fontSize :'16px', color : '#fff'}}>Due Amount</Typography>
                                <Typography sx={{ fontWeight : 'bold', fontSize : 23, color : '#fff'}}>1200</Typography>
                            </Grid>
                            <Grid  item xs={2}>
                                <Typography sx={{ fontWeight : 'bold', fontSize :'17px', color : '#fff'}}>Amount Recived</Typography>
                                <Typography sx={{ fontWeight : 'bold', fontSize : 23, color : '#fff'}}>2000</Typography>
                            </Grid>
                            <Grid  item xs={2}>
                                <Typography sx={{ fontWeight : 'bold', fontSize :'17px', color : '#fff'}}>Net Due Amount</Typography>
                                <Typography sx={{ fontWeight : 'bold', fontSize : 23, color : '#fff'}}>$7000</Typography>
                            </Grid>
                        </Grid>
                    </View>

                    <View style={pages_style.save_cancel_btn_view}>
                        <Button style={actionBtns} onClick={handleOpen}>Collect Cash and Save</Button>
                        <Button style={actionBtns} onClick={() => navigation.navigate('Home')}>Cancel</Button>
                    </View>

                </View>
            </View>
        </ImageBackground>
 
        <CollectionSuccess setSelectedValue={SelectedValue} openmodal={open} handleClose={handleClose} classes={dialogClasses}></CollectionSuccess>

    </View>

    
    </>

  );
}

