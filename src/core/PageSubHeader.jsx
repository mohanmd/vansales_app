import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Image, TextInput, sea } from "react-native"; 
import { makeStyles } from "@material-ui/core/styles";
import common_style from '../../assets/styles/common_style.js';
import { Box, Grid, Paper, Typography, Button,InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';


const styles = StyleSheet.create({
  headerInner : {
    backgroundColor : '#5f615e',
    paddingHorizontal : '30px',
    paddingTop : '13px',
    paddingBottom : '10px'
  },
  headerInner1 : {
    backgroundColor : '#3d3d3d',
    paddingVertical : '10px',
    paddingHorizontal : '30px',
  },
  itemTitle : {
    color : '#fff',
  },
  itemVal : {
    color : '#fff',
    fontWeight : '500'
  }
});


let orderItems = [
  {'title' : 'Customer Name', 'val' : 'James'},
  {'title' : 'Customer No', 'val' : 'SA001'},
  {'title' : 'MTD Sales', 'val' : 'Sales'},
  {'title' : 'Sales Order', 'val' : '200214'},
  {'title' : 'Customer Person', 'val' : 'Hussian'},
  {'title' : 'Credit Balance', 'val' : '2000'}
]
export default function PageSubHeader(props) {
 console.log(props);

  return (
    <View style={styles.headerWrapper}>
      <View style={styles.headerInner}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {orderItems.map((item, index) => (
              <Grid item xs={2} key={index}>
                <Typography style={{ color : '#fff', fontSize : '1.15rem'}}>{item.title}</Typography>
                <Typography style={{ color : '#fff', fontWeight : 'bold', fontSize : '1.2rem' }}>{item.val}</Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </View>
      
      { props.headerSecond && (
      <View style={styles.headerInner1} >
          <View style={styles.tabBox}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2} alignItems="center">
                <Grid  item xs={8} style={{ fontSize : '32px', color: '#fff', fontWeight : 'bold'}}>
                    <Button style={{ color : "#fff", textTransform : 'capitalize', fontSize : props.checked ? '18px' : '16px',  color : props.checked ? '#ffff' : '#ffffffb0'   }} onClick={props.onClick}>Available Products </Button>
                   /
                    <Button  style={{textTransform : 'capitalize', fontSize : props.checked ? '16px' : '18px', color : props.checked ? '#ffffffb0' : '#fff'  }}  onClick={props.onClick}>Product List Details </Button>
                </Grid>
                <Grid  item xs={3}>
                      <Paper
                        component="form"
                        style={{ height: '36px',backgroundColor : '#808080', paddingLeft: '8px', display: 'flex', alignItems: 'center', width: '100%', border: '1px solid #ccc' }}
                      >
                        <InputBase
                            style={{ paddingLeft: 1, flex: 1, color : '#fff' }}
                            placeholder="Search by Product Name / Article"
                            inputProps={{ 'aria-label': 'search google maps' }}/>
                        <IconButton type="submit" style={{ p: '10px' }} aria-label="search">
                          <SearchIcon style={{color : '#fff'}}></SearchIcon>
                        </IconButton>
                      </Paper>
                </Grid>
                <Grid  item xs={1} style={{ textAlign : 'center'}}>
                  <Typography style={{color : '#fff'}}>Cart (1)</Typography>
                </Grid>
              </Grid>
            </Box>
          </View>
      </View>
      )}
    </View>
  );
}


