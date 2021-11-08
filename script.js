function resumen() {
    var botonFinal = document.getElementById('precioFinal')

    var cantEnt = document.getElementById('cantidad').value

    var categEnt = document.getElementById('floatingSelect').value

    var subtotal = cantEnt * 1500



    switch (categEnt) {
        case '1':
            var total = subtotal * 0.2
            botonFinal.textContent = "TOTAL A PAGAR: $" + total
            botonFinal.style.backgroundColor = "red"
            break;

        case '2':
            var total = subtotal * 0.5
            botonFinal.textContent = "TOTAL A PAGAR: $" + total
            break;

        case '3':
            var total = subtotal * 0.85
            botonFinal.textContent = "TOTAL A PAGAR: $" + total
            break;
    }


}

function clear() {
    var botonFinal2 = document.getElementById('precioFinal')
    console.log(botonFinal2)
    /*botonFinal2.textContent = "TOTAL A PAGAR: $"*/
}