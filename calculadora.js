const numero = parseInt(process.argv[2]);

if (isNaN(numero) || numero < 0) {
  console.log("Ingresa un número válido");
} else {
  let resultado = 1;
  for (let i = 2; i <= numero; i++) {
    resultado *= i;
  }
  console.log(`El factorial de ${numero} es: ${resultado}`);
}