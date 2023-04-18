import axios from 'axios'


export const BitcoinService = {
    getRate,
    getMarketPrice,
    getConfirmedTransactions
}

// function getRate(coins) {
//     //https://blockchain.info/tobtc?currency=USD&value=1, but idk, do i need to modity it somehow?
    
//     return axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
//         .then(res => {
//             return res.data})
//         .catch(err => {
//             console.log('failed get rate');
//             console.log('err',err);
//         })

// }
function getRate() {
    //https://blockchain.info/tobtc?currency=USD&value=1, but idk, do i need to modity it somehow?
    
    return axios.get(`https://blockchain.info/tobtc?currency=USD&value=1`)
        .then(res => {
            return res.data})
        .catch(err => {
            console.log('failed get rate');
            console.log('err',err);
        })
}

function getMarketPrice(){
    //go back to first page and look
}

function getConfirmedTransactions()  {
    //go back to first page and look
}

