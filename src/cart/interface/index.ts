import { BranchType } from "../../interfaces/graphql/graphql";

export interface ConfirmOrderProps {
    openMap?: () => void,
    branch?: BranchType
}

export interface MapModalProps {
  opened: boolean;
  onClose: () => void;
}
export interface CartProps {
    opened: boolean,
    onclose: () => void
}