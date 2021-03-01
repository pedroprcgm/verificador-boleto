const pagamentoConcessionariaHelper = require('../../app/helpers/pagamento-concessionaria-helper');

describe('Boleto de tipo pagamento concessionaria helper testes', () => {
    test('Gerar codigo de barras com sucesso', () => {
        expect(pagamentoConcessionariaHelper.gerarCodigoBarras('846800000032932402962025102209760002002195182916')).toBe('84680000003932402962021022097600000219518291');
    });
});
