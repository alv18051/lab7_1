//import {cuadrado} from './tools/cuadrado.js'
import { pic } from "../tools/pic.js";

export const crearPg2 = () => {
    let contenedor1 = document.getElementById("body-container");
    contenedor1.innerHTML = "";

    let contenedor = document.createElement("div");
    contenedor.id = 'pg2-contenedor';

    let titulo = document.createElement("h1");
    const he1 = document.createTextNode("Zeus")
    titulo.appendChild(he1)

    let imagen = document.createElement("img");
    imagen.src = 'https://i.imgur.com/7hLKede.jpg'
    imagen.style.width = '400px'
    imagen.style.height = '500px'

    let texto2 = document.createElement("h3");
    let texto = document.createTextNode(" Zeus es un Weimaraner de 5 años, con pelaje gris y ojos verdes\
    Es un perro muy leal y jugueton que no dudara en jugar con cualquiera que le de atencion\
    Es una gran compañia para las largas noches de trabajo, y un fiel amigo que siempre te va a subir los animos");
    texto2.appendChild(texto);

    let opction = document.createElement('li');
    let a1 = document.createElement('a');
    a1.href = "./bundle/index.html";;
    a1.innerHTML = "Regresar"
    opction.appendChild(a1);


    let imagen2 = pic();

    contenedor1.appendChild(contenedor);
    contenedor1.appendChild(imagen);
    contenedor1.appendChild(texto2);
    //contenedor1.appendChild(opction);
    contenedor1.appendChild(imagen2);
    
//contenedor = cuadrado('Pagina 1', contenedor,'red');
}