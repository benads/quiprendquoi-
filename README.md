# Qui prend quoi

## Installation

_À modifier si votre travail le nécessite_

`npm install`

`npm run start`

## Améliorations apportées

_Quelques exemples (voir le TP)_

- Affichage des items (`app.js`)
- Ajout d'un item (`app.js`)
- Modifcation d'un événement à travers une modal (`modal.pug`, `modal.js`)
- Modifcation d'un item lié à un événement à travers une modal (`modalModifyItem.js`, `modalModifyItem.pug`)
- Rafraîchissement automatique des items avec _fetch_ (`fetch.js`)
- Utilisation du localStorage (`fetch.js`)
- Utilisation de l'API de notification à l'ajout d'un item sur un événement (`fetch.js`)
- Ajout d'un item avec fetch (`addItem.js`)
- Suppression d'un item avec fetch (`deleteItem.js`)
- Meilleure présentation visuelle de façon général (j'ai fais ce que j'ai pu, j'ai du mal avec la design :( ) (`*.scss`)
- Mise en prod de l'application [ici](https://quiprendquoi.benjaminadida.fr)
- Mise en prod de l'API avec de légère modifs [ici](https://quiprendquoi-api.benjaminadida.fr)

## Article personnel

J'ai choisi de présenter une des fonctionnalités qui a été interessante a réaliser.
Il s'agit du rafraîchissement automatique, le but est de pouvoir, si changement il y a, de pouvoir aller modifier la liste des items sans avoir besoin de rafraichir la page. Cela peut etre util pour un utilisateur entre autre car si un autre utilisateur saisis un item sur l'evenement en question en meme temps que lui, le premier pourra donc le constater directement. 
Dans un second temps, si l'utilisateur accepte de recevoir les notifcations, il recevra une notification comme quoi un item a été ajouté à cet evenement.
```
setInterval(() => {
	fetch(url)
		.then(response => response.json())
		.then(response => {
			repeatCall.push(JSON.stringify(response.items));
			let repeatCallToString = repeatCall.toString();
			let initData = localStorage.getItem("initData");
			if (
				repeatCallToString !== initData &&
				repeatCallToString.length > initData.length
			) {
				localStorage.setItem("initData", repeatCall.toString());
				let item_created = response.items.length - 1;
				// Notification authorization
				Notification.requestPermission();
				response.items.map((item, index) => {
					if (index === item_created) {
						// Send notification if user accept
						new Notification(`Un nouvel item à été ajouté : ${item.name}`);
						createElement(item._id, item.name, item.user);
					}
				});
			}
		})
		.then(() => {
			document.querySelector(".lds-ellipsis").classList.remove("isVisible");
			document.querySelector(".lds-ellipsis").classList.add("none");
		});
	repeatCall.pop();
}, 5000);
```

Ceci est la fonction qui me permet de réaliser cela. La logique à laquelle j'ai pensé a été de stocker dans le `localStorage`, le tableau initial tel qu'il est quand l'utilisateur arrive sur la page (`initData`). Dans un second temps je crée un autre tableau (`repeatCall`) dans lequel je vais stocker un tableau que je récupere toutes les 5 secondes via mon call API. Ainsi toutes les 5 secondes (`repeatCall`) se reinitialisera afin de pourvoir comparer les differences avec `initData` dans le `localStorage`, à la moindre difference cela creera le html qui aura pour contenu le nouvelle item, et aussi envoyer une notification.

Ce que je pourrais améliorer, serait d'implementer des websockets, car le systeme de faire un call API toutes les 5 secondes n'est pas adapté dans un cas réel.
Le fait que l'utilisateur courant puisse voir ce qu'un autre utilisateur saisis est avantage.



