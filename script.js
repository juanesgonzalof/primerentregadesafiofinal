let turista = 1.7,
solidario = 1.65,
netflix = 1.55;

function calcularDolar(valor) {
valor = prompt("Ingresar valor actual");

let valorResultado = alert(
  `Valor dolar oficial ${valor}, Dolar solidario${
    valor * solidario
  }, Dolar turista ${valor * turista}, Dolar netflix ${valor * netflix}`
);
return valorResultado;
}

calcularDolar();

