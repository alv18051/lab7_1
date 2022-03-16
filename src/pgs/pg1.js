//import {cuadrado} from './tools/cuadrado.js'

import { pic } from "../tools/pic.js";

export const crearPg1 = () => {
    let contenedor1 = document.getElementById("body-container");
    contenedor1.innerHTML = "";

    let contenedor = document.createElement("div");
    contenedor.id = 'pg1-contenedor';

    let titulo = document.createElement("h1");
    const he1 = document.createTextNode("Azul")
    titulo.appendChild(he1)

    let imagen = document.createElement("img");
    imagen.src = 'https://i.imgur.com/wm4qhyM.jpg'
    imagen.style.width = '300px'
    imagen.style.height = '500px'

    let texto2 = document.createElement("h3");
    let texto = document.createTextNode("Azul es una gata rescatada color gris con machas negros, de ojos verde esmeralda. \
    Ella es una gata muy amistosa y amorosa que esta acostumbrada a que la mimen, parece una niña berrinchuda\
    Ella es una gran compañia y le encanta pasar tiempo con sus dueños, darles amor y siempre estar donde ellos esten");
    texto2.appendChild(texto);

    let opction = document.createElement('li');
    let a1 = document.createElement('a');
    a1.href = "./bundle/index.html";
    a1.innerHTML = "Regresar"
    opction.appendChild(a1);

    let imagen2 = pic();


    //contenedor = cuadrado('Pagina 1', contenedor,'red');
    contenedor1.appendChild(contenedor);
    contenedor1.appendChild(imagen);
    contenedor1.appendChild(texto2);
    //contenedor1.appendChild(opction);
    contenedor1.appendChild(imagen2);
    

}