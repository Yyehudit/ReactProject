import { useEffect } from 'react';
import { observer } from 'mobx-react';

import MeetingStore from '../../data/store/MeetingStore';
import { getMeeting } from '../../data/server/MeetingServer'
import BusinessData from '../businessData/BusinessData';

import '../../App.css'

import { Alert,Typography, Grid, Button, CardMedia, CardContent, CardActions, Card } from '@mui/material';




const Meeting = (observer(() => {

  useEffect(() => {
    getMeeting();
  }, []);


  const getMeetingColor = (dateTime) => {
    const today = new Date();
    const meetingDate = new Date(dateTime);
    const timeDiff = Math.abs(meetingDate.getTime() - today.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if (diffDays < 0)
      return 'non'
    else {
      if (diffDays === 1) {
        return "error"; 

      } 
       if (diffDays <= 7) {
        return "warning"; 

      }
       if (diffDays >= 7) {
        return "success"; 
      }
    }

  };


  return (
    <>
    <div id="root">
      <BusinessData />
      <Grid container>
        {MeetingStore.meetings.map((meeting, index) => (
          <Grid item xs={4} key={index}>
            <Card sx={{ maxWidth: 800, margin: 5 }} >
              <CardContent align='right'>
              <Typography component="div" >
                        <Alert  sx={{ fontSize: '2rem' }} severity={getMeetingColor(meeting.dateTime)}>{meeting.dateTime}</Alert>
                </Typography>
                <Typography variant="h4" component="div">
                  {meeting.serviceType}
                </Typography>
                <Typography variant="h5" component="div" align='left'>
                  {meeting.clientName}
                </Typography>
                <Typography gutterBottom variant="h5" component="div" align='left'>
                  {meeting.clientPhone}
                </Typography>
                <Typography variant="h5" color="text.secondary" align='left'>
                  {meeting.clientEmail}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
       </div>
    </>
   
  );


}))
export default Meeting

















