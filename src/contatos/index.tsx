import React, {FC} from 'react'
import { ContatosForm } from './form'
import { ContatosList } from './List'
import { useContatosLogic } from './useContatoLogic'
import { Contato } from './contato'


export const Contatos: FC = () =>{

    const logic = useContatosLogic();

    const handleFormSubmit = ( contato: Contato) =>{
        console.log("submetendo", contato)
    }

    return(
        <>
            <ContatosForm submeterFormulario={handleFormSubmit} contato={logic.contato}/>
            <ContatosList />
            
        </>
    )
}
