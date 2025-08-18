import { showNotification } from "@mantine/notifications";
import { useMutation } from "@tanstack/react-query";
import { useAppAuthentication } from "../../hooks/useAppAuthentication";

const loginMutation = `
mutation CallCenterAgentLogin($phoneNumber: phoneNumber_String_NotNull_minLength_9_maxLength_13!, $password: password_String_NotNull_minLength_6_maxLength_256!) {
  callCenterAgentLogin(phoneNumber: $phoneNumber, password: $password) {
    data {
      jwt
      phoneNumber
    }
    message
    success
    statusCode
  }
}`;

export const useLoginMutation = () => {
  const { loginUser } = useAppAuthentication();
  const mutation = useMutation({
    mutationKey: ["callCenterAgentLogin"],
    mutationFn: async (variables: {
      phoneNumber: string;
      password: string;
    }) => {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/graphql`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: loginMutation, variables }),
      });

      if (!res.ok) {
        console.log(`Network error: ${res.status} ${res.statusText}`);
      }

      const json = await res.json();

      if (Array.isArray(json?.errors) && json.errors.length > 0) {
        console.log("json error: ", json.errors[0]?.message || "GraphQL error");
      }

      const payload = json.data.callCenterAgentLogin;
      
      return payload;
    },
  });

  const handleLogin = async (phoneNumber: string, password: string) => {
    try {
      const res = await mutation.mutateAsync({ phoneNumber, password });

      if (!res || !res.success) {
        showNotification({
          title: "Login Failed",
          message: res?.message || "An error occurred during login.",
          color: "red",
        });
        return;
      }

      showNotification({
        title: "Login Successful",
        message: `Welcome back, ${res.data.phoneNumber}`,
        color: "",
      });

      loginUser({
        isLoggedIn: true,
        token: res.data.jwt,
        phoneNumber: res.data.phoneNumber,
      });

      return res;
    } catch (error: any) {
      showNotification({
        title: "Error",
        message: "An error occurred during login.",
        color: "red",
      });
    }
  };

  return { handleLogin, loading: mutation.isPending, error: mutation.error };
};
