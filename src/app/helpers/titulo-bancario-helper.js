const helper = {};
const stringReplace = require("../../infra/util/string-replace");

helper.gerarCodigoBarras = (numero) => {
  let codigoBarras = '00000000000000000000000000000000000000000000';
  codigoBarras = handlerCampoUm(numero, codigoBarras);
  codigoBarras = handlerCampoDois(numero, codigoBarras);
  codigoBarras = handlerCampoTres(numero, codigoBarras);
//   handlerCampoQuatro(numero);
//   handlerCampoCinco(numero);
return codigoBarras;
};

handlerCampoUm = (numero, codigoBarras) => {
  let codigoIF = numero.substring(0, 3);
  let codigoMoeda = numero.substring(3, 4);
  let posicoes20a24 = numero.substring(4, 9);
  let DV = calcularDVMod10(numero.substring(0, 9), 1);

  codigoBarras = stringReplace(codigoBarras, 0, 3, codigoIF);
  codigoBarras = stringReplace(codigoBarras, 3, 4, codigoMoeda);
  codigoBarras = stringReplace(codigoBarras, 19, 24, posicoes20a24);

  // TODO: Validar DV com DV do numero

  return codigoBarras;
};

handlerCampoDois = (numero, codigoBarras) => {
  let posicoes25a34 = numero.substring(9, 20);
  let DV = calcularDVMod10(numero.substring(10, 20), 2);
  codigoBarras = stringReplace(codigoBarras, 24, 34, posicoes25a34);

  // TODO: Validar DV com DV do numero

  return codigoBarras;
};

handlerCampoTres = (numero, codigoBarras) => {
  let posicoes35a44 = numero.substring(20, 31);
  let DV = calcularDVMod10(numero.substring(21, 31), 3);
  codigoBarras = stringReplace(codigoBarras, 34, 44, posicoes35a44);

  // TODO: Validar DV com DV do numero
  
  return codigoBarras;
};

handlerCampoQuatro = (numero) => {
  let DV = calcularDVCampoQuatro(); // TODO
};

handlerCampoCinco = (numero) => {
  let fatorVencimento = numero.substring(33, 37);
  let valor = numero.substring(37, 47);
};

calcularDVMod10 = (campo, ordem) => {
  let total = 0;
  let multiplicarPor2 = ordem == 1 ? true : false;
  for (let i = 0; i < campo.length; i++) {
    var digito = campo[i] * (multiplicarPor2 ? 2 : 1);
    if (digito > 9)  {
      let digitoTexto = digito.toString();
      for (var y = 0, digito = 0; y < digitoTexto.length; digito += digitoTexto[y++]*1);
    }
    multiplicarPor2 = !multiplicarPor2;
    total += digito;
  }
  let resto = total % 10;
  return Math.ceil(resto / 10) * 10 - resto;
};

module.exports = helper;
