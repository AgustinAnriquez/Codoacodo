function calcularMonto(cant){
    return cant * 200
}

function calcularDescuento(monto, desc){
    return (desc * monto) / 100
}

const mostrar_total = document.querySelector('.box-resume')

document.querySelector('#resume').addEventListener('click', () =>{
    
    const cant = document.querySelector('.amount').value;
    const categoria = document.querySelector('.category_discount').value;
    let monto = calcularMonto(cant);
    let r;
    if (categoria == "student"){
    
        r = monto - calcularDescuento(monto, 80)

    }else if (categoria == "trainee"){

        r = monto - calcularDescuento(monto, 50)

    }else if (categoria == "junior"){

        r = monto - calcularDescuento(monto, 15)

    }

    console.log(r)
    mostrar_total.textContent = "Total a pagar: $ "+r

})