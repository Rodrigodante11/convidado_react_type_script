import React from 'react'

import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'

import { Contato } from './contato'

interface ContatosFormProps {
    contato?: Contato;
}

export const ContatosForm: React.FC<ContatosFormProps> = ({}: ContatosFormProps) =>{
    return (
        <form>
            <Grid container={true}>

                <Grid item xs={12}>
                    <TextField variant='outlined' label="Nome">

                    </TextField>
                </Grid>

                <Grid item xs={12}>
                    <TextField variant='outlined' label="Idade">

                    </TextField>
                </Grid>

                <Grid item xs={12}>
                    <Button variant="contained" color="primary">
                        Adicionar
                    </Button>
                </Grid>

            </Grid>
        </form>
    )
}