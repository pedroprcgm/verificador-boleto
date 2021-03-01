const helper = {};

const TIPOS_BOLETO = require("../../models/tipos-boleto");
const tituloBancarioHelper = require("./titulo-bancario-helper");
const concessionariaHelper = require("./pagamento-concessionaria-helper");

const dataInicial = new Date(1997, 9, 7, 12);

helper.obterDataVencimento = (codigoBarras, tipo) => {
	let dataVencimento;
	if (tipo == TIPOS_BOLETO.titulo)
		dataVencimento = new Date(dataInicial.getTime() + codigoBarras.substring(5, 9) * 86400000);
	else 
	{
		let anoAAAA = codigoBarras.substring(19, 23);
		let mesMM = codigoBarras.substring(23, 25);	
		let diaDD = codigoBarras.substring(25, 27);
		if (mesMM < 0 || mesMM > 12 || diaDD < 0 || diaDD > 31)
			return '';

		dataVencimento = new Date(anoAAAA, mesMM-1, diaDD);
	}

	let mes = dataVencimento.getMonth() + 1;
	let dia = dataVencimento.getDate();

	return (
		dataVencimento.getFullYear() +
		"-" +
		(mes < 10 ? "0" + mes : mes) +
		"-" +
		(dia < 10 ? "0" + dia : dia)
	);
};

helper.obterValor = (codigoBarras, tipo) => {
	if (tipo == TIPOS_BOLETO.titulo)
		return (codigoBarras.substring(9, 19) / 100.0).toFixed(2);
	else return (codigoBarras.substring(4, 15) / 100.0).toFixed(2);
};

helper.gerarCodigoBarras = (numero, tipo) => {
	if (tipo == TIPOS_BOLETO.titulo)
		return tituloBancarioHelper.gerarCodigoBarras(numero);
	else if (tipo == TIPOS_BOLETO.concessionaria)
		return concessionariaHelper.gerarCodigoBarras(numero);
	else throw "Tipo de boleto não suportado!";
};

module.exports = helper;
