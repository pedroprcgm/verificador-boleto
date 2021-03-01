module.exports = (campo, ordem) => {
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