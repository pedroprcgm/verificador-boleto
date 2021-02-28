const helper = {};
const stringReplace = require("../../infra/util/string-replace");

helper.gerarCodigoBarras = (numero) => {
	let codigoBarras = "00000000000000000000000000000000000000000000";

	// Verificacao e extratificacao dos dados de cada campo
	codigoBarras = handlerCampoUm(numero, codigoBarras);
	codigoBarras = handlerCampoDois(numero, codigoBarras);
	codigoBarras = handlerCampoTres(numero, codigoBarras);
	codigoBarras = handlerCampoCinco(numero, codigoBarras);

	// Calculo do campo 4 acontece depois de todos para calcular o DV do codigo de barras completo
	codigoBarras = handlerCampoQuatro(numero, codigoBarras);
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

	if (numero.substring(9, 10) != DV) throw "DV campo um inválido!";

	return codigoBarras;
};

handlerCampoDois = (numero, codigoBarras) => {
	let posicoes25a34 = numero.substring(10, 20);
	let DV = calcularDVMod10(numero.substring(10, 20), 2);
	codigoBarras = stringReplace(codigoBarras, 24, 34, posicoes25a34);

	if (numero.substring(20, 21) != DV) throw "DV campo dois inválido!";

	return codigoBarras;
};

handlerCampoTres = (numero, codigoBarras) => {
	let posicoes35a44 = numero.substring(21, 31);
	let DV = calcularDVMod10(numero.substring(21, 31), 3);
	codigoBarras = stringReplace(codigoBarras, 34, 44, posicoes35a44);

	if (numero.substring(31, 32) != DV) throw "DV campo três inválido!";

	return codigoBarras;
};

handlerCampoQuatro = (numero, codigoBarras) => {
	let DV = calcularDVCodigoBarras(codigoBarras);
	console.log(DV)
	codigoBarras = stringReplace(codigoBarras, 4, 5, DV);
	return codigoBarras;
};

handlerCampoCinco = (numero, codigoBarras) => {
	let fatorVencimento = numero.substring(33, 37);
	let valor = numero.substring(37, 47);

	codigoBarras = stringReplace(codigoBarras, 5, 9, fatorVencimento);
	codigoBarras = stringReplace(codigoBarras, 9, 19, valor);

	return codigoBarras;
};

calcularDVMod10 = (campo, ordem) => {
	let total = 0;
	let multiplicarPor2 = ordem == 1 ? true : false;
	for (let i = 0; i < campo.length; i++) {
		let digito = campo[i] * (multiplicarPor2 ? 2 : 1);
		if (digito > 9) {
			let digitoTexto = digito.toString();
			digito = 0;
			for (let y = 0; y < digitoTexto.length; y++)
				digito += parseInt(digitoTexto[y]);
		}
		multiplicarPor2 = !multiplicarPor2;
		total += digito;
	}
	let resto = total % 10;
	return Math.ceil(resto / 10) * 10 - resto;
};

calcularDVCodigoBarras = (codigoBarras) => {
	// Calcular DV
	let multiplicador = 2;
	let total = 0;
	codigoBarras
		.split("")
		.reverse()
		.forEach((digito, index) => {
			if (index == codigoBarras.length - 5) return;
			if (multiplicador > 9) multiplicador = 2;

			total += digito * multiplicador;
			multiplicador++;
		});

	let resto = total % 11;
	let DV = 11 - resto;

	if (DV == 0 || DV == 10 || DV == 11) return 1;

	return DV;
};

module.exports = helper;
