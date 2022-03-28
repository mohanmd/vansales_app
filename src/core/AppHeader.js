import { ImageBackground, StyleSheet, Text, View, Image, TextInput } from "react-native";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import pages_style from '../../assets/styles/pages_style';


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
export default function AppHeader(props, {navigation}) {
  const classes = useStyles();
  console.log(props)
  return (
    <AppBar position="static" color="default" style={{background: 'linear-gradient(45deg, #f1f0e8, transparent)', boxShadow : 'none'}}>
        <Toolbar>
            <IconButton onClick={() => navigation.navigate('Home')} edge="start" className={classes.menuButton} style={{color: '#c7781c'}} aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Typography  variant="h6" className={classes.title} style={{fontWeight : 'bold', color: '#c7781c', fontSize : '22px'}}>
                {props.title}
            </Typography>
            {props.searchbar && (
              <TextInput placeholder='Search by Customer/Civil ID/Mobile Number' style={pages_style.searchBar}></TextInput>
            )}
        </Toolbar>
    </AppBar>
  );
}


