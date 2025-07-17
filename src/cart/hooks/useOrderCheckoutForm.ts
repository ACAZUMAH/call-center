import { useFormik } from "formik";
import * as yup from "yup";
import { EnumDeliveryType } from "../../interfaces/graphql/graphql";

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
            orderMethod: "" as EnumDeliveryType,
            paymentMethod: "" as EnumDeliveryType,
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