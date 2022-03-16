//import {cuadrado} from './tools/cuadrado.js'
import { pic } from "../tools/pic.js";

export const crearPg3 = () => {
    let contenedor1 = document.getElementById("body-container");
    contenedor1.innerHTML = "";
    let contenedor = document.createElement("div");
    contenedor.id = 'pg3-contenedor';

    let titulo = document.createElement("h1");
    const he1 = document.createTextNode("Rocky")
    titulo.appendChild(he1)

    let imagen = document.createElement("img");
    imagen.src = 'https://i.imgur.com/FR9XHh1.jpg'
    imagen.style.width = '630px'
    imagen.style.height = '500px'

    let texto2 = document.createElement("h3");
    let texto = document.createTextNode(" Rocky es el primer perro que conozco desde que tenia 1 mes\
    Ahora tiene 12 años, y aunque los años se empiecen a notar el nunca cambia su carita de felicidad\
    Sabes que siempre va a estar ahí cuando lo necesites y siempre te va a sacar una sonrisa");
    texto2.appendChild(texto);

    let opction = document.createElement('li');
    let a1 = document.createElement('a');
    a1.href = "/bundle/index.html";
    a1.innerHTML = "Regresar"
    opction.appendChild(a1);

    let imagen2 = pic();
    contenedor1.appendChild(contenedor);
    contenedor1.appendChild(imagen);
    contenedor1.appendChild(texto2);
    //contenedor1.appendChild(opction);
    contenedor1.appendChild(imagen2);

}

//contenedor = cuadrado('Pagina 1', contenedor,'red');
