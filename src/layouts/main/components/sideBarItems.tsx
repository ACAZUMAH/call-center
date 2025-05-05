import { Group, Text } from "@mantine/core";
import React, { useMemo } from "react";
import { SidebarItemsProps } from "../interfaces";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useAppNavigation } from "../../../hooks/useAppNavigation";

export const SideBarItems: React.FC<SidebarItemsProps> = ({
  label,
  Icon,
  route,
  onClick,
}) => {
  const location = useLocation();
  const navigateToRoute = useAppNavigation(route || '')

  const $active = useMemo(() => {
    if (!route) return false;
    if (route === "/") return location.pathname === route;
    return location.pathname.includes(route);
  }, [location.pathname, route]);


  const handleClick = () => {
    if(route) navigateToRoute()

    onClick?.()
  }
  return (
    <>
      <Container $active={$active} key={label} onClick={handleClick}>
        <Group px="lg">
          <Icon size={20} stroke={1.5} />
          <Text>{label}</Text>
        </Group>
      </Container>
    </>
  );
};

const Container = styled.div<{ $active?: boolean }>`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border-radious: 0px;

  color: ${({ theme, $active }) => {
    if ($active) return theme.colors?.brand?.[6];
    return theme.darkMode ? theme.colors?.dark?.[0] : theme.colors?.gray?.[7];
  }};

  background-color: ${({ theme, $active }) => {
    if ($active) {
      return theme.darkMode ? theme.colors?.dark?.[8] : theme.colors?.gray?.[3];
    }
    return theme.darkMode ? theme.colors?.dark?.[7] : theme.white;
  }};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => {
      return theme.darkMode ? theme.colors?.dark?.[8] : theme.colors?.gray?.[3];
    }};
  }
`;
