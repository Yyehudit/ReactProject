import axios from "axios";
import MeetingStore from '../store/MeetingStore';


async function getMeeting() {
    const response  = await axios.get('http://localhost:8787/appointments');
    const meetings = response.data;
    MeetingStore.setMeetings(meetings);
    console.log(meetings)
}

const addMeetToServer = async (meeting) => {
    try {
        const res = await axios.post('http://localhost:8787/appointment', meeting);
        MeetingStore.addMeeting(res.data);
        console.log(res.data)
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
//  const handleSetMeeting = async (data) => {
//         try {
//           const response = await axios.post('http://localhost:8787/appointment',data)
//           MeetingStore.setMeetings(response.data)
//           if(response.status===200)
//           {
//             return 'success'
//           }  
//         }
//         catch(error)
//          {
//             if (error.response && error.response.status === 400)
//             return 'failed'
//         else {
//             console.log(error);
//         }
//         }
// }




 export { getMeeting, addMeetToServer };
