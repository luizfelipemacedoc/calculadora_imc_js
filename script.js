//função para a o botão calcular
function calcular() {
    //pegar inputs do usuário
    const input_altura = document.getElementById('altura').value;
    const input_peso = document.getElementById('peso').value;
    //formula imc
    let imc = parseFloat(input_peso / (input_altura * input_altura)).toFixed(2);
    //condicional para exibir resultado
    if (input_altura == "" || input_peso == "") {
      alert("Não podem haver campos vazios!")
    }
    else if (imc < 18.5) {
      document.getElementById('resultado').innerHTML = `Seu IMC é de ${imc}kg/m². <br> Você está abaixo do peso.`;
    } 
    else if (imc >= 18.5 && imc <= 24.9) {
      document.getElementById('resultado').innerHTML = `Seu IMC é de ${imc}kg/m². <br> Você está com peso normal.`;
    } 
    else if (imc >= 25 && imc <= 29.9) {
      document.getElementById('resultado').innerHTML = `Seu IMC é de ${imc}kg/m². <br> Você está com sobrepeso.`;
    } 
    else if (imc > 30) {
      document.getElementById('resultado').innerHTML = `Seu IMC é de ${imc}kg/m². <br> Você está obeso.`;
    }
  }