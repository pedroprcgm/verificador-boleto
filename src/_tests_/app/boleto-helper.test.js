const boletoHelper = require('../../app/helpers/boleto-helper');
const TIPOS_BOLETO = require("../../models/tipos-boleto");

describe('Boleto helper testes', () => {
    test('Obter data de vencimento com sucesso (titulo)', () => {
        expect(boletoHelper.obterDataVencimento('21299758700000020000001121100012100447561740', TIPOS_BOLETO.titulo)).toBe('2018-07-16');
    });
    test('Obter valor com sucesso (titulo)', () => {
        expect(boletoHelper.obterValor('21299758700000020000001121100012100447561740', TIPOS_BOLETO.titulo)).toBe('20.00');
    });
    test('Obter data de vencimento com sucesso (concessionaria)', () => {
        expect(boletoHelper.obterDataVencimento('84680000003932402962021022097600000219518291', TIPOS_BOLETO.concessionaria)).toBe('2021-02-20');
    });
    test('Obter valor com sucesso (concessionaria)', () => {
        expect(boletoHelper.obterValor('84680000003932402962021022097600000219518291', TIPOS_BOLETO.concessionaria)).toBe('393.24');
    });    
});
