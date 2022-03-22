import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Image, TextInput } from "react-native";
import { Button, Input, TextField } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import common_style from '../../assets/styles/common_style.js';
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
export default function Header() {
  const classes = useStyles();

  return (
    <View style={common_style.navbar}>
      <View style={common_style.navbarInner}>
          <Image source={require('../../assets/images/van_logo.png')} style={{width: 120, height:50}} />
          <View style={common_style.headerMenu}>
            <Text style={common_style.headerLink}>Home</Text>
            <Text style={common_style.headerLink}>Settings</Text>
            <Text style={common_style.headerLink}>Help</Text>
            <Text style={common_style.headerLink}>Logout</Text>
          </View>
      </View>
    </View>
  );
}


