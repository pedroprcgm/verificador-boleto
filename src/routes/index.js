const { Router} = require('express'),
    boleto = require('../app/boleto');
    
module.exports = (app) => {

    const router = Router();
    
    /** 
     * @desc Get all events
     */
    router.get('/boleto/:numero', (req, res, next) => {
        let numero = req.params.numero;
        let verificacaoBoleto = boleto.verificar(numero);

        if (verificacaoBoleto.isValid)
            res.json(verificacaoBoleto.dados);
        else 
            res.boom.badRequest('O número informado do boleto não é válido.');
    });

    return router;
};