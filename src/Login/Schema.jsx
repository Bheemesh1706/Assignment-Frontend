import * as yup from "yup";



const loginSchema =yup.object().shape({
    Username: yup.string().min(8).max(15).matches(/^[a-zA-Z0-9_]+$/,'Valid Inputs are charecter number and ("_")').required(),
    Password: yup.string().min(6).max(15).required()
})

export {loginSchema}