
import {useState} from "react"
import { observer } from 'mobx-react';

import business from '../../data/store/BiusnessDataStore'
import { handleSetBiusnessData } from  '../../data/server/BiusnessDataServer'

import { Button ,Dialog,DialogActions,DialogContent , TextField} from '@mui/material'
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

const EditBusinessData=(observer(() => {

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState(''); 
  const [owner, setOwner] = useState(''); 
  const [description, setDescription] = useState(''); 

  const [open, setOpen] = useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', 
      height: 100,
    },
    '&, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));
  
  
  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  }));

    return(  
        <>
         <ImageButton onClick={handleClickOpen}
            focusRipple
            key={'עריכה'}
            style={{
              width:200,
              height:100,
              margin:30
            }}
          >
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color=" #021B20"
                sx={{
                  position: 'relative',
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {'עריכת פרטי העסק'}
              </Typography>
            </Image>
          </ImageButton>
     
        <Dialog
  open={open}
  onClose={handleClose}
  PaperProps={{
    component: 'form',
    onSubmit:(event) => {
         event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries((formData).entries());
      handleSetBiusnessData(formJson);  
      handleClose();        
    },
  }}
>        
   <DialogContent>  
          <TextField value={name} onChange={(e) => setName(e.target.value)} 
            margin="dense"
            id="name"
            name="name"
            label="name"
            type="text"
            fullWidth
          />
           <TextField value={address} onChange={(e) => setAddress(e.target.value)} 
            margin="dense"
            id="address"
            name="address"
            label="address"
            type="text"
            fullWidth
          /> 
          <TextField value={phone} onChange={(e) => setPhone(e.target.value)}
          margin="dense"
          id="phone"
          name="phone"
          label="phone"
          type="phone"
          fullWidth
        /> 
        <TextField value={owner} onChange={(e) => setOwner(e.target.value)} 
        margin="dense"
        id="owner"
        name="owner"
        label="owner"
        type="text"
        fullWidth
      />
       <TextField value={description} onChange={(e) => setDescription(e.target.value)}
      margin="dense"
      id="description"
      name="description"
      label="description"
      type="text"
      fullWidth
    />
              </DialogContent>
       <DialogActions>
           <Button onClick={handleClose}>Cancel</Button>
         <Button type="submit">ok</Button>
     </DialogActions>
</Dialog>     
       </>
)
}));




export default EditBusinessData;

