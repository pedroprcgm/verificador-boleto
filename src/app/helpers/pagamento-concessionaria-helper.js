const helper = {};
const calcularDVMod10Atualizado = require("../functions/calcular-DV-mod10-atualizado");

helper.gerarCodigoBarras = (numero) => {
	let codigoBarras = "00000000000000000000000000000000000000000000";

	codigoBarras = handlerCampoUm(numero, codigoBarras);
	codigoBarras = handlerCampoDois(numero, codigoBarras);

	return codigoBarras;
};

handlerCampoUm = (numero, codigoBarras) => {
    let subs = numero.substring(0, 11);
    let DV = calcularDVMod10Atualizado(subs);
	return codigoBarras;
};

handlerCampoDois = (numero, codigoBarras) => {
	let subs = numero.substring(12, 23);
	let DV = calcularDVMod10Atualizado(subs);
	return codigoBarras;
};

handlerCampoTres = (numero, codigoBarras) => {
	return codigoBarras;
};

handlerCampoQuatro = (numero, codigoBarras) => {
	return codigoBarras;
};

module.exports = helper;
