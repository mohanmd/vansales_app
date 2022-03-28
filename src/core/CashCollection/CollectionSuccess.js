import * as React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {TextInput} from 'react-native';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import pages_style from '../../../assets/styles/pages_style'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const styles = {
  searchBar : {
      backgroundColor: '#fff',
      padding: '10px',
      // maxWidth: '400px',
      width: '100%',
  },
  addCustomer : {
    borderRadius :'10px'
  },
  actionbutton :{
    background:'#ecb800', 
    color : '#432908' ,
    textTransform: 'captialize',
    fontWeight: '600'
  }
}
let overrideStyles = {
  padding: 0,
  margin: 0,
  borderRadiusTopLeft: '14px',
  borderRadiusTopRight: '14px',
};

export default function CollectionSuccess(props) {
  const { setSelectedValue,openmodal} = props;
  
  return (
    <div>
      <Dialog 
        maxWidth="xs"
        bodystyle={overrideStyles}
        style={{width: '200px', marginLeft: '40%', backgroundColor: 'transparent'}}
          open={openmodal}  
          onClose={props.handleClose}
          aria-labelledby="form-dialog-title"
          classes={props.dialogClasses}
        >
          <DialogTitle id="form-dialog-title" style={{background: '#ececec', color : 'green'}}>
            Cash Collected Successfully
            <IconButton onClick={this.handleClose}>
                <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent style={{background:'#ececec', paddingBottom: '20px'}}> 
            <Typography style={{ textAlign :'center' }}>Receipt No : CAS0902202</Typography>
          </DialogContent>
          <DialogActions align="center"  style={{background:'#ececec' , justifyContent:'center', paddingBottom: '30px'}}>
            <Button style={styles.actionbutton}>
              Done
            </Button>
            <Button style={styles.actionbutton}>
              Print
            </Button>
          </DialogActions>
        </Dialog>
    </div>
  );
}
