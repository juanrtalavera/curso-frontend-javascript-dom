
window.onload = function () {

    console.log('2.1');
    dosuno();

    console.log('2.2');
    dosdos();

    console.log('2.3');
    dostres();

    console.log('2.4');
    doscuatro();

    console.log('2.5');
    doscinco();

    console.log('2.6');
    dosseis();

    console.log('2.7');
    dossiete();

    console.log('2.8');
    dosocho();

    console.log('2.9');
    dosnueve();
}


// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

function dosuno() {
    let newElem = document.createElement('div');
    document.body.appendChild(newElem);
}

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

function dosdos() {
    let newDiv = document.createElement('div');
    document.body.appendChild(newDiv);
    let newP = document.createElement('p');
    newDiv.appendChild(newP);
}

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

function dostres() {
    let newDiv = document.createElement('div');
    document.body.appendChild(newDiv);
    for (let i = 1; i < 7; i++) {
        let newP = document.createElement('p');
        newDiv.appendChild(newP);
    }
}

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

function doscuatro() {
    let newDiv = document.createElement('div');
    document.body.appendChild(newDiv);
    let newP = document.createElement('p');
    let newContent = document.createTextNode('Soy dinámico!');
    newP.appendChild(newContent);
    newDiv.appendChild(newP);
}

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

function doscinco() {
    let elements = document.getElementsByClassName('fn-insert-here');
    elements[0].innerHTML += 'Wubba Lubba dub dub';
}

/* 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']; */

function dosseis() {
    const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
    let newElem = document.createElement('ul');
    for (const app of apps) {
        let newContent = document.createElement('li');
        newContent.innerHTML += app;
        newElem.appendChild(newContent);
    }
    document.body.appendChild(newElem);
}

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

function dossiete() {
    let elements = document.getElementsByClassName('fn-remove-me');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

/* 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild. */

    function dosocho() {
        let elements = document.querySelectorAll('div');
        const firstElementDiv = elements[0];
        const newP = document.createElement('p');
        newP.textContent = 'Voy en medio!'; 
        firstElementDiv.insertAdjacentElement("afterend", newP);
    }

//  2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

function dosnueve() {
    let elements = document.getElementsByClassName('fn-insert-here');
    for (const element of elements) {
        const newP = document.createElement('p');
        newP.textContent = 'Voy en medio!'; 
        element.insertAdjacentElement("beforeend", newP);
    }
}