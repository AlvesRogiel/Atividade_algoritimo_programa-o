function somarIntervalo(a , b){
let soma = 0;
while(a <= b)
    soma = soma + a;
    a = a + 1;
    return soma
}
let r = intervalo(2,8);
console.log(r);

