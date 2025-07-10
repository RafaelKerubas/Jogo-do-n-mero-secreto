alert('Boas vindas ao jogo do número secreto!');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log('numeroSecreto');
let chute;
let tentativas = 1;  

// Enquanto o usuário não acertar o número secreto, continue pedindo um novo chute
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // Se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    // Se o chute for maior ou menor que o número secreto, avise o usuário
    } else {
    if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}. Tente novamente!`);
    } else {
        alert(`O número secreto é maior que ${chute}. Tente novamente!`);
    }
    tentativas++;
    // Se o chute for diferente do número secreto, avise o usuário
    
} 
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);

//if (tentativas > 1) {
    // alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas!`);
//} else {
//    alert(`Parabéns, você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa!`);
//}