const boletoHelper = require('../../app/helpers/boleto-helper');

describe('Boleto helper testes', () => {
    test('Obter data de vencimento com sucesso', () => {
        expect(boletoHelper.obterDataVencimento('21299758700000020000001121100012100447561740')).toBe('2018-07-16');
    });
    test('Obter valor com sucesso', () => {
        expect(boletoHelper.obterValor('21299758700000020000001121100012100447561740')).toBe('20.00');
    });
});
