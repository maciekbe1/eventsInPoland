import axios from "axios";

// let klient = `http://localhost/index.php/restApi/request/model/Klient/pagination/{"page":1, "itemsPerPage":1000}`;
// let klislo = `http://localhost/index.php/restApi/request/model/KliSlo/pagination/{"page":1, "itemsPerPage":10000}`;
export const clinicsObj = `https://qang.bpower2.com/index.php/restApi/gwipClinics?details=true`;
export const clinicsName = `https://qang.bpower2.com/index.php/restApi/gwipClinics`;
export async function getToken (userData) {
    return await axios({
        method: 'post',
        url: 'https://qang.bpower2.com/index.php/restApi/generateJWT',
        headers: {
            'X-PINGOTHER': 'pingpong',
            'Content-Type': 'application/json'
        },
        data: {
            "user-key": userData
        }
    });
};
// export function getClinicsName(userData) {
//     return
// }
// let customers = [];
// export let arrOfClinicsName = [];

// export const getKlsId = (userData) => {
//     return getToken(userData).then(response => {
//         axios.get(klislo, {
//         headers: {
//             'Authorization': response.data.token
//         }
//     }).then( response =>{
//         response.data.data.objects.forEach(item => {
//             Object.keys(item).filter(key => {
//                 if(item[key] === '30002960') {
//                     customers.push(item.KLS_ID_KLIENT);
//                 }
//                 return null;
//             });
//         });
//     })
// })};
// export const getClinicsName = (userData) => {
//     return getKlsId(userData).then(() => {
//         getToken(userData).then(response => {
//             axios.get(klient, {
//                 headers: {
//                     'Authorization': response.data.token
//                 }
//             }).then(response => {
//                 response.data.data.objects.forEach(item => {
//                     Object.keys(item).filter(key => {
//                         customers.forEach(customer => {
//                             if (customer === item[key]) {
//                                 // console.log(item);
//                                 if (!arrOfClinicsName.includes(item.kli_nazwa)) {
//                                     arrOfClinicsName.push(item.kli_nazwa);
//                                 }
//                             }
//                         });
//                         return null;
//                     })
//                 });
//             }).catch(errors => console.log(errors));
//         });
//     })
// };

// export async function gettk(userData) {
//     return await axios({
//         method: 'post',
//         url: 'http://localhost/index.php/restApi/generateJWT',
//         headers: {
//             'X-PINGOTHER': 'pingpong',
//             'Content-Type': 'application/json'
//         },
//         data: {
//             "user-key": userData
//         }
//     })
// }
// export const duplicated = () => {
//     return arrOfClinicsName.filter((item,index,self) => self.indexOf(item)===index);
// }
// axios({
//     method: 'post',
//     url: 'http://localhost/index.php/restApi/generateJWT',
//     headers: {
//         'X-PINGOTHER': 'pingpong',
//         'Content-Type': 'application/json'
//     },
//     data: {
//         "user-key":"YWRtaW46ODVmZDdjODg5ZjcxY2YxMDUzNzU1OTVjZGRjMDZiOWQzOGZjNTYyY2I2OWM1NGY4YzE2NWFhNzUxZDgxYjNkOQ=="
//     }
// }).then( response => {
//     axios.get(klislo, {
//         headers: {
//             'Authorization': response.data.token
//         }
//     }).then( response =>{
//         response.data.data.objects.forEach(item => {
//             Object.keys(item).filter(key => {
//                 if(item[key] === '30002960') {
//                     console.log(item)
//                     customers.push(item.KLS_ID_KLIENT);
//                 }
//                 return null;
//             });
//         });
//         axios({
//             method: 'post',
//             url: 'http://localhost/index.php/restApi/generateJWT',
//             headers: {
//                 'X-PINGOTHER': 'pingpong',
//                 'Content-Type': 'application/json'
//             },
//             data: {
//                 "user-key":"YWRtaW46ODVmZDdjODg5ZjcxY2YxMDUzNzU1OTVjZGRjMDZiOWQzOGZjNTYyY2I2OWM1NGY4YzE2NWFhNzUxZDgxYjNkOQ=="
//             }
//         }).then(response => {
//             axios.get(klient, {
//                 headers: {
//                     'Authorization': response.data.token
//                 }
//             }).then(response => {
//                 response.data.data.objects.forEach(item => {
//                     Object.keys(item).filter(key => {
//                         customers.forEach(customer => {
//                             if (customer === item[key]) {
//                                 console.log(item);
//                                 arrOfClinicsName.push(item.kli_nazwa);
//                             }
//                         });
//                         return null;
//                     })
//                 });
//                 this.setState({arrOfClinicsName: arrOfClinicsName})
//             }).catch(errors => console.log(errors));
//         })
//     }).catch(errors => console.log(errors));
//
// }).catch(errors => console.log(errors));