import { useFormik } from "formik"
import * as yup from "yup"
import { useValidatePhoneNumber } from "../../hooks/usePhonenumberValidation"

const { title, message, validatePhoneNumber } = useValidatePhoneNumber()

const validationSchema = yup.object().shape({
    phoneNumber: yup.string().test(title, message, validatePhoneNumber).required(''),
    password: yup.string().required('Password is required')
})

export const useLoginForm = () => {
    const form = useFormik({
        initialValues: {
            phoneNumber: '',
            password: ''
        },
        validationSchema,
        validateOnMount: true,
        onSubmit: () => {}
    })

    return { ...form }
}