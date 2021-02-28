module.exports = (texto, inicio, fim, novoTexto) => {
    return texto.substring(0, inicio) + novoTexto + texto.substring(fim);
}

