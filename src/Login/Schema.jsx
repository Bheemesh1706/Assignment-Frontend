import * as yup from "yup";



const loginSchema =yup.object().shape({
    Username: yup.string().min(8).max(15).matches(/^[a-zA-Z0-9_@]+$/,'Valid Inputs are charecter number and ("_","@")').required(),
    Password: yup.string().min(6).max(15).required()
})

const meetingSchema = yup.object().shape(
    {
        Title: yup.string().required(),
        Description: yup.string().required(),
        Start: yup.string().required(),
        End: yup.string().required(),
        id: yup.string()
    }
)

export {loginSchema,meetingSchema}