import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
    customerName: yup.string().required("Customer name is required"),
    customerPhone: yup.string().required("Customer phone number is required"),
    orderMethod: yup.string().required("Order method is required"),
    paymentMethod: yup.string().required("Payment method is required"),
    location: yup.string().optional(),
    nearBranch: yup.string().optional(),
})

export const useOderCheckoutForm = () => {
    const form = useFormik({
        initialValues: {
            customerName: "",
            customerPhone: "",
            orderMethod: "pickup",
            paymentMethod: "cash",
            location: "",
            nearBranch: ""
        },
        validationSchema,
        onSubmit: (values) => {
            console.log( values);
        }
    });
    return { ...form }
}