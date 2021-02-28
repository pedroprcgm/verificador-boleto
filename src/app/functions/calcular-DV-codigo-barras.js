module.exports = (codigoBarras) => {
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