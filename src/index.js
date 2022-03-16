//import './pgs/pg1.js';
//import './pgs/pg2.js';
//import './pgs/pg3.js';
import './assets/style.css';
import './pgs/pg1.css'
import './pgs/pg2.css'
import './pgs/pg3.css'

import {crearPg1} from './pgs/pg1.js';
import {crearPg2} from './pgs/pg2.js';
import {crearPg3} from './pgs/pg3.js';

function pg1(){
    crearPg1();
}

function pg2(){
    crearPg2();
}

function pg3(){
    crearPg3();
}

let contenedor = document.getElementById("body-container");
let lista = document.createElement('ul');

let opction = document.createElement('li');
let a1 = document.createElement('a');
a1.addEventListener('click', pg1);
//a1.href = "./pgs/pg1.html";
a1.innerHTML = "Pagina 1"
opction.appendChild(a1);

let opction2 = document.createElement('li');
let a2 = document.createElement('a');
a2.addEventListener('click', pg2);
//a2.href = "./pgs/pg2.html";
a2.innerHTML = "Pagina 2"
opction2.appendChild (a2);

let opction3 = document.createElement('li');
let a3 = document.createElement('a');
a3.addEventListener('click', pg3);
//a3.href = "./pgs/pg3.html";
a3.innerHTML = "Pagina 3"
opction3.appendChild(a3);

lista.appendChild(opction);
lista.appendChild(opction2);
lista.appendChild(opction3);

contenedor.appendChild(lista);
