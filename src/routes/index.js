const { Router } = require("express"),
	boleto = require("../app/boleto");

module.exports = (app) => {
	const router = Router();

	/**
	 * @desc Busca de dados de um boleto pela linha digitável
	 */
	router.get("/boleto/:numero", (req, res, next) => {
		let numero = req.params.numero;

		try {
			let verificacaoBoleto = boleto.verificar(numero);
			if (verificacaoBoleto.isValid) res.json(verificacaoBoleto.dados);
			else
				res.boom.badRequest(
					"O número informado do boleto não é válido."
				);
		} catch (error) {
			res.boom.badRequest(error);
		}
	});

	return router;
};
