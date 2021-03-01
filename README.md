
# Descrição
- Dada uma linha digitável de um boleto tipo título bancário ou pagamento de concessionárias (contas de luz, água, etc.), a API retornará os dados daquele boleto, como valor, data de vencimento e o número do código de barras.

# Instalação e Execução
- Acesse a pasta raiz do projeto e execute o comando `npm i` para instalar os pacotes necessários
- Após a finalização da instalação, execute o comando `npm start` para executar a aplicação localmente
- Deverá aparecer a mensagem `API running at 8080`.
- A API executará no endereço `http://localhost:8080`. Você pode acessar `http://localhost:8080/api-docs` para visualizar a documentação (swagger) da API.

# Testes
- Para executar os testes, acesse a pasta raiz do projeto
- Execute o comando `npm run test` e veja o resultado no terminal.

# Estrutura
- NodeJS
- Express
- Boom para retorno de mensagens da API
- Jest para testes

# Live
- A API está publicada no link https://vf-boleto.herokuapp.com/api-docs.