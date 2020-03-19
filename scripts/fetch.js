require("babel-core/register");
require("babel-polyfill");

const url = 'http://bastiencalou.fr:3000/party/5e70dd083d57b970f3812a96';

if(!localStorage.getItem('initData')) {
    fetch(url)
    .then(lastresponse => lastresponse.json())
    .then(lastresponse =>  localStorage.setItem('initData',JSON.stringify(lastresponse.items)))
}

let repeatCall = [];

setInterval(() => {
    fetch(url)
        .then(response => response.json()) 
        .then(response => { repeatCall.push(JSON.stringify(response.items))
    if(repeatCall.toString() !== localStorage.getItem('initData')) {
        localStorage.setItem('initData', repeatCall.toString());
        let item_created = response.items.length -1;
        // Notification authorization 
        Notification.requestPermission();
        response.items.map( (h, index) => { 
            if(index === item_created) { 
                // Send notification if user accept
                new Notification(`Un nouvel item à été ajouté : ${h.name}`);
                let newDiv = document.createElement("div");
                let form = document.createElement("form")
                form.setAttribute('method', 'post');
                form.setAttribute('action', `/party/5e70dd083d57b970f3812a96/items/${h._id}?_method=DELETE`)
                let button = document.createElement("button")
                button.innerHTML = 'Supprimez'
                button.setAttribute('type', 'submit')
                form.appendChild(button)
                let newContent = document.createTextNode(h.name);
                newDiv.appendChild(newContent)
                newDiv.appendChild(form)
                let currentDiv = document.getElementById('lastNotification');
                document.body.before(newDiv, currentDiv);
            }
        })
    }})
    repeatCall.pop()
}, 1000);

    
    

    

