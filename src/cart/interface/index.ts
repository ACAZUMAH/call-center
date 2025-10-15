import { BranchType } from "../../interfaces/graphql/graphql";
import { useOderCheckoutForm } from "../hooks/useOrderCheckoutForm";

export interface ConfirmOrderProps {
    branch?: BranchType
    setBranch: (value: any) => void
    form: ReturnType<typeof useOderCheckoutForm>;
}

export interface MapModalProps {
  opened: boolean;
  onClose: () => void;
}
export interface CartProps {
    opened: boolean,
    onclose: () => void
}