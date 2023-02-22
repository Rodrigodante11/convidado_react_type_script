import React from 'react'

import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'

import { useFormik, FormikHelpers } from 'formik';
import { Contato , validationSchema } from './contato'

import './index.css';

interface ContatosFormProps {
    contato?: Contato;
}

export const ContatosForm: React.FC<ContatosFormProps> = ({}: ContatosFormProps) =>{

    const formik = useFormik<Contato>({
        onSubmit: (c: Contato) => console.log(c),
        initialValues: { nome: '', idade: '' }, // valor inicial
        validationSchema: validationSchema,
        validateOnChange: false
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container={true}>

                <Grid item xs={12}>
                    <TextField variant='outlined' 
                                label="Nome"
                                id="inputNome"
                                name="nome"
                                value={formik.values.nome}
                                onChange={formik.handleChange}
                                className="full-width" />

                    <span className='error-msg'>{ formik.errors.nome}</span>
                </Grid>
                <br/>
                <br/>
                <br/>

                <Grid item xs={12}>
                    <TextField  variant='outlined' 
                                label="Idade"
                                name="idade"
                                id="inputIdade"
                                value={formik.values.idade}
                                onChange={formik.handleChange}
                                className="full-width"/>
                    <span>{ formik.errors.idade}</span>

                </Grid>

                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary"className="full-width">
                        Adicionar
                    </Button>
                </Grid>

            </Grid>
        </form>
    )
}