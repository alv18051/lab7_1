export const cuadrado = (title,contenedor, color) =>{

    contenedor.style.width = '200px';
    contenedor.style.height = '200px';
    contenedor.style.backgroundColor = color;
    contenedor.innerHTML = title;
    contenedor.style.border = '0.5px solid black';
    return contenedor;
}
