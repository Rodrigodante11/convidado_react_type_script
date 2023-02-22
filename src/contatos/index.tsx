import React, {FC} from 'react'
import { ContatosForm } from './form'
import { ContatosList } from './List'

export const Contatos: FC = () =>{
    return(
        <>
            <ContatosForm />
            <ContatosList />
            
        </>
    )
}