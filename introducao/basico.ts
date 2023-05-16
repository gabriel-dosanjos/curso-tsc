const a: string = 'Teste TS!'
console.log(a)

let usuario: {nome: string, idade: number} = {
  nome: 'João',
  idade: 27
}

console.log(usuario)

let funcionario: {
  supervisores: string[],
  baterPonto: (horas: number) => string,
} = {
  supervisores: ['Ana', 'Fernando'],
  baterPonto(horario: number): string {
    if(horario <= 8) {
      return 'Ponto normal'
    } else {
      return 'Fora do horário'
    }
  }

}