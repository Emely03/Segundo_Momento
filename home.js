var lista = document.getElementById ("listadinamica");
//Crear un elemento a la lista de html


const products = ["Rosas","Claveles","Gerbera","Orquideas","Lilis","Alcatraces","Girasoles", "Hortensia"]
products.push("Margarita","pino")
for (let i= 0; i < products.length; i++) {
   
    const element = products[i];
    var li = document.createElement ("li");
    li.textContent= element;
    lista.appendChild (li);
}


window.onload = function() {
    window.productosflores = [];
}
function agregarElemento() {
    let dato = document.getElementById('texto').value;

    productosflores.push(dato);
}
function mostrarArreglo() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    for (const dato of productosflores) {
        let datoParrafo = document.createElement('p');
        datoParrafo.innerText = dato;
        resultado.appendChild(datoParrafo);
    }
}
