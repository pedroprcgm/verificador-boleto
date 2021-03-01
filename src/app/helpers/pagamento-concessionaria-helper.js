const helper = {};
const stringReplace = require("../../infra/util/string-replace");
const calcularDVMod10Atualizado = require("../functions/calcular-DV-mod10-atualizado");

helper.gerarCodigoBarras = (numero) => {
	let codigoBarras = "00000000000000000000000000000000000000000000";

	codigoBarras = handlerCampoUm(numero, codigoBarras);
	codigoBarras = handlerCampoDois(numero, codigoBarras);
    codigoBarras = handlerCampoTres(numero, codigoBarras);
    codigoBarras = handlerCampoQuatro(numero, codigoBarras);

	return codigoBarras;
};

handlerCampoUm = (numero, codigoBarras) => {
    let campoUm = numero.substring(0, 11);
    let DV = calcularDVMod10Atualizado(campoUm);

    if (DV != numero.substring(11, 12)) throw 'DV campo um inválido!';

    codigoBarras = stringReplace(codigoBarras, 0, 11, campoUm);

	return codigoBarras;
};

handlerCampoDois = (numero, codigoBarras) => {
	let campoDois = numero.substring(12, 23);
    let DV = calcularDVMod10Atualizado(campoDois);
    
    if (DV != numero.substring(23, 24)) throw 'DV campo dois inválido!';

    codigoBarras = stringReplace(codigoBarras, 11, 22, campoDois);

	return codigoBarras;
};

handlerCampoTres = (numero, codigoBarras) => {
    let campoTres = numero.substring(24, 35);
    let DV = calcularDVMod10Atualizado(campoTres);

    if (DV != numero.substring(35, 36)) throw 'DV campo três inválido!';

    codigoBarras = stringReplace(codigoBarras, 22, 33, campoTres);

	return codigoBarras;
};

handlerCampoQuatro = (numero, codigoBarras) => {
    let campoQuatro = numero.substring(36, 47);
    let DV = calcularDVMod10Atualizado(campoQuatro);

    if (DV != numero.substring(47, 48)) throw 'DV campo quatro inválido!';

    codigoBarras = stringReplace(codigoBarras, 33, 44, campoQuatro);

	return codigoBarras;
};

module.exports = helper;
