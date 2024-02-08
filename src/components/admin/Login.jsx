import * as React from 'react';
import axios from 'axios'
import { Button , Input } from '@mui/material'
import { useState } from "react"
import { LoginServer } from '../../data/server/LoginServer';
import Sheet from '@mui/joy/Sheet';
import CssBaseline from '@mui/joy/CssBaseline';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Link from '@mui/joy/Link';
import '../../App.css'
import {DialogActions,DialogTitle,DialogContentText,DialogContent,Dialog} from '@mui/material';




function Login({onLoginSuccess}) {

  const[name,setName]=useState('');
  const[password,setPassword]=useState('');

  const handleLogin= async()=>{

    const res = await LoginServer({name,password});
    if(res=='success'){
    onLoginSuccess()
  }
  else{
    if(res=='failed')
    { 
      setOpen(true);
      setName("");
      setPassword("");
   }
   }}


   const [open, setOpen] = useState(false);

 
   const handleClose = () => {
     setOpen(false);
   }
  
   

    return ( 
    <>
    <main id="flex">
     <div id='imge'/>
      <CssBaseline />
      <Sheet id='sheet'
        sx={{
          width: 300,
          mx: 15, 
          my: 15, 
          py: 3, 
          px: 2, 
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md',
        }}
        variant="outlined"
      >
        <div>
          <Typography level="h4" component="h1">
            <b>Welcome!</b>
          </Typography>
          <Typography level="body-sm">Sign in to continue.</Typography>
        </div>
        <FormControl>
          <FormLabel>name</FormLabel >
          <Input value={name} onChange={(e)=>setName(e.target.value)}
            name="name"
            type="name"
            placeholder="name"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input value={password} onChange={(e)=>setPassword(e.target.value)}
            name="password"
            type="password"
            placeholder="password"
          />
        </FormControl>
        <Button onClick={handleLogin} sx={{ mt: 1  }}>Log in</Button>
        <Typography
          endDecorator={<Link href="/sign-up">Sign up</Link>}
          fontSize="sm"
          sx={{ alignSelf: 'center' }}
        >
          Don&apos;t have an account?
        </Typography>
 </Sheet> 
    </main>
    <Dialog 
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" align='right' >
          {"שם משתמש וסיסמא אינם נכונים"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" align='right'>
            ודא ששם המשתמש והסיסמא שהזנת נכונים 
            או פנה אלינו להזדהות
             וקבלת שם משתמש וסיסמא חדשים
          </DialogContentText>
        </DialogContent>
        <DialogActions id='custom-dialog-actions' >
          <Button onClick={handleClose} >בקשת עזרה</Button>
          <Button onClick={handleClose} autoFocus >
            נסה שוב
          </Button>
        </DialogActions>
      </Dialog>
       </>
     
  );

}

export default Login

      