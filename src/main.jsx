
import React from 'react'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client'

import AdminPage from "./components/admin/AdminPage"
import AdminHome from "./components/admin/AdminHome"
import UserPage from "./components/user/UserPage"
import ServiceList from "./components/services/Services"
import Services from './components/services/Services'
import Meeting from './components/meeting/Meeting.jsx'
import AddService from './components/services/AddService.jsx'
import AddMeeting from './components/meeting/AddMeeting.jsx'
import EditBusinessData from './components/businessData/EditBusinessData.jsx'

import './index.css'

const router = createBrowserRouter([
  {
      path:'/',
      element:<UserPage/>,
      errorElement:<div>404</div>
  },
  {
    path:'/login',
    element:<AdminPage/>
  },
  {
    path:'/services',
    element:<Services/>
  },
  {
    path:'/admin',
    element:<>
    <AdminHome/>
   
  </>,
    children:[
      {
        path:'services',
        element:
        <>
          <AddService/>
          <Services/>
        </>
      },
      {
        path:'meeting',
        element:<Meeting/>
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
