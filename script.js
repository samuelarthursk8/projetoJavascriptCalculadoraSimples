function  calculadora(){
    let num1 = parseFloat (prompt("Digite o primeiro valor: "))
    let num2 = parseFloat (prompt("Digite o segundo valor: "))
    let operacao = prompt("Digite a operação, (+, -, *, /): ")


let resultado

switch (operacao){
    case "+":
        resultado = num1 + num2
        break
    case "-":
        resultado = num1 - num2
        break
    case "*":
        resultado = num1 * num2
        break
    case "/":
        if(num2 == 0){
            alert("Erro! Divisão por zero!")
            return
        }
        resultado = num1 / num2
        break
    default:
        alert("Operação inválida!")
        return
}

alert ("Resultado: " + resultado)

}

calculadora()