require("babel-core/register");
require("babel-polyfill");

const url = 'http://bastiencalou.fr:3000/party/5e70dd083d57b970f3812a96';

if(!localStorage.getItem('initData')) {
    fetch(url)
    .then(lastresponse => lastresponse.json())
    .then(lastresponse =>  localStorage.setItem('initData',JSON.stringify(lastresponse.items)))
}

let repeatCall = [];
   

console.log(repeatCall)


console.log(localStorage.getItem('initData'))
// console.log(typeof localStorage.getItem('initData'))
// console.log(typeof repeatCall)
setInterval(() => {
    fetch(url)
        .then(response => response.json()) 
        .then(response => repeatCall.push(JSON.stringify(response.items)))
    if(repeatCall.toString() !== localStorage.getItem('initData')) {
        localStorage.setItem('initData', repeatCall.toString());
             
    }

    repeatCall.pop()
}, 1000);

    
    

    

