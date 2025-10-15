import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useGetBranchesQueryOptions } from "../hooks/useGetBranches";
import {
  Alert,
  Center,
  Divider,
  Loader,
  Paper,
  TextInput,
} from "@mantine/core";
import { Conditional } from "../../components";
import { BranchSearchItem } from "./BranchSearchItem";
import { BranchType } from "../../interfaces/graphql/graphql";
import { useDebouncedState } from "@mantine/hooks";

interface BranchSearchItemProps {
  setBranch: (branch: BranchType) => void;
}

export const BranchesSearch: React.FC<BranchSearchItemProps> = ({
  setBranch,
}) => {
  const [search, setSearch] = useDebouncedState("", 200);

  const { data, isLoading, isError } = useQuery(
    useGetBranchesQueryOptions(
      {
        coordinates: [],
        enabled: true,
        limit: 5,
        megSearch: search,
        sortBy: "distance",
      },
      true
    )
  );

  const showBranches = data?.length > 0 && !isLoading && !isError;
  const showNoBranches = !data?.length && !isLoading && !isError;

  return (
    <Paper withBorder p="md">
      <TextInput
        mb="md"
        placeholder="Search Branches"
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}
      />
      <Conditional condition={isLoading}>
        <Center>
          <Loader type="dots" />
        </Center>
      </Conditional>
      <Conditional condition={showBranches}>
        {data?.map((branch: BranchType, i: number) => (
          <div key={i}>
            <Divider mb="md" />
            <BranchSearchItem
              key={i}
              branch={branch}
              onSelectBranch={setBranch}
            />
          </div>
        ))}
      </Conditional>

      <Conditional condition={showNoBranches}>
        <Alert color="yellow">
          No branches found for search query {search}.
        </Alert>
      </Conditional>
    </Paper>
  );
};
