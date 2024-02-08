
import serviceStore from '../../data/store/ServicesStore';
import { observer } from 'mobx-react';
import { useEffect,useState } from 'react';
import { getServices } from '../../data/server/ServicesServer'
import  AddMeeting  from '../meeting/AddMeeting'
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
import {Typography,Grid,Button,CardMedia,CardContent,CardActions,Card} from '@mui/material';
import BiusnessData from '../businessData/BusinessData';



const Services = (observer(() => {

  useEffect(() => {
    getServices();
  }, []);


  const [showAddMeeting, setShowAddMeeting] = useState(false);

  const handleAdd = () => {
      setShowAddMeeting(true);
  };

  return (
    <>

    <BiusnessData/>
    <Grid container>
      {serviceStore.services.map((service, index) => (
        <Grid item xs={4} key={index}>
          <Card sx={{ maxWidth: 800, margin:5 }} >
            <CardMedia
              image={service.logo}
              title={service.name}
              component='img'
            />
            <CardContent align='right'>
            <Typography variant="subtitle1" component="div" align='left'>
             ${service.price}
            </Typography>
              <Typography gutterBottom variant="h4" component="div">
                {service.name}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {service.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">קרא עוד</Button>
              <Button onClick={handleAdd} size="small"> קבע פגישה </Button>
             
            </CardActions>
          </Card> 
  </Grid>
      ))}
  {showAddMeeting && <AddMeeting />}
    </Grid>
    </>
  );

 
}))
export default Services


  //   <ImageList sx={{ width: 2000, height: 1000}}>
  //     <ImageListItem key="Subheader" cols={2}>
  //     </ImageListItem>
  //     {itemData.map((item) => (
  //       <ImageListItem key={item.img}>
  //         <img
  //           src={`${item.img}?w=248&fit=crop&auto=format`}
  //           alt={item.title}
  //           loading="lazy"
  //         />

  //         <ImageListItemBar
  //         sx={{
  //           padding:10,

  //         }} 
  //         title={item.title}
  //         />
  //       </ImageListItem>
  //     ))}

  //   </ImageList>




  // <div>{service.name}</div>
  // <div>{service.description}</div>
  // <div>{service.price}</div>
  // <div>{service.duration}</div>
  // <img src='../../images/4.jpg' />



  // const itemData = [
  //   {
  //     img:'https://dara.co.il/wp-content/uploads/2023/09/1JSUrUY14OIrTSIdrpZz.jpg',
  //     title: 'ייעוץ השקעות'
  //   },
  //   {
  //     img:'https://dara.co.il/wp-content/uploads/2023/01/night_08-min-scaled.jpg',
  //     title: 'משכנתא',
  //   },
  //   {
  //     img:'https://dara.co.il/wp-content/uploads/2023/01/night_08-min-scaled.jpg',
  //     title: 'משכנתא',
  //   },
  //   {
  //     img:'https://dara.co.il/wp-content/uploads/2023/01/night_08-min-scaled.jpg',
  //     title: 'משכנתא',
  //   }
  // ];



















