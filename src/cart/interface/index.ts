export interface ComfirmOrderProps {
    openMap: () => void,
}

export interface MapModalProps {
  opened: boolean;
  onClose: () => void;
}
export interface CartProps {
    opened: boolean,
    onclose: () => void
}