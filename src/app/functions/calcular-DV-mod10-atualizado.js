module.exports = numero => {
	let total = 0;
	let multiplicarPor2 = true;
	numero
		.split("")
		.reverse()
		.forEach((digito, index) => {
			digito = digito * (multiplicarPor2 ? 2 : 1);
			if (digito > 9) {
				let digitoTexto = digito.toString();
				digito = 0;
				for (let y = 0; y < digitoTexto.length; y++)
					digito += parseInt(digitoTexto[y]);
			}
			multiplicarPor2 = !multiplicarPor2;
			total += digito;
		});
	let resto = total % 10;
	if (resto == 0) return 0;
	return 10 - resto;
};