import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Image, TextInput } from "react-native";
import { Button, Input, TextField } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import common_style from '../../assets/styles/common_style.js';
import homepage_style from '../../assets/styles/homepage_style';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
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

const styles = StyleSheet.create({
  navbarInner : {
    flex : '1',
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-between',
    paddingRight : '35px',
    paddingLeft : '35px'
  },
  nameBox : {
      textAlign : 'right',
      paddingRight : '25px'
  },  
  nameTitle : {
      color : '#fff',
      fontSize : '17px'
  },
  nameBox1 : {
      paddingBottom : '10px'
  } ,
});
export default function HeaderSecondary({navigation}) {
  const classes = useStyles();
  console.log(navigation)

  return (
    <View style={common_style.navbar}>
      <View style={styles.navbarInner}>
          <Image  onClick={() => navigation.navigate('Home')} source={require('../../assets/images/van_logo.png')} style={{width: 120, height:50}} />
          
          <View style={styles.nameBox}>
            <Text style={styles.nameBox1}><Text>Welcome</Text> <Text style={styles.nameTitle}>Mr. Shabbir Semari</Text></Text>
          </View>
      </View>
    </View>
  );
}


