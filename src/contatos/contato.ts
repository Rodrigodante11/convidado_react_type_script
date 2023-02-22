import * as Yup from 'yup'

export interface Contato {
    id?:string;  // ? == opcional
    nome:string;
    idade:number | '';
}

export const validationSchema = Yup.object().shape({
    nome: Yup.string().required("Campo obrigatorio").min(5, "Digite pelo menos 5 caracteres"),
    idade: Yup.number().required("Campo onbrigatorio").min(10 , "Idade minima 10 anos")
})