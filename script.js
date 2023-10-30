let Dolar = document.getElementById("dolar")
let Euro = document.getElementById("euro")
let Yen = document.getElementById("yen")
let Rupia = document.getElementById("rupia")
let resultado = document.getElementById("resultado")
let calcular = document.getElementById("calcular")
let valorDolar = 1000;
let valorEuro = 2000;
let valorYen = 10000;
let valorRupia = 3500;
let select = document.getElementById("selector")


calcular.addEventListener("click",()=>{
    let montoIngresado = document.getElementById("monto-ingresado").value;
    let numeroReal = Number(montoIngresado)

    switch (select.value) {
        case "dolar":
            resultado.innerHTML = "$ " + numeroReal * valorDolar
            
          break;
        case "euro":
            resultado.innerHTML = "$ " + numeroReal * valorEuro;
           
          break;
        case "yen":
            resultado.innerHTML = "$ " + numeroReal * valorYen;
 
          break;
        case "rupia":
        resultado.innerHTML = "$ " + numeroReal * valorRupia;
          break;
        default:

      }
      
})

/*-------------Crypto----------------- */

let bitcoin = document.getElementById("bitcoin")
let eth = document.getElementById("ethereum")
let resultadoCrypto = document.getElementById("resultadoCrypto")
let valorBit = 30139.37;
let valorEth = 1675.19;
let calcularCrypto = document.getElementById("calcularCrypto")
let selectCrypto = document.getElementById("select-crypto")

calcularCrypto.addEventListener("click",()=>{
    let montoCrypto = document.getElementById("monto-crypto").value;
    let cryptoReal = Number(montoCrypto)
    switch (selectCrypto.value) {
        case "bitcoin":
            resultadoCrypto.innerHTML = "$ " +  cryptoReal * valorBit;
            
          break;
        case "ethereum":
            resultadoCrypto.innerHTML = "$ " + cryptoReal * valorEth;
            
          break;
        default:

      }
})

/*---------------Temperatura--------------- */
let selecTemp = document.getElementById("select-temp")

let resultadoTemp = document.getElementById("resultado-temp")
let calcularTemp = document.getElementById("calcularTemp")


calcularTemp.addEventListener("click",()=>{
  let tempIngresada = document.getElementById("temp-input").value;
  let gradoTemp = Number(tempIngresada);
  if(selecTemp.value === "celsius"){
    resultadoTemp.innerHTML = "°F " + ((gradoTemp * 9/5) + 32)
  }
  if(selecTemp.value === "farenheit"){
    resultadoTemp.innerHTML = "°C " + ((gradoTemp - 32) * 5.9 )
  }
})



let celsius = 1; 
let fahrenheit = 33.8;
