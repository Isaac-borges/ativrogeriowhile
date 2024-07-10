import { get_number, get_number_min, print } from "./utils/utils_io.js";

function main(){
    print("Frigorífico, bom dia!")

    let num_id = get_number_min("Insira o número de identificação do boi: ", 0)
    let peso_boi = get_number_min("Insira o peso do boi: ", 0)

    let peso_maior = peso_boi
    let id_maior = num_id
    let peso_menor = peso_boi
    let id_menor = num_id
    
    num_id = get_number_min("Insira o número de identificação do boi: ", 0)
    while (num_id !== 0){
        peso_boi = get_number_min("Insira o peso do boi: ", 0)

        if (peso_boi > peso_maior){
            peso_maior = peso_boi
            id_maior = num_id
        } else if (peso_boi < peso_menor){
            peso_menor = peso_boi
            id_menor = num_id
        }

        num_id = get_number_min("Insira o número de identificação do boi: ", 0)
    }

    const message = `
    --------------------------------------------------------------

    O boi mais pesado é o de ID ${id_maior} e peso ${peso_maior} kg.
    O boi menos pesado é o de ID ${id_menor} e peso ${peso_menor} kg.

    --------------------------------------------------------------
    `

    print(message)
}

main()