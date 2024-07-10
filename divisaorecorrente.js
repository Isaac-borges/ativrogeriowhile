import { get_number, get_number_min, print } from "./utils/utils_io.js";

function main(){
    let num = get_number_min("Insira um número: ", 0)
    let divid = num
    let contador = 0

    while(divid > 1){
        divid = divid/2
        contador++

    }
    print(`Valor da ultima divisão : ${divid}`)
    print(`Número de divisões      : ${contador}`)
}

main()