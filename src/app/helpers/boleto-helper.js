const tituloBancarioHelper = require("./titulo-bancario-helper");
const TIPOS_BOLETO = require("../../models/tipos-boleto");
const helper = {};
const dataInicial = new Date(1997, 10, 7, 12, 0, 0, 0);

helper.obterDataVencimento = (codigoBarras, tipo) => {
  let dataVencimento = new Date(
    dataInicial.getTime() + codigoBarras.substr(5, 4) * 86400000
  );

  return (
    dataVencimento.getFullYear() +
    "-" +
    dataVencimento.getMonth() +
    "-" +
    dataVencimento.getDate()
  );
};

helper.obterValor = (codigoBarras, tipo) => {
  return (codigoBarras.substr(9, 10) / 100.0).toFixed(2);
};

helper.gerarCodigoBarras = (numero, tipo) => {
  if (tipo == TIPOS_BOLETO.titulo)
    return tituloBancarioHelper.gerarCodigoBarras(numero);
  else if (tipo == TIPOS_BOLETO.concessionaria)
    return tituloBancarioHelper.gerarCodigoBarras(numero); // TODO: Alterar para helper de boleto de concessionaria
  else 
    throw "Tipo de boleto não suportado!";
};

module.exports = helper;
