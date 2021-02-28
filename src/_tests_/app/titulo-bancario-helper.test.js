const tituloBancarioHelper = require('../../app/helpers/titulo-bancario-helper');

describe('Boleto de tipo titulo bancario helper testes', () => {
    test('Gerar codigo de barras com sucesso', () => {
        expect(tituloBancarioHelper.gerarCodigoBarras('21290001192110001210904475617405975870000002000')).toBe('21299758700000020000001121100012100447561740');
    });
    // TODO: Verificar erro nesses testes de exceção
    // test('Lançar exceção no DV campo 1', () => {
    //     expect(tituloBancarioHelper.gerarCodigoBarras('21290001102110001210904475617405975870000002000')).toThrow('DV campo um inválido!');
    // }); 
    // test('Lançar exceção no DV campo 2', () => {
    //     expect(tituloBancarioHelper.gerarCodigoBarras('21290001192110001211904475617405975870000002000')).toThrow('DV campo dois inválido!');
    // });   
    // test('Lançar exceção no DV campo 3', () => {
    //     expect(tituloBancarioHelper.gerarCodigoBarras('21290001192110001210904475617105975870000002000')).toThrow('DV campo três inválido!');
    // });              
});
