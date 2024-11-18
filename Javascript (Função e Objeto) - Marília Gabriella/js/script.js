function logLivro(nome, ano, autor) {
    const nomeM =nome.toUpperCase();
    const anosT = 2050 - ano + " anos";
    const frase = nome + " por " + autor;
    const livro = {
      nome: nomeM,
      anosT,
      frase
    };
    return livro;
  }
  
  const retorno = logLivro("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");
  console.log(retorno.frase);
  