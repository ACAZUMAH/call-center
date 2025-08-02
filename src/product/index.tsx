import { Modal } from "@mantine/core";
//import { useQuery } from "@tanstack/react-query";
import React from "react";
//import { useGetProductsQueryOptions } from "./hooks/useGetProductQuery";

interface ProductProps {
  opened: boolean;
  onClose: () => void;
  productId?: string;
}

export const Product: React.FC<ProductProps> = ({ opened, onClose }) => {
//   const { data, loading, error } = useQuery(useGetProductsQueryOptions(productId));

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      size="80%"
      title="Product Details"
      overlayProps={{ 
        backgroundOpacity: 0.55,
        blur: 3
      }}
    ></Modal>
  );
};
