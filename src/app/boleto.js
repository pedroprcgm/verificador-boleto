const boleto = {};
const TIPOS_BOLETO = require("../models/tipos-boleto");

const errorHandler = require("../infra/util/error-handler");
const boletoHelper = require("../app/helpers/boleto-helper");
const verificacaoBoleto = require("../models/verifacacao-boleto");
const dadosBoleto = require("../models/dados-boleto");

boleto.verificar = (numero) => {
	let tipoBoleto;
	let codigo;
	numero = numero.replace(/[^\d]/g, "");

	if (numero.length == 48 || numero[0] == 8) tipoBoleto = TIPOS_BOLETO.concessionaria;
	else if (numero.length == 47) tipoBoleto = TIPOS_BOLETO.titulo;
	else return new verificacaoBoleto(false);

	codigo = boletoHelper.gerarCodigoBarras(numero, tipoBoleto);

	return new verificacaoBoleto(
		true,
		new dadosBoleto(
			codigo,
			boletoHelper.obterValor(codigo, tipoBoleto),
			boletoHelper.obterDataVencimento(codigo, tipoBoleto)
		)
	);
};

module.exports = boleto;
