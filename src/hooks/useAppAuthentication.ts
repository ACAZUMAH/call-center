import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "./useAppReduxHooks";
import { Authentication } from "../interfaces/redux";
import { authenticationActions } from "../redux/auth/slice";

export const useAppAuthentication = () => {
  const dispatch = useAppDispatch();
  const authentication = useAppSelector((state) => state.authentication);

  const loginUser = useCallback(
    ({ token, phoneNumber }: Authentication) => {
      dispatch(authenticationActions.update({ token, phoneNumber, isLoggedIn: true }));
    },
    [dispatch]
  );

  return { ...authentication, loginUser };
};
