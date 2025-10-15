import { useMutation } from "@tanstack/react-query";
import { useAppAuthentication } from "../../hooks/useAppAuthentication";
import { showNotification } from "@mantine/notifications";
import { CallCenterOrderInputNow } from "../../interfaces/graphql/graphql";

const createOrderMutation = `
mutation CreateScanToOrderDirectPayment($orderInput: CallCenterOrderInputNow!) {
  createScanToOrderDirectPayment(orderInput: $orderInput) {
    data {
      _id
      orderCode
      status
      productTotalPrice
      deliveryFee
      branchId
      address
      location {
        latitude
        longitude
      }
      readyAt
      completedAt
      deliveredAt
      cancelledAt
      acceptedAt
      deliveringAt
      paymentOption
      pickup
      paid
      discount
      packages {
        quantity
        productId {
          _id
          productCode
          productImage
          name
          familyName
          unitPrice
          priceMultiplier
          width
          height
          family
          dominantColor
          imagePublicId
          size
          productionCategory
          description
          generalDescription
          activatedBranches
          enabled
          ingredientsList
          isHighSelling
          couponPercentage
          couponPrice
          discountPercentage
          discountedPrice
          deliveryType
          constituentsList {
            _id
            displayImage
            name
            description
            width
            height
            dominantColor
            imagePublicId
            activatedBranches
            enabled
            createdAt
            updatedAt
          }
        }
        constituents {
          _id
          displayImage
          name
          description
          width
          height
          dominantColor
          imagePublicId
          activatedBranches
          enabled
          createdAt
          updatedAt
        }
        extras {
          _id
          productCode
          productImage
          name
          familyName
          unitPrice
          priceMultiplier
          width
          height
          family
          dominantColor
          imagePublicId
          size
          productionCategory
          description
          generalDescription
          activatedBranches
          enabled
          ingredientsList
          isHighSelling
          couponPercentage
          couponPrice
          discountPercentage
          discountedPrice
          deliveryType
        }
      }
      otp
      createdAt
      updatedAt
      callCenterAgentId {
        _id
        username
        phoneNumber
        email
        deviceToken
        enabled
      }
      assignedSalesPerson {
        _id
        username
        phoneNumber
        email
        branchId {
          _id
          branchCode
          name
        }
        deviceToken
        enabled
      }
      assignedSalesPersonNumber
      comment
      couponCashWorth
      phoneNumber
      customerName
      cancelledReason
      checkoutUrl
      trackingId
      pickupType
      deviceToken
      andasOrderDetails
      momoNumber
      channel
      platform
      serviceFee
      pickupStartDate
      pickupEndDate
      preorderedAt
      andasReceiptNumber
      branch {
        _id
        name
        branchLocation
        region
        coordinates {
          latitude
          longitude
        }
        locationPoint {
          type
          coordinates
        }
        branchContact
        branchCode
        enabled
        pickupOnly
        deliveryOnly
        branchHasPinkBerry
        branchImage
        width
        height
        imagePublicId
        createdAt
        updatedAt
        operationTime {
          closingTime
          openingTime
        }
        deliveryOperationTime {
          closingTime
          openingTime
        }
        secondCourierEnabled
        courierType
        distance
        deliveryType
        paymentMethod {
          type
          platforms
          schedule {
            enabled
            platformRestrictions {
              platform
              alwaysAvailable
              timeRanges {
                startTime
                endTime
                days
              }
              message
            }
          }
        }
        cardPaymentPOSKeys {
          provider
          value
        }
        deliveryConfig {
          type
          enabled
          operationTime {
            closingTime
            openingTime
          }
          maxDistance
          baseFee
          pricePerKm
        }
      }
      payOrderResponse
      couponCode
      couponCashOwned
    }
    message
    statusCode
    success
  }
}`;

export const useCreateOrderMutation = () => {
  const { token } = useAppAuthentication();
  const mutation = useMutation({
    mutationKey: ["createScanToOrderDirectPayment"],
    mutationFn: async (variables: { orderInput: CallCenterOrderInputNow }) => {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/graphql`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ query: createOrderMutation, variables }),
      });

      if (!res.ok) {
        console.log(`Network error: ${res.status} ${res.statusText}`);
      }

      const json = await res.json();

      const payload = json.data.createScanToOrderDirectPayment;

      console.log("Order Creation Response:", JSON.stringify(payload, null, 2));

      return payload;
    },
  });

  const handleCreateOrder = async (orderInput: CallCenterOrderInputNow) => {
    try {
      const res = await mutation.mutateAsync({ orderInput });

        if(res && res.success){
          showNotification({
            title: "Order Created",
            message: "The order has been created successfully.",
            color: "green",
          });
        }

      if (!res || !res.success) {
        showNotification({
          title: "Order Creation Failed",
          message:
            res?.message || "An error occurred while creating the order.",
          color: "red",
        });
      }

      return res;
    } catch (error) {
      showNotification({
        title: "Error",
        message: "An error occurred while creating the order.",
        color: "red",
      });
    }
  };

  return { handleCreateOrder, ...mutation };
};
