import * as yup from 'yup'


export const formularValidationSchema = yup.object().shape({
    username: yup.string().required('Username is requiered'),
    password: yup.string().min(6, 'Too short!').max(20,'to long').required('Password is required')
})