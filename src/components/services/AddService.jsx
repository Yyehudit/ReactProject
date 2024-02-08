import { observer } from "mobx-react";
import { Button ,Dialog,DialogActions,DialogContent , TextField,DialogTitle,DialogContentText} from '@mui/material'
import { useState } from "react"
import {addServiceToServer}  from "../../data/server/ServicesServer";
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

const AddService = (observer(() => {

    const [newService, setNewService] = useState({
        id: '',
        name: '',
        description:'',
        price: 0,
        duration: 0,
        logo:"https://dara.co.il/wp-content/uploads/2023/01/night_08-min-scaled.jpg"
    });
           
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

     function changeProp(e) {
         setNewService({
            ...newService,
             [e.target.id]: e.target.value
         });
     }

     async function handleAddService() {  
           const res= await addServiceToServer(newService);
           if(res=='success'){
            setOpenSer(true)
          }
          else{
            if(res=='failed')
            {
              setOpenDialogSer(true);
            }
          }
    }

    const [openSer, setOpenSer] = useState(false);

    const handleCloseSer = () => {
      setOpenSer(false);
    };

    const [openDialogSer, setOpenDialogSer] = useState(false);

    const handleCloseDialogSer = () => {
      setOpenDialogSer(false);
    };

    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    
    return (
        <> 
         <ImageButton onClick={handleClickOpen}
            focusRipple
            key={'שירות'}
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
                {'הוספת שירות'}
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
      handleAddService(formJson);  
      handleClose();        
    },
  }}
>        
   <DialogContent>  
          <TextField value={newService.id} onChange={(e)=>changeProp(e)} 
            margin="dense"
            id="id"
            name="id"
            label="id"
            type="text"
            fullWidth
          />
           <TextField value={newService.name} onChange={(e)=>changeProp(e)} 
            margin="dense"
            id="name"
            name="name"
            label="name"
            type="text"
            fullWidth
          /> 
          <TextField value={newService.description} onChange={(e)=>changeProp(e)}
          margin="dense"
          id="description"
          name="description"
          label="description"
          type="text"
          fullWidth
        /> 
        <TextField value={newService.price} onChange={(e)=>changeProp(e)} 
        margin="dense"
        id="price"
        name="price"
        label="price"
        type="text"
        fullWidth
      />
       <TextField value={newService.duration} onChange={(e)=>changeProp(e)}
      margin="dense"
      id="duration"
      name="duration"
      label="duration"
      type="text"
      fullWidth
    />
              </DialogContent>
       <DialogActions>
           <Button onClick={handleCloseSer}>Cancel</Button>
         <Button type="submit">ok</Button>
     </DialogActions>
</Dialog>     
<Dialog 
        open={openSer}
        onClose={handleCloseSer}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" align='right' >
         {"הוספת שירות חדש לעסק הוגדר בהצלחה"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" align='right'>      
             {newService.name} : הגדרת שירות חדש לעסק בשם 
          </DialogContentText>
          <DialogContentText id="alert-dialog-description" align='right'>      
             שמחירו : {newService.price}  
          </DialogContentText>
          <DialogContentText id="alert-dialog-description" align='right'>      
          תיאור השירות : {newService.description}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description" align='right'>      
              אורך השירות : {newService.duration}
          </DialogContentText>
          <DialogActions id='custom-dialog-actions' >
          <Button onClick={handleCloseSer} >אישור</Button>
        </DialogActions>
        </DialogContent>
      </Dialog>
      <Dialog 
        open={openDialogSer}
        onClose={handleCloseDialogSer}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" align='right' >
         {"שירות עם שם זהה קיים כבר במערכת"}
        </DialogTitle>
        <DialogContent>
        <DialogContentText id="alert-dialog-description" align='right'>      
                שנה את שם השירות או החלף שם לשירות הקיים
          </DialogContentText>
          <DialogActions id='custom-dialog-actions' >
          <Button onClick={handleCloseDialogSer} >אישור</Button>
        </DialogActions>
          </DialogContent>
      </Dialog>  
       
        </>
    )
}))



export default AddService