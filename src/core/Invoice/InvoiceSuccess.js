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
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

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
    fontWeight: '600',
    textTransform : 'capitalize',
    fontSize : 16,
    paddingLeft : 20,
    paddingRight : 20,
    borderRadius : 10
  },
  modalCont : {
    background:'#ececec', 
    paddingBottom: 18, 
    paddingTop: 16
  },
  modalActions : {
    background:'#ececec' , 
    justifyContent:'center', 
    paddingBottom: '30px'
  },
  modalTitle : {
    background: '#c4c4c4', 
    color : '#262626', 
    width : '400px',
    flex : 1,
    justifyContent : 'space-between',
    flexDirection : 'row'
  },
  confirmText :{
    textAlign :'center', 
    fontSize : 18, 
    fontWeight : 600, 
    color: '#444'
  }
}
let overrideStyles = {
  padding: 0,
  margin: 0,
  borderRadiusTopLeft: '14px',
  borderRadiusTopRight: '14px',
};

export default function InvoiceSuccess(props) {
  const { setSelectedValue,openmodal} = props;
  
  return (
    <div>
      <Dialog
      PaperProps={{
        style: { borderRadius: 20 }
      }}
        bodystyle={overrideStyles}
        style={styles.addCustomer}
          open={openmodal}  
          onClose={props.handleClose}
          aria-labelledby="form-dialog-title"
          classes={props.dialogClasses}
        >
          <IconButton
          aria-label="close"
          onClick={props.handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: '#fff'
          }}
        >
          <HighlightOffIcon />
          </IconButton>
          <DialogTitle id="form-dialog-title" style={styles.modalTitle}>
            Invoice Confirmation 
          </DialogTitle>
          <DialogContent style={styles.modalCont}> 
            <Typography style={styles.confirmText}>Confirm Save and Cash ?</Typography>
          </DialogContent>
          <DialogActions align="center"  style={styles.modalActions}>
            <Button style={styles.actionbutton}>
              Save and Cash
            </Button>
            <Button style={styles.actionbutton}>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
    </div>
  );
}
