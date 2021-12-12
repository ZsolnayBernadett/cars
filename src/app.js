/*
* File: app.js
* Author: Zsolnai Bernadett
* Copyright: 2021, Zsolnai Bermadett
* Group: Szoft II N
* Date: 2021-12-12
* Licenc: GNU GPL
*/

const url = 'http://localhost:3000/cars';

fetch(url)
.then(res => res.json())
.then(result => {
    let list = document.querySelector('#list');
    result.forEach(cars => {
        let li = document.createElement('li');
        li.innerHTML = cars.plate;
        li.setAttribute('class', 'list-group-item');
        list.append(li);
        console.log(cars.plate);
    });
});