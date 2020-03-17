require("babel-core/register");
require("babel-polyfill");

const url = 'http://bastiencalou.fr:3000/party/5e70dd083d57b970f3812a96';

let fetchApi = async fetchApi => {
    fetch(url)
        .then(lastresponse => lastresponse.json())
        .then(lastresponse => JSON.stringify(lastresponse.items))
        .then(async (response) => { return await response.json()})
} 



// if(window.fetch) {
//     setTimeout(fetchApi, 5000)      
// }

async function oke() {
    const response = await fetch(url, {});
    const json = await response.json();
    const lala = await json.items

    return lala;
}

var ol = null

async function something() {
    await oke()
}

// setInterval(something, 10000)

console.log(something())

let da = [];

da.push(something())

// console.log(da)

const initData = something() 

// function nice (old, neww) {
//     if(old === neww) {
//         console.log('ok')
//     } else {
//         console.log('not ok')
//     }
// }

// setInterval(nice(initData, something()), 100);

