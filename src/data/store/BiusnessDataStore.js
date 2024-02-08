
import { makeObservable , observable , action} from 'mobx'

class dataStore{

     business = {};

     defaultBusiness={
        id: "123",
        name: "Coding Academy",
        address: "Rothschild 60 Tel Aviv",
        phone: "03-1234567",
        owner: "Yariv Katz",
        logo: "",
        description: "The best coding academy in the world",
     }
    constructor() {
        makeObservable(this,{
            business : observable,
            setBusinessData : action
        })
    }

    setBusinessData = (data) => {
        if(data !== undefined)
        { 
            this.business= data 
        }
        else{
           this.business = this.defaultBusiness
        }
    }

    

}
export default new dataStore();