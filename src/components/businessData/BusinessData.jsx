import { useEffect } from "react"
import { observer } from 'mobx-react';

import { getBiusnessData } from '../../data/server/BiusnessDataServer'
import dataStore from '../../data/store/BiusnessDataStore'

import '../../App.css'


import {Typography,CardMedia,CardContent,Card,Box} from '@mui/material';

const BusinessData = (observer(() => {
 
  useEffect(() => {
      getBiusnessData();
  }, []);
  

  return (
    <>
<Card sx={{ display: 'flex',backgroundColor:"#021B20"}}>
<Box sx={{ display: 'flex', flexDirection: 'column' }}>
  <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1, color:"white"  }}>
  <CardContent sx={{ flex: '1 0 auto' }}>
    <Typography variant="h4" component="div" >
             {dataStore.business.name}
            </Typography>
              <Typography variant="h6" >
                {dataStore.business.address}
              </Typography>
              <Typography variant="h6" >
                {dataStore.business.phone}
              </Typography>
              <Typography variant="h6" >
                {dataStore.business.owner}
              </Typography> 
              <Typography variant="button" >
                {dataStore.business.description}
              </Typography>
  </CardContent>
  </Box>
</Box>
<CardMedia
 image={'https://galiagroup.com/wp-content/uploads/2021/05/-%D7%A9%D7%9C-%D7%9C%D7%95%D7%92%D7%95-%D7%97%D7%93%D7%A9-02-e1621086634412.png'}
              title={dataStore.business.name}
              component='img'
  sx={{ width: 300 }}
/>
</Card>
    </>
  )
}))

export default BusinessData

