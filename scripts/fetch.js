require("babel-core/register");
require("babel-polyfill");

const url = 'http://bastiencalou.fr:3000/party/5e70dd083d57b970f3812a96';

if(!localStorage.getItem('initData')) {
    fetch(url)
        .then(response => response.json())
        .then(response =>  localStorage.setItem('initData',JSON.stringify(response.items)))
}

let repeatCall = [];

setInterval(() => {
    fetch(url)
        .then(response => response.json()) 
        .then(response => { repeatCall.push(JSON.stringify(response.items))
            // console.log(localStorage.getItem('initData').toString().length)
            // console.log(repeatCall.toString().length);
            if(repeatCall.toString() !== localStorage.getItem('initData')) {
                localStorage.setItem('initData', repeatCall.toString());
                let item_created = response.items.length -1;
                console.log(item_created)
                // Notification authorization 
                // Notification.requestPermission();
                response.items.map( (item, index) => { 
                    if(index === item_created) { 
                        // Send notification if user accept
                        // new Notification(`Un nouvel item à été ajouté : ${h.name}`);
                        createElement(item._id, item.name)
                    }
                })
            }}
        )
    repeatCall.pop()
}, 1000);

// Create element if new item added
let createElement = (itemId,itemName) => {
        let newDiv = document.createElement("div");
        let form = document.createElement("form")
            form.setAttribute('method', 'post');
            form.setAttribute('action', `/party/5e70dd083d57b970f3812a96/items/${itemId}?_method=DELETE`)
        let button = document.createElement("button")
            button.innerHTML = 'Supprimez'
            button.setAttribute('type', 'submit')
        form.appendChild(button)
        let newContent = document.createTextNode(itemName);
            newDiv.appendChild(newContent)
            newDiv.appendChild(form)
        let currentDiv = document.getElementById('lastNotification');
            currentDiv.appendChild(newDiv);
}
    
    

    

