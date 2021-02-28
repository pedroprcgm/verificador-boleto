const tituloBancarioHelper = require("./titulo-bancario-helper");
const TIPOS_BOLETO = require("../../models/tipos-boleto");
const helper = {};
const dataInicial = new Date(1997, 9, 7, 12);

helper.obterDataVencimento = (codigoBarras, tipo) => {
  let dataVencimento = new Date(
    dataInicial.getTime() + codigoBarras.substring(5, 9) * 86400000
  );

  let mes = dataVencimento.getMonth() + 1;
  return (
    dataVencimento.getFullYear() +
    "-" +
    (mes < 10 ? '0' + mes : mes) +
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
    return ''; // TODO: Implementar
  else 
    throw "Tipo de boleto não suportado!";
};

module.exports = helper;
