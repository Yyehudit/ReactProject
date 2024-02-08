import { makeObservable, observable, action } from 'mobx'


class serviseStore {



    services = [];

    defaultServices = [
        { id: '1', name: 'יעוץ השקעות', description: 'יעוץ השקעות מקצועי וממוקד', price: 1000, duration: 60, logo: 'https://dara.co.il/wp-content/uploads/2023/09/1JSUrUY14OIrTSIdrpZz.jpg' },
        { id: '2', name: 'קניית דירה', description: 'התאמה לצרכי הלקוח', price: 500, duration: 60, logo: 'https://dara.co.il/wp-content/uploads/2022/05/PENTHOUSE-scaled.jpg' },
        { id: '3', name: 'משכנתא', description: 'יעוץ משכנתאות פרטי', price: 600, duration: 60, logo: 'https://dara.co.il/wp-content/uploads/2022/05/8.jpg' },
        { id: '3', name: 'הלוואות', description: 'הלוואות בפריסה רחבה', price: 600, duration: 60, logo: 'https://dara.co.il/wp-content/uploads/2023/01/night_08-min-scaled.jpg' },
        { id:'3', name: 'יעוץ כלכלי',description:'יעוץ כלכלה נכונה בדרך לקניית דירה', price: 600, duration: 60,logo:'https://pic1.calcalist.co.il/PicServer3/2018/12/27/872831/2_lm.jpg'},
       { id:'3', name: 'טיפים ',description:'טיפים שיסללו לכם את הדרך בבחירת הדירה', price: 600, duration: 60,logo:'https://dailyd.co.il/wp-content/uploads/2022/04/httpsdailyd.co_.il-%D7%9E%D7%94-%D7%AA%D7%A4%D7%A7%D7%99%D7%93%D7%94-%D7%A9%D7%9C-%D7%97%D7%91%D7%A8%D7%AA-%D7%A0%D7%93%D7%9C%D7%9F-%D7%95%D7%90%D7%99%D7%9A-%D7%90%D7%AA%D7%9D-%D7%99%D7%9B%D7%95%D7%9C%D7%99%D7%9D-%D7%9C%D7%A0%D7%A6%D7%9C-%D7%90%D7%AA-%D7%94%D7%99%D7%AA%D7%A8%D7%95%D7%A0%D7%95%D7%AA-%D7%A9%D7%9C-%D7%94%D7%97%D7%91%D7%A8%D7%94.jpg'},

    ];

    constructor() {
        makeObservable(this, {
            services: observable,
            setServices: action,
            addService: action,
        })
    }

    setServices = (services) => {
            this.services = [...this.defaultServices,...services];
    }

    addService = (service) => {
        this.services = [...this.services, service];
    }
}

export default new serviseStore();


// class servicesStore{

//     services = [];

//     defaultServices = [
//         { id:'1', name: 'יעוץ השקעות',description:'יעוץ השקעות מקצועי וממוקד' , price: 1000, duration: 60,logo:'https://dara.co.il/wp-content/uploads/2023/09/1JSUrUY14OIrTSIdrpZz.jpg'},
//         { id:'2', name: 'קניית דירה',description:'התאמה לצרכי הלקוח' , price: 500, duration: 60,logo:'https://dara.co.il/wp-content/uploads/2022/05/PENTHOUSE-scaled.jpg'},
//         { id:'3', name: 'משכנתא',description:'יעוץ משכנתאות פרטי' , price: 600, duration: 60,logo:'https://dara.co.il/wp-content/uploads/2022/05/8.jpg'},
//         { id:'3', name: 'הלוואות',description:'הלוואות בפריסה רחבה', price: 600, duration: 60,logo:'https://dara.co.il/wp-content/uploads/2023/01/night_08-min-scaled.jpg'},
//         { id:'3', name: 'יעוץ כלכלי',description:'יעוץ כלכלה נכונה בדרך לקניית דירה', price: 600, duration: 60,logo:'https://merkaz-nadlan.co.il/wp-content/uploads/2018/06/shutterstock_267766277.jpg'},
//         { id:'3', name: 'טיפים ',description:'טיפים שיסללו לכם את הדרך בבחירת הדירה', price: 600, duration: 60,logo:'https://dailyd.co.il/wp-content/uploads/2022/04/httpsdailyd.co_.il-%D7%9E%D7%94-%D7%AA%D7%A4%D7%A7%D7%99%D7%93%D7%94-%D7%A9%D7%9C-%D7%97%D7%91%D7%A8%D7%AA-%D7%A0%D7%93%D7%9C%D7%9F-%D7%95%D7%90%D7%99%D7%9A-%D7%90%D7%AA%D7%9D-%D7%99%D7%9B%D7%95%D7%9C%D7%99%D7%9D-%D7%9C%D7%A0%D7%A6%D7%9C-%D7%90%D7%AA-%D7%94%D7%99%D7%AA%D7%A8%D7%95%D7%A0%D7%95%D7%AA-%D7%A9%D7%9C-%D7%94%D7%97%D7%91%D7%A8%D7%94.jpg'},

//     ];

//     constructor() {
//         makeObservable(this, {
//             services: observable,
//             setServices: action,
//             addNewService: action
//         })
//     }

//     setServices = (data) => {
//         console.log('הגעתי')
//         if (typeof data !== 'object' || data === null) {
//             this.services = [...this.defaultServices];
//         }
//         else {
//             this.services = data;
//         }
//     }

//     addNewService = (service) => {
//         this.services = [...this.services, service];
//     }
// }

// export default new servicesStore();

