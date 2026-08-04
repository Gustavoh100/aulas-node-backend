 export function somar(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        throw new Error("favor informar somente numeros")
    }
    return num1 + num2
}

 export function dividir (num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        throw new Error("favor informar somente numeros")
    }
    if (num2 == 0) {
        throw new Error("Não é possivel dividir por zero")
    }
    return num1 / num2
}




// throw rotinas de erros do usario , util para lidar co  situações inesperadas 
