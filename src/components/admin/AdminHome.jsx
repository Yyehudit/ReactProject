import { Outlet,  Link} from 'react-router-dom'

import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

import EditBusinessData from "../businessData/EditBusinessData"  
import '../../App.css'

function AdminHome() {


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
  

    return (
      <>
       <EditBusinessData/>
        <ImageButton 
            focusRipple
            key={'שירות'}
            style={{
              width:200,
              height:100,
              margin:30
            }}
          >
            <Link to="/admin/services">
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
                {'השירותים שלנו'}
              </Typography>
            </Image>
            </Link>
          </ImageButton>
          <ImageButton 
            focusRipple
            key={'פגישות'}
            style={{
              width:200,
              height:100,
            }}
          >
            <Link to="/admin/meeting">
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
                {'פגישות'}
              </Typography>
            </Image>
            </Link>
          </ImageButton>
        <Outlet/>
     

        </>
    )
  }
export default AdminHome