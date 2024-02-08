import axios from "axios";
import serviseStore from '../store/ServicesStore';


async function getServices() {
    const response  = await axios.get('http://localhost:8787/services');
    const services = response.data;
    serviseStore.setServices(services);
    
}

const addServiceToServer = async (service) => {
    try {
        const res = await axios.post('http://localhost:8787/service', service)
        serviseStore.addService(res.data)
        if (res.status === 200)
            return 'success'
    }
    catch (error) {
        if (error.response && error.response.status === 400)
            return 'failed'
        else {
            console.log(error);
        }
    }

}


 export { getServices, addServiceToServer };




 //  async function getServices() {
//     const response  = await axios.get('http://localhost:8787/services');
//     const res= response.data;
//     servicesStore.setServices(res);
//     console.log(response.data)
// }

//  const addServiceToServer=async(servise)=>{
//     try{
// const response=await fetch('http://localhost:8787/service',{
//   method:'post',
//   body:JSON.stringify(servise),
//   headers:{
//     "Content-Type":"application/json"
//   }
// })
// if(response.status===200){
//   serviseStore.addService(servise);
// console.log("good")
// }
// else{
// console.log("no");

// }
//     }
//     catch(error){
// console.log(error,"error")
//     }
//   }