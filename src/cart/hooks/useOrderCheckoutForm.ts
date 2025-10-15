import { useFormik } from "formik";
import * as yup from "yup";
import { CallCenterPaymentOptionType, EnumDeliveryType } from "../../interfaces/graphql/graphql";

const validationSchema = yup.object().shape({
    customerName: yup.string().required("Customer name is required"),
    customerPhone: yup.string().required("Customer phone number is required"),
    orderMethod: yup.string().required("Order method is required"),
    paymentMethod: yup.string().required("Payment method is required"),
    address: yup.string().optional(),
})

export const useOderCheckoutForm = () => {
    const form = useFormik({
        initialValues: {
            customerName: "",
            customerPhone: "",
            orderMethod: "" as EnumDeliveryType,
            paymentMethod: "" as CallCenterPaymentOptionType,
            address: "",
        },
        validationSchema,
        validateOnMount: true,
        onSubmit: (values) => {
            console.log( values);
        }
    });
    return { ...form }
}