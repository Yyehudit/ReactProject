
import axios from 'axios';
import dataStore from '../store/BiusnessDataStore'


const getBiusnessData = async () => {
  try {
    const response  = await axios.get('http://localhost:8787/businessData');
    dataStore.setBusinessData(response.data);
  }
  catch (error) {
    console.log(error);
  }
}

const handleSetBiusnessData = async (data) => {
  try {
    const res = await axios.post('http://localhost:8787/businessData', data)
    dataStore.setBusinessData(res.data)
  }
  catch (error) {
    console.log(error);
  }
}


export { getBiusnessData, handleSetBiusnessData }



