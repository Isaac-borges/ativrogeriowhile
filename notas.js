import { get_number_in_range, get_number_min, print } from "./utils/utils_io.js"

function calcular_media(n1, n2, n3){
    const media = ((2*n1) + (3*n2) + (5*n3)) / 10

    return media
}

function main(){
    print("Calculadora de medias")

    let nota1, nota2, nota3, media
    let aprovado = 0
    let reprovado = 0
    let contador = 0

    let matricula = get_number_min("Número da matrícula: ", 0)

    while (matricula !== 0){
        nota1 = get_number_in_range("Qual a primeira nota do(a) aluno(a)?  : ", 0, 10)
        nota2 = get_number_in_range("Qual a segunda nota do(a) aluno(a)?   : ", 0, 10)
        nota3 = get_number_in_range("Qual a terceira nota do(a) aluno(a)?  : ", 0, 10)

        media = calcular_media(nota1, nota2, nota3)
        print(`Média final = ${media}`)
        if (media >= 7){
            print("Aluno(a) aprovado(a)!")
            aprovado++
        } else {
            print("Aluno(a) reprovado(a)!")
            reprovado++
        }

        contador++

        matricula = get_number_min("Número da matrícula: ", 0)
    }

    let mensagem = `
    -----------------------------------
    Número de aprovados    : ${aprovado}
    Número de reprovados   : ${reprovado}
    Número total de alunos : ${contador}
    -----------------------------------
    `
    print(mensagem)
}

main()