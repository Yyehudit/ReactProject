import axios from "axios";

const LoginServer= async(data) => {
    try{
      const res = await axios.post('http://localhost:8787/login',data)
      if(res.status===200)
        return 'success'
    }
    catch(error){
      if(error.response.status===401)
      return 'failed'
      else{
        console.log(error);
      }
    }

  }

  export { LoginServer }
