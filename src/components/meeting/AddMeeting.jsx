
import { Button ,Dialog,DialogActions,DialogContent , TextField,DialogTitle,DialogContentText} from '@mui/material'
import {useState} from "react"
import { observer } from 'mobx-react';
import {  addMeetToServer } from '../../data/server/MeetingServer'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const AddMeeting=(observer(() => {


    const [newMeeting, setNewMeeting] = useState('');  


    
     function changeProp(e) {
      setNewMeeting({
            ...newMeeting,
             [e.target.id]: e.target.value
         });
     }



  const handleDateTimeChange = (dateTime) => {
      const formattedDateTime = dateTime.format('YYYY-MM-DD');
      setNewMeeting((prevData) => ({
          ...prevData,
          dateTime: formattedDateTime,
      }));
      changeProp({ target: { id: 'dateTime', value: formattedDateTime } });
  };

     async function handleAddMeeting() {  
           const res= await addMeetToServer(newMeeting);
           if(res=='success'){
              setOpenDialog(true);
          }
          else{
            if(res=='failed')
            {
              setOpenopenDialogMeet(true)
            }
          }
    }
  

    const [openDialog, setOpenDialog] = useState(false);

  
    const handleCloseDialog = () => {
      setOpenDialog(false);
    };


    const [openDialogMeet, setOpenopenDialogMeet] = useState(false);

  
    const handleCloseopenDialogMeet = () => {
      setOpenopenDialogMeet(false);
    };


  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };
 

    return(
        <>
        <Dialog   
  open={open}
  onClose={handleClose}
  PaperProps={{
    component: 'form',
    onSubmit:(event) => {
         event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries((formData).entries());
        handleAddMeeting(formJson);  
      handleClose();        
    },
  }}
>        
   <DialogContent>  
   <TextField value={newMeeting.serviceType} onChange={(e)=>changeProp(e)} 
          margin="dense"
          id="serviceType"
          name="serviceType"
          label="serviceType"
          type="text"
          fullWidth
        /> 
          <TextField  value={newMeeting.clientName} onChange={(e)=>changeProp(e)} 
            margin="dense"
            id="clientName"
            name="clientName"
            label="clientName"
            type="text"
            fullWidth
          />
          
          <TextField value={newMeeting.clientPhone} onChange={(e)=>changeProp(e)} 
          margin="dense"
          id="clientPhone"
          name="clientPhone"
          label="clientPhone"
          type="text"
          fullWidth
        /> 
         <TextField value={newMeeting.clientEmail} onChange={(e)=>changeProp(e)} 
            margin="dense"
            id="clientEmail"
            name="clientEmail"
            label="clientEmail"
            type="email"
            fullWidth
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={[
                  'DatePicker',
                  'MobileDatePicker',
                  'DesktopDatePicker',
                  'StaticDatePicker',
                ]} style={{ left: '12%' }}
              >
                <DemoItem >
                  <DatePicker value={newMeeting.dateTime} onChange={handleDateTimeChange} 
                    disablePast
                    required />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
              </DialogContent>
       <DialogActions>
           <Button onClick={handleClose}>Cancel</Button>
         <Button type="submit">ok</Button>
     </DialogActions>
</Dialog>   
<Dialog 
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" align='right' >
         {"קביעת הפגישה הוגדרה בהצלחה"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" align='right'>      
                   קבעת פגישה בנושא {newMeeting.serviceType}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description" align='right'>      
             בתאריך   {newMeeting.dateTime}  
          </DialogContentText>
          <DialogContentText id="alert-dialog-description" align='right'>      
          פרטיך נקלטו במערכת בהצלחה
          </DialogContentText>
          <DialogContentText id="alert-dialog-description" align='right'>      
          אנו מודים לך על פנייתך
          </DialogContentText>
          <DialogActions id='custom-dialog-actions' >
          <Button onClick={handleCloseDialog} >אישור</Button>
        </DialogActions>
        </DialogContent>
      </Dialog>  
      <Dialog 
        open={openDialogMeet}
        onClose={handleCloseopenDialogMeet}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" align='right' >
         {"מתנצלים, התאריך הנוכחי אינו פנוי, בחר תאריך אחר"}
        </DialogTitle>
        <DialogContent>
        <DialogContentText id="alert-dialog-description" align='right'>      
                או לחילופין קבעו פגישה באמצעות נציג בטלפון או במייל
          </DialogContentText>
          <DialogActions id='custom-dialog-actions' >
          <Button onClick={handleCloseopenDialogMeet} >אישור</Button>
        </DialogActions>
          </DialogContent>
        
      </Dialog>  
       </>
)
}));




export default AddMeeting;


