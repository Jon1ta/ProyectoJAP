const pesosUru = "UYU";
const cotizacionDolar = 40;
const articulosCarrito = "https://japdevdep.github.io/ecommerce-api/cart/654.json"
let precioTotal = 0;
let subtotalDelProducto = 0;
let envio = 0;
let subtotal = 0;
let articulosDelArray = [];

function mostrarCarrito(array){
    
    let htmlContentToAppend = ``;
    for(let i = 0; i < array.length; i++){
        
        let article = array[i];
        subtotal = subtotalDelArticulo(article.currency, article.unitCost, article.count);
        subtotalDelProducto += subtotal; 
        if (i===0){
            htmlContentToAppend += `
            <tr class="thead-light">
            <th>   </th>
            <th>Artículos</th>
            <th>Costo</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th>   </th>
            </tr>`
        }
        htmlContentToAppend += `
                        
                            <tr>    
                                <td class="align-middle align-center" scope="row"><img style="height:8em" src="` + article.src + `" alt=" " class="img-thumbnail"></td>
                                <td class="align-middle align-center" style="font-size: larger;">`+ article.name +`</td>
                                <td class="align-middle align-center" style="white-space:nowrap">`+ article.currency +` `+ separadorDelPrecio(article.unitCost) +`</td>
                                <td class="align-middle align-center td"><input style="input-cantidad;" type="number" name="cantidad" id="${i}" onchange="changeSubtotal(${i})" value="`+ article.count +`" min=0 style="width:5ch"></td>
                                <td class="align-middle align-center" style="white-space:nowrap" id="subtotal${i}">USD `+ separadorDelPrecio(subtotal) +`</td>
                                
                            </tr><br>
                        
                    `            
        }
        document.getElementById("cart-list-container").innerHTML = htmlContentToAppend; 
        document.getElementById("productPrice").innerHTML = separadorDelPrecio(subtotalDelProducto); 
        badgeCarrito() //actualiza el badge del menú desplegable          
    }



// Calcula los subtotales segun la informacion de cada articulo

function subtotalDelArticulo(moneda, precio, cantidad){
    if (moneda===pesosUru){
        precio=precio/cotizacionDolar;
    }
    return precio*cantidad;
}


// Coma en el precio
function separadorDelPrecio(val){ 
    while (/(\d+)(\d{3})/.test(val.toString())){ 
     val = val.toString().replace(/(\d+)(\d{3})/, '$1'+' '+'$2'); 
    } 
    return val; 
    } 

// Actualiza el total de la compra
function actualizarPrecioTotal(){

    precioTotal = subtotalDelProducto + envio * subtotalDelProducto;
    document.getElementById("productPrice").innerHTML = "USD" + " " + separadorDelPrecio(subtotalDelProducto);
    document.getElementById("sendPrice").innerHTML ="USD" + " " + separadorDelPrecio((envio * subtotalDelProducto).toFixed(2));
    document.getElementById("totalAPagar").innerHTML = "USD" + " " + separadorDelPrecio(precioTotal); 
}

//Esta funcion actualiza en tiempo real el subtotal de los productos cuando cambiamos la cantidad de articulos
function changeSubtotal(i){
    
    let valor = document.getElementById(i).value;
    let article = articulosDelArray[i];
    article.count = parseInt(valor);
    precioTotal = 0;
    subtotalDelProducto = 0;
    subtotal = 0;
    mostrarCarrito(articulosDelArray);
    actualizarPrecioTotal();
    localStorage.setItem('carritoArt', JSON.stringify(articulosDelArray));
    badgeCarrito();
}

//función que actualiza el badge del menu desplegable según la cantidad de artículos que haya de cada elemento del array
function badgeCarrito(){

    if(localStorage.getItem('listaOk') != null){ 
        lista=localStorage.getItem('carritoArt');
        lista= JSON.parse(lista);
    }
    let cantidadesArt = 0;
    for(let i = 0; i < lista.length; i++){
        
        let article = lista[i];
        cantidadesArt += article.count;

    }
    document.getElementById("badgeCarrito").innerHTML = cantidadesArt;
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
//Funcion que obtiene el Json del carrito
getJSONData(articulosCarrito).then(function(resultObj){
    if (resultObj.status === "ok")
    {
        carritoObj = resultObj.data;
      
    
     articulosDelArray = carritoObj.articles;
    
     //guardar lista en el localstorage
     
    localStorage.setItem('carritoArt', JSON.stringify(articulosDelArray));
    localStorage.setItem('listaOk', 'cargada');
         
     // Mostramos el carrito una vez cargado el json
     mostrarCarrito(articulosDelArray);
        
    }
});

    // Evento Listener para calcular el precio de los envios
    document.getElementById("envio_premium").addEventListener("click", function() {
        envio = document.getElementById("envio_premium").value;
        actualizarPrecioTotal();
    });

    document.getElementById("envio_express").addEventListener("click", function() {
        envio = document.getElementById("envio_express").value;
        actualizarPrecioTotal();
    });

    document.getElementById("envio_standar").addEventListener("click", function() {
        envio = document.getElementById("envio_standar").value;
        actualizarPrecioTotal();
    });

    
    

  })




  