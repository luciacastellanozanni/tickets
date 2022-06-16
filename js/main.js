function calcularDescuento(){
    const precio= parseInt(200);
    let cantidad = parseInt(document.getElementById("cantidad").value);
    var categoria=parseFloat(document.getElementById("categoria").value);
    var descuento = categoria;
    var precioTotal = parseInt(cantidad * (precio-(precio*descuento)));
    const texto = precioTotal;
    document.getElementById("btn-total").innerHTML = `Total a Pagar: $${texto}`;
}

