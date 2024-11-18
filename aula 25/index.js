function enviarCalculo(){
    const conta1 = parseFloat(document.getElementById('conta1').value);
    const conta2 = parseFloat(document.getElementById('conta2').value);
    const operacao = document.getElementById('operacao').value;


let resultado;

if (isNaN(conta1) || isNaN(conta2)){
    alert('Por favor, insira dois números válidos.');
    return;
}

switch (operacao){
    case 'soma':
        resultado = conta1 + conta2;
        break;
    case 'subtracao':
        resultado = conta1 - conta2;
        break;
    case 'multiplicacao':
        resultado = conta1 * conta2;
        break;
    case 'divisao':
        if(conta2 === 0){
            alert('Não é possível dividir por zero.');
            return;
        }
        resultado = conta1 / conta2;
        break;
    default:
        alert('Operação inválida.');
        return;
}

document.getElementById('resultado').innerText = resultado;
}