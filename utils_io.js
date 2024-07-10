import { question } from "readline-sync";

export function get_number (message){
    const numero = Number(question(message))

    return numero
}

export function print(message){
    console.log(message)
}

export function get_number_min(message, min){
    const numero = get_number(message)

    if (numero < min){
        get_number_min(message, min)
    }

    return numero
}

export function get_number_in_range (message, min, max){
    const numero = get_number(message)

    if (numero < min || numero > max){
        print(`Valor inválido!`)
        get_number_min(message, min)
    }
    
    return numero
}