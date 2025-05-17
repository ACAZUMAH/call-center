import { AspectRatio } from "@mantine/core";
import React from "react";

export const DeliveryMap: React.FC = () => {
  return (
    <>
      <AspectRatio ratio={16 / 9}>
        <iframe
          src="https://www.google.com/maps/embed"
          title="Google map"
          style={{ border: 0 }}
        />
      </AspectRatio>
    </>
  );
};
