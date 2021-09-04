window.onload = iniciar

function iniciar() {
    var btnCalcular = document.getElementById("btnCalcular")
    btnCalcular.addEventListener("click", clickBtnCalcular);
}

function clickBtnCalcular() {
    
    var btnCalcular = document.getElementById("btnCalcular");
    var txtPeso = document.getElementById("txtpeso");
    var peso = txtPeso.value;
    
    var txtAltura = document.getElementById("txtaltura");
    var altura = txtAltura.value;

    var resultado = document.getElementById("resultado") 
    var imc = peso / (altura * altura)

    resultado.textContent = 'Su IMC es:' + (imc.toFixed(2));

    if (altura === '' && peso === '') {
        resultado.textContent = 'Por favor, introduzca sus datos'
    }

    if (altura === '0' && peso === '') {
        resultado.textContent = 'Por favor, introduzca correctamene sus datos'
    }
    
    if (altura === '' && peso === '0') {
        resultado.textContent = 'Por favor, introduzca correctamene sus datos'
    }
    
    if (altura === '0' && peso === '0') {
        resultado.textContent = 'Por favor, introduzca correctamene sus datos'
    }

    if (altura === '1' && peso === '0') {
        resultado.textContent = 'Por favor, introduzca correctamene sus datos'
    }

    if (altura === '2' && peso === '0') {
        resultado.textContent = 'Por favor, introduzca correctamene sus datos'
    }

    if (altura === '3' && peso === '0') {
        resultado.textContent = 'Por favor, introduzca correctamene sus datos'
    }

    if (altura === '4' && peso === '0') {
        resultado.textContent = 'Por favor, introduzca correctamene sus datos'
    }

    if (altura === '5' && peso === '0') {
        resultado.textContent = 'Por favor, introduzca correctamene sus datos'
    }

    if (altura === '6' && peso === '0') {
        resultado.textContent = 'Por favor, introduzca correctamene sus datos'
    }

    if (altura === '7' && peso === '0') {
        resultado.textContent = 'Por favor, introduzca correctamene sus datos'
    }

    if (altura === '8' && peso === '0') {
        resultado.textContent = 'Por favor, introduzca correctamene sus datos'
    }

    if (altura === '9' && peso === '0') {
        resultado.textContent = 'Por favor, introduzca correctamene sus datos'
    }

    
    if (altura === '0' && peso === '1') {
        resultado.textContent = 'Por favor, introduzca correctamene sus datos'
    }

    if (altura === '0' && peso === '2') {
        resultado.textContent = 'Por favor, introduzca correctamene sus datos'
    }

    if (altura === '0' && peso === '3') {
        resultado.textContent = 'Por favor, introduzca correctamene sus datos'
    }

    if (altura === '0' && peso === '4') {
        resultado.textContent = 'Por favor, introduzca correctamene sus datos'
    }

    if (altura === '0' && peso === '5') {
        resultado.textContent = 'Por favor, introduzca correctamene sus datos'
    }

    if (altura === '0' && peso === '6') {
        resultado.textContent = 'Por favor, introduzca correctamene sus datos'
    }

    if (altura === '0' && peso === '7') {
        resultado.textContent = 'Por favor, introduzca correctamene sus datos'
    }

    if (altura === '0' && peso === '8') {
        resultado.textContent = 'Por favor, introduzca correctamene sus datos'
    }

    if (altura === '0' && peso === '9') {
        resultado.textContent = 'Por favor, introduzca correctamene sus datos'
    }
}