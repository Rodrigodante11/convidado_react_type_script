import { ContatosList } from './List';
import { useState} from 'react'
import { Contato } from './contato'
import { v4 as uuid } from 'uuid'

export const useContatosLogic = () =>{

    const newContato: Contato = {
        idade: '',
        nome: ''
    }

    const [ ContatosList, setContatosList] = useState<Contato[]>([])

    const [ contato, setContato ] = useState<Contato>({
        idade: '',
        nome: ''
    })

    const addContato = ( contato: Contato) =>{
        contato.id = uuid() // setando um id
        setContatosList([ ...ContatosList, contato])
    }

    return {
        contato,
        addContato
    }
}