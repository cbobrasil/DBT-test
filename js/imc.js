
function imc(peso,altura) {
    var imc =  peso / (altura * altura) ;
    if (imc < 18.5) {
        return 'Magreza';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Normal'
    } else if (imc >= 25 && imc < 30) {
        return 'Sobrepeso'
    } else if (imc >= 30 && imc < 35) {
        return 'Obesidade grau 1'
    } else if (imc >= 35) {
        return 'Obesidade grau 2'
    }
};


console.log(imc(80,1.53))