import { Modal } from "@mantine/core";
import React from "react";

interface AvailabilityModalProps {
  opened: boolean;
  onClose: () => void;
  availability: any; //Todo: define interface
}

export const AvailabilityModal: React.FC<AvailabilityModalProps> = ({
  opened,
  onClose,
}) => {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Items Availability"
      size="lg"
    >
      AvailabilityModal
    </Modal>
  );
};
